import { CtrlButton, CtrlConfirm, CtrlDialog, CtrlDynamicForm, CtrlInput, CtrlNotification } from 'components/common';
import Card from 'components/common/Card';
import CtrlDynamicButton from 'components/common/CtrlDynamicButton';
import CtrlDynamicTable from 'components/common/CtrlDynamicTable';
import { Message } from 'models/Enums';
import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { connect } from "react-redux";
import { InitState } from './InitState';
import { Actions } from './Action';
import { Reducer } from './Reducer';
import file_CGCNQSDListViewJson from './ListView.json';
import formInput_UploadFile from './FormInput_UploadFile.json';
import File_CGCNQSDForm from './Form'
import { IResponseMessage } from 'models/Apps';
import CtrlInputFile from 'components/common/CtrlInputFile';
import CtrlDate from 'components/common/CtrlDate';

interface Props {

}

const File_CGCNQSDList = (props: Props) => {  
    const [state, dispatch] = useReducer(Reducer, InitState)
    const [file_CGCNQSDId, setFile_CGCNQSDId] = useState('');
    const file_CGCNQSDListView:any = file_CGCNQSDListViewJson;    
    const refNotification = useRef<any>();
    const refConfirm_DeleteItem = useRef<any>();
    const refDynamicTable = useRef<any>();
    const [dialogVisible, setDialogVisible] = useState(false);
    const [dialogVisible_Upload, setDialogVisible_Upload] = useState(false);
    const [dialogVisible_Sync, setDialogVisible_Sync] = useState(false);
    const [isShowFormSeach, setIsShowFormSearch] = useState(true);
    const [formSearch, setFormSearch] = useState({ toDate: "", endDate: "" });
    const refDynamicForm = useRef<any>();
    const [fileUpload, setUploadFile] = useState({Files:[]});
    useEffect(() => {        
        //Actions.GetItems(dispatch);     
    }, [])
    const ActionEvents = {
        onClickOkUpload: async () => {
            if(refDynamicForm.current.getStateValues().Files.length > 0)
            {
                var file = refDynamicForm.current.getStateValues().Files[0].Url;
                var res:any = await Actions.Import(file);
                if(res && res.Success)
                {
                    refNotification.current.showNotification("success", res.Message);  
                    Actions.GetItems(dispatch);  
                }
            }
            else
            {
                refNotification.current.showNotification("warning", "Vui lòng tải file lên");  
            }
        },
        onClickOkUploadDownload: async () => {
            var res:any = await Actions.FileTemplate();
            if(res && res.Success)
            {
                window.open(process.env.ROOT_URL + res.Data);
            }
        },
        FuncSync: () => {
            alert("Bạn cần API đồng bộ Vlis");
        },
        onClickUpload: () => {
            setDialogVisible_Upload(true);
        },
        onClickSearch: () => {
            setIsShowFormSearch(true);
        },
        onClickSync: () => {
            setDialogVisible_Sync(true);
        },
        onClickCreate: () => {
            setFile_CGCNQSDId('');
            setDialogVisible(true);    
        },
        onClickUpdate: () => {
            if(!getRowId()) { refNotification.current.showNotification("warning", Message.Require_Row_Selection); return; }            
            setFile_CGCNQSDId(getRowId());
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
    let ButtonSync = () => {
        return <CtrlDynamicButton actionDefs=
        {[{
            "Key": "Đồng bộ Vlis", 
            "Title": "Đồng bộ CSDL Vlis",
            "Type": "Button",
            "TitleTooltip": "Đồng bộ Vlis",
            "Icon": "sync",
            "Action": "FuncSync"
        }]} actions={ActionEvents} />;
    }    
    let ButtonGroupsRender = () => {
        return <CtrlDynamicButton actionDefs={file_CGCNQSDListView.DataGrid.ActionDefs} actions={ActionEvents} />;
    }    
    const DialogMemo = useMemo(() => {
        return <>
        {dialogVisible == true ?
            <CtrlDialog style={{width:"95%"}} title={file_CGCNQSDId ? "Sửa cấp GCN quyền sử dụng đất": "Tạo mới cấp GCN quyền sử dụng đất"} dialogVisible={dialogVisible} onCancel={() => setDialogVisible(false)}>
                <File_CGCNQSDForm Id={file_CGCNQSDId} ReloadTableItems = {ReloadTableItems} />
            </CtrlDialog>
            :<div></div>
        }
        </>
    }, [dialogVisible])
    const DialogMemo_Upload = useMemo(() => {
        return <>
        {dialogVisible_Upload == true ?
            <CtrlDialog style={{width:"20%"}} title={"Tải file lên"} dialogVisible={dialogVisible_Upload} onCancel={() => setDialogVisible_Upload(false)}>
                <CtrlDynamicForm ref={refDynamicForm} initValues={fileUpload} formDefs={formInput_UploadFile} actionEvents={ActionEvents} />
            </CtrlDialog>
            :<div></div>
        }
        </>
    }, [dialogVisible_Upload])

    const onChangeFormSearch = (key: string, value: string) => {
        setFormSearch({
            ...formSearch,
            [key]: value
        })
    }
    const OnSearch = () => {
        if(!formSearch.toDate && !formSearch.endDate )
        {
            refNotification.current.showNotification("warning", "Vui lòng nhập tiêu chí tìm kiếm !");    
            return;  
        }
        Actions.SearchItems(formSearch, dispatch); 
    }
    return(
        <>
            <CtrlConfirm ref={refConfirm_DeleteItem} Title="Thao tác này sẽ xóa cấp GCN quyền sử dụng đất" Ok={async () => {await DeleteById()}} Canel={()=>{}} />
            <CtrlNotification ref={refNotification} />   
            {DialogMemo}
            {DialogMemo_Upload}
            <Card key='file_CGCNQSD' title={file_CGCNQSDListView.DataGrid.Title} buttonGroups={ButtonGroupsRender()}>
                        {
                            isShowFormSeach === true ? 
                            <div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <CtrlDate placeholder="Từ ngày" key={"toDate"} onChange={(e:any) => {onChangeFormSearch('toDate', e)}} value={formSearch.toDate} />         
                                    </div> 
                                    <div className="col-sm-2">
                                        <CtrlDate placeholder="Đến ngày" key={"endDate"} onChange={(e:any) => {onChangeFormSearch('endDate', e)}} value={formSearch.endDate} />    
                                    </div>  
                                    <div className="col-sm-2">
                                    <CtrlButton title="Tìm kiếm" onClick={() => { OnSearch(); }} />
                                        <CtrlButton title="Đóng" type={"default"} onClick={() => {setIsShowFormSearch(false)}} /> 
                                    </div>                     
                                </div>
                                <hr/>
                            </div>:<div></div>
                        }   
                <CtrlDynamicTable 
                    ref={refDynamicTable}
                    id={file_CGCNQSDListView.DataGrid.Key} 
                    key={file_CGCNQSDListView.DataGrid.Key} 
                    columnDefs={file_CGCNQSDListView.DataGrid.ColumnDefs} 
                    dataItems={state.DataItems}>                
                </CtrlDynamicTable>
            </Card>
        </>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
  
};

export default connect(mapState, mapDispatchToProps)(File_CGCNQSDList);