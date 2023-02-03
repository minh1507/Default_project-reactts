import { Guid } from "common/Enums";
import CDynamicForm from "components/CDynamicForm";
import CTree from "components/CTree";
import React, { useRef } from "react";
import { connect } from "react-redux";
import FormGiaoAnLyThuyetJson from "./FormInput.json";
interface Props {
}

const FormGiaoAnLyThuyet = (props: Props) => {
  const refDynamicForm = useRef<any>();
  let FormGiaoAnLyThuyet: any = FormGiaoAnLyThuyetJson;
  const onNodeClicked = (data: any, node: any) => {

  }

  const ActionEvents = {

  }
  return (
    <div className="row">
      <div className="col-sm-6">
        <CTree
          onNodeClicked={onNodeClicked}
          options={{ children: "Children", label: "Name" }}
          data={[
            { Id: Guid.Empty, Code: "Code 1.0", Name: "Name 1.0", Children: [
              { Id: "2.0", Code: "Code 2.0", Name: "Name 2.0", Children: [] },
              { Id: "2.1", Code: "Code 2.1", Name: "Name 2.1", Children: [] }
            ]
          }]}
          nodeKey={"Id"}
          defaultExpandedKeys={[Guid.Empty]}
        />
      </div>
      <div className="col-sm-6">
        <CDynamicForm
          ref={refDynamicForm}
          options={[]}
          initValues={{}}
          formDefs={FormGiaoAnLyThuyet}
          actionEvents={ActionEvents}
        />
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(FormGiaoAnLyThuyet);
