import { CConfirm, CDialog, CNotification, CDynamicTable, CDynamicButton, CButton } from 'components';
import ACard from 'components/ACard';
import { Message } from 'common/Enums';
import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { connect } from "react-redux";
import { InitState } from './InitState';
import { Actions } from './Action';
import { Reducer } from './Reducer';
import monHocListViewJson from './ListView.json';
import MonHocForm from './Form'
import { IResponseMessage } from 'common/Models';

interface Props {

}

const QuanLyMonHoc = (props: Props) => {  
    const [state, dispatch] = useReducer(Reducer, InitState)
    const [monHocId, setmonHocId] = useState('');
    const monHocListView:any = monHocListViewJson;    
    const refNotification = useRef<any>();
    const refConfirm_DeleteItem = useRef<any>();
    const refDynamicTable = useRef<any>();
    const [dialogVisible, setDialogVisible] = useState(false);
    useEffect(() => {        
        Actions.GetItems(dispatch);     
    }, [])
    const ActionEvents = {
        onClickCreate: () => {
            setmonHocId('');
            setDialogVisible(true);    
        },
        onClickUpdate: () => {
            if(!getRowId()) { refNotification.current.showNotification("warning", Message.Require_Row_Selection); return; }            
            setmonHocId(getRowId());
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
        return <CDynamicButton actionDefs={monHocListView.DataGrid.ActionDefs} actions={ActionEvents} />;
    }    
    const DialogMemo = useMemo(() => {
        return <>
        {dialogVisible == true ?
            <CDialog title={monHocId ? "Sửa môn học": "Tạo mới môn học"} dialogVisible={dialogVisible} onCancel={() => setDialogVisible(false)}>
                <MonHocForm Id={monHocId} ReloadTableItems = {ReloadTableItems} />
            </CDialog>
            :<div></div>
        }
        </>
    }, [dialogVisible])
  
    return(
        <>
            <CConfirm ref={refConfirm_DeleteItem} Title="Thao tác này sẽ xóa môn học" Ok={async () => {await DeleteById()}} Canel={()=>{}} />
            <CNotification ref={refNotification} />   
            {DialogMemo}
            <ACard title={monHocListView.DataGrid.Title} buttonGroups={ButtonGroupsRender()}>
                <CDynamicTable 
                    ref={refDynamicTable}
                    id={monHocListView.DataGrid.Key} 
                    key={monHocListView.DataGrid.Key} 
                    columnDefs={monHocListView.DataGrid.ColumnDefs} 
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

export default connect(mapState, mapDispatchToProps)(QuanLyMonHoc);