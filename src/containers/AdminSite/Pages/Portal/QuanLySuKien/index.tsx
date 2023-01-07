import { CConfirm, CDialog, CNotification, CDynamicTable, CDynamicButton } from 'components';
import ACard from 'components/ACard';
import { Message } from 'common/Enums';
import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { connect } from "react-redux";
import { InitState } from './InitState';
import { Actions } from './Action';
import { Reducer } from './Reducer';
import SuKienListViewJson from './ListView.json';
import SuKienForm from './Form'
import { IResponseMessage } from 'common/Models';

interface Props {

}

const SuKienList = (props: Props) => {  
    const [state, dispatch] = useReducer(Reducer, InitState)
    const [suKienId, setsuKienId] = useState('');
    const SuKienListView:any = SuKienListViewJson;    
    const refNotification = useRef<any>();
    const refConfirm_DeleteItem = useRef<any>();
    const refDynamicTable = useRef<any>();
    const [dialogVisible, setDialogVisible] = useState(false);
    useEffect(() => {        
        Actions.GetItems(dispatch);     
    }, [])
    const ActionEvents = {
        onClickCreate: () => {
            setsuKienId('');
            setDialogVisible(true);    
        },
        onClickUpdate: () => {
            if(!getRowId()) { refNotification.current.showNotification("warning", Message.Require_Row_Selection); return; }            
            setsuKienId(getRowId());
            setDialogVisible(true);            
        },
        onClickDelete: async () => {
            if(!getRowId()) { refNotification.current.showNotification("warning", Message.Require_Row_Selection); return; }
            refConfirm_DeleteItem.current.showConfirm();            
        },
    }
    const DeleteById = async () => {
        let res:IResponseMessage = await Actions.DeleteById(getRowId(),dispatch);             
        if(res.Success) {            
            refNotification.current.showNotification("success", res.Message);          
            ReloadTableItems();
        }  
    }
    const ReloadTableItems = () => {
        Actions.GetItems(dispatch);  
    }
    const getRowId = () => {        
        return refDynamicTable.current.getRowId();
    }
    let ButtonGroupsRender = () => {
        return <CDynamicButton actionDefs={SuKienListView.DataGrid.ActionDefs} actions={ActionEvents} />;
    }    
    const DialogMemo = useMemo(() => {
        return <>
        {dialogVisible == true ?
            <CDialog style={{width: "500px", top: "5%"}}  title={suKienId ? "Sửa sự kiện": "Tạo mới sự kiện"} dialogVisible={dialogVisible} onCancel={() => setDialogVisible(false)}>
                <SuKienForm Id={suKienId} ReloadTableItems = {ReloadTableItems} />
            </CDialog>
            :<div></div>
        }
        </>
    }, [dialogVisible])
    return(
        <>
            <CConfirm ref={refConfirm_DeleteItem} Title="Thao tác này sẽ xóa sự kiện này" Ok={async () => {await DeleteById()}} Canel={()=>{}} />
            <CNotification ref={refNotification} />   
            {DialogMemo}
            <ACard title={SuKienListView.DataGrid.Title} buttonGroups={ButtonGroupsRender()}>
                <CDynamicTable 
                    ref={refDynamicTable}
                    id={SuKienListView.DataGrid.Key} 
                    key={SuKienListView.DataGrid.Key} 
                    columnDefs={SuKienListView.DataGrid.ColumnDefs} 
                    dataItems={state.DataItems}            
                />
            </ACard>
        </>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
  
};

export default connect(mapState, mapDispatchToProps)(SuKienList);