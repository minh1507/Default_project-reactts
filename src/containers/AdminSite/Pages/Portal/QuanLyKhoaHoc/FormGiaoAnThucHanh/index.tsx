import { Guid, Message } from "common/Enums";
import ACard from "components/ACard";
import CButton from "components/CButton";
import CDynamicButton from "components/CDynamicButton";
import CDynamicForm from "components/CDynamicForm";
import CTree from "components/CTree";
import React, { useEffect, useReducer, useRef } from "react";
import { connect } from "react-redux";
import FormGiaoAnLyThuyetJson from "./FormInput.json";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { IResponseMessage } from "common/Models";
import CNotification from "components/CNotification";
import CConfirm from "components/CConfirm";
interface Props {
  khoaHocId: any
}

const FormGiaoAnLyThuyet = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  const MenuId_Tree = useRef(Guid.Empty)
  const refDynamicForm = useRef<any>();
  const refNotification = useRef<any>();
  const refConfirm_DeleteItem = useRef<any>();
  let FormGiaoAnLyThuyet: any = FormGiaoAnLyThuyetJson;

  useEffect(() => {
    if(props.khoaHocId && props.khoaHocId != Guid.Empty)
    {
      Actions.GetTree(props.khoaHocId, dispatch);
    }
  }, [])
  const RemoveHightlightToRootElement = () => {
    let nodes:any = document.getElementsByClassName("el-tree-node__content");
    for(let i = 0;i < nodes.length;i++)
    {
        var element = nodes[i];
        element.classList.remove("highlight-current");
    }
  } 
  const onNodeClicked = (data:any, node:any) => {
    if(data.Id != Guid.Empty) {
      RemoveHightlightToRootElement()
      MenuId_Tree.current = data.Id;      
      Actions.GetItem(data.Id, dispatch);   
    }
    else
    {
      refDynamicForm.current.setFirstSubmit(false)
      Actions.RefeshItem(dispatch);
    }
  }
  const RefeshTree = () => {
    if(props.khoaHocId && props.khoaHocId != Guid.Empty)
    {
      Actions.GetTree(props.khoaHocId, dispatch);
    }
  }
  const ActionEvents = {
    onClickRefesh : () => {
      refDynamicForm.current.setFirstSubmit(false)
      Actions.RefeshItem(dispatch);
    },
    onClickUpdate: async () => {
      if (!props.khoaHocId) {
        refNotification.current.showNotification("warning", "Vui lòng tạo mới khóa học trước !");
        return;
      }
      let isValid = refDynamicForm.current.onValidation();
      if (isValid) {
        let stateValues = refDynamicForm.current.getStateValues();
        let res: IResponseMessage = await Actions.UpdateItem(stateValues, dispatch);;
        if (res.Success) {
          refNotification.current.showNotification("success", res.Message);
          RefeshTree();
        }
      }
    },
    onClickAppend: async () => {
      if (!props.khoaHocId) {
        refNotification.current.showNotification("warning", "Vui lòng tạo mới khóa học trước !");
        return;
      }
      let isValid = refDynamicForm.current.onValidation();
      if (isValid) {
        let stateValues = refDynamicForm.current.getStateValues();
        stateValues.Id = Guid.Empty;
        stateValues.IdGiaoAnThucHanh = MenuId_Tree.current;
        let res: IResponseMessage = await Actions.CreateItemWithKhoaHoc(stateValues, props.khoaHocId, dispatch);
        if (res.Success) {
          refNotification.current.showNotification("success", res.Message);
          RefeshTree();
        }
      }
    },
    onClickRemove: () => {
      if(!MenuId_Tree.current) { refNotification.current.showNotification("warning", Message.Require_Row_Selection); return; }
      refConfirm_DeleteItem.current.showConfirm();   
    }
  }
  const DeleteById = async () => {
    let res:IResponseMessage = await Actions.DeleteById(MenuId_Tree.current,dispatch);             
    if(res.Success) {            
        refNotification.current.showNotification("success", res.Message);          
        RefeshTree()
    }  
}
  // const ButtonGroupsRender = () => {
  //   return <CDynamicButton actionDefs={FormGiaoAnLyThuyet.ActionDefs} actions={ActionEvents} />;
  // }
  const ButtonGroupsRender_TreeMenu = () => {
    return <CButton title="Làm mới" onClick={() => {RefeshTree()}} />;
  }
  return (
    <>
      <CConfirm ref={refConfirm_DeleteItem} Title="Thao tác này sẽ xóa giáo án" Ok={async () => {await DeleteById()}} Canel={()=>{}} />
      <CNotification ref={refNotification} /> 
      <div className="row">
        <div className="col-sm-5">
          <ACard title={"Danh sách giáo án thực hành"} buttonGroups={ButtonGroupsRender_TreeMenu()}>
            <CTree
              onNodeClicked={onNodeClicked}
              options={{ children: "Children", label: "Name" }}
              data={state.Tree}
              nodeKey={"Id"}
              defaultExpandedKeys={[Guid.Empty]}
            />
          </ACard>
        </div>
        <div className="col-sm-7">
          <ACard title={"Nhập thông tin giáo án thực hành"}>
            <CDynamicForm
              ref={refDynamicForm}
              options={[]}
              initValues={state.Item}
              formDefs={FormGiaoAnLyThuyet}
              actionEvents={ActionEvents}
            />
          </ACard>
        </div>
      </div>  
    </>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(FormGiaoAnLyThuyet);
