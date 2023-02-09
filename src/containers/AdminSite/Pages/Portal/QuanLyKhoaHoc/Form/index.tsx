import CDynamicForm from "components/CDynamicForm";
import CNotification from "components/CNotification";
import { IResponseMessage } from "common/Models";
import { Message } from "common/Enums";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import KhoaHocFormInputJson from "./FormInput.json";
import ACard from "components/ACard";
import CButton from "components/CButton";
import CSelect from "components/CSelect";
import CDynamicTable from "components/CDynamicTable";
import ListViewVideoJson from "./ListViewVideo.json";
import ListViewAnhJson from "./ListViewAnh.json";
interface Props {
  Id: string;
  ReloadTableItems: any;
}

const KhoaHocForm = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  useEffect(() => {
    Actions.GetItem(props.Id, dispatch);
    Actions.GetTreeList("IdMonHoc", dispatch);
    Actions.GetCategories("IdLoaiKhoaHoc", dispatch);
    var getNhomVideo = async () => {
      var DsNhomVideo = await Actions.GetDsNhomVideo(dispatch);
      setDsNhomVideo(DsNhomVideo);
    };
    getNhomVideo();
    var getNhomAnh = async () => {
      var DsNhomAnh = await Actions.GetDsNhomAnh(dispatch);
      setDsNhomAnh(DsNhomAnh);
    };
    getNhomAnh();
  }, [props.Id]);
  let KhoaHocFormInput: any = KhoaHocFormInputJson;
  const refNotification = useRef<any>();
  const refDynamicForm = useRef<any>();
  const [showSearch, setShowSearch] = useState(false);
  const refDynamicTableVideo = useRef<any>();
  const [nhomVideo, setNhomVideo] = useState(null);
  const [nhomAnh, setNhomAnh] = useState(null);
  let ListViewVideo: any = ListViewVideoJson;
  const [dsNhomVideo, setDsNhomVideo] = useState([]);
  const [dsNhomAnh, setDsNhomAnh] = useState([]);
  const [check, setCheck] = useState(0);
  const ActionEvents = {
    onClickSave: async () => {
      let isValid = refDynamicForm.current.onValidation();
      if (isValid) {
        let stateValues = refDynamicForm.current.getStateValues();
        let res: IResponseMessage = null;

        if (props.Id) {
          res = await Actions.UpdateItem(stateValues);
        } else {
          res = await Actions.CreateItem(stateValues);
        }
        if (res.Success) {
          refNotification.current.showNotification("success", res.Message);
          props.ReloadTableItems();
        }
      }
    },
  };
  const ButtonGroupsRender = () => {
    return (
      <>
        <CButton
          icon={"check"}
          title={check == 1 ? "Chọn Video" : "Chọn Ảnh"}
          onClick={() => {
            if (check == 1) {
              if (!refDynamicTableVideo.current.getRowId()) {
                refNotification.current.showNotification(
                  "warning",
                  Message.Require_Row_Selection
                );
                return;
              }
              var item = refDynamicTableVideo.current.getRowSelected();
              Actions.setURL_VideoGiaoAnLyThuyet(item["0"][3], dispatch);
              setShowSearch(false);
            }
            if (check == 2) {
              if (!refDynamicTableVideo.current.getRowId()) {
                refNotification.current.showNotification(
                  "warning",
                  Message.Require_Row_Selection
                );
                return;
              }
              var item = refDynamicTableVideo.current.getRowSelected();
              Actions.setURL_VideoGiaoAnLyThuyet(item["0"][3], dispatch);
              setShowSearch(false);
            }

            setCheck(0);
          }}
        />
        <CButton
          icon={"d-arrow-left"}
          title="Quay lại"
          onClick={() => {
            if (check == 1) {
              setShowSearch(false);
              Actions.GetDsVideoByIdNhomVideo(null, dispatch);
            }
            if (check == 2) {
              setShowSearch(false);
              Actions.GetDsVideoByIdNhomAnh(null, dispatch);
            }

            setCheck(0);
          }}
        />
      </>
    );
  };
  const OnChangeNhomVideo = (e: any) => {
    Actions.GetDsVideoByIdNhomVideo(e, dispatch);
  };
  const OnChangeNhomAnh = (e: any) => {
    Actions.GetDsVideoByIdNhomAnh(e, dispatch);
  };
  const onClickDynamicForm = (key: any) => {
    if (key == "URL_VideoDaiDien") {
      setCheck(1);
      setShowSearch(true);
    }
    if (key == "URL_AnhDaiDien") {
      setCheck(2);
      setShowSearch(true);
    }
  };
  console.log(state)
  return (
    <>
      <CNotification ref={refNotification} />
      {showSearch ? (
        <ACard
          title={check == 1 ? "Tìm kiếm Video" : "Tìm kiếm Ảnh"}
          buttonGroups={ButtonGroupsRender()}
        >
          <div className="row">
            <div className="col-sm-12">
              <CSelect
                key={check == 1 ? "dsnhomvideo" : "dsnhomanh"}
                value={check == 1 ? nhomVideo : nhomAnh}
                placeholder={
                  check == 1 ? `Danh sách nhóm video` : `Danh sách nhóm ảnh`
                }
                filterable={false}
                multiple={false}
                options={check == 1 ? dsNhomVideo : dsNhomAnh}
                keyOptions={{ label: "Ten", value: "Id" }}
                onChange={(e: any) => {
                  check == 1 ? OnChangeNhomVideo(e) : OnChangeNhomAnh(e);
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-12">
              <CDynamicTable
                ref={refDynamicTableVideo}
                id={check == 1 ? ListViewVideo.DataGrid.Key : ListViewAnhJson.DataGrid.Key}
                key={check == 1 ? ListViewVideo.DataGrid.Key : ListViewAnhJson.DataGrid.Key}
                columnDefs={check == 1 ? ListViewVideo.DataGrid.ColumnDefs : ListViewAnhJson.DataGrid.ColumnDefs}
                dataItems={check == 1 ? state.ItemVideos : state.ItemAnhs}
              />
            </div>
          </div>
        </ACard>
      ) : (
        <CDynamicForm
          ref={refDynamicForm}
          options={state.Options}
          initValues={state.DataItem}
          formDefs={KhoaHocFormInput}
          actionEvents={ActionEvents}
          onclick={onClickDynamicForm}
        />
      )}
    </>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(KhoaHocForm);
