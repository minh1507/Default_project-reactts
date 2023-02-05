import { Guid } from "common/Enums";
import { IResponseMessage } from "common/Models";
import GiaoAnThucHanh from "services/GiaoAnThucHanh";

export const Actions: any = {
    DeleteById: async (id:String, dispatch:any) => {                
        let res:IResponseMessage = await GiaoAnThucHanh.DeleteById(id);               
        return res;
    },
    GetItem: async (id: String, dispatch: any) => {
        if (id) {
          let res: IResponseMessage = await GiaoAnThucHanh.GetItem(id);
          if (res && res.Success) {
            dispatch({
              type: "GetItem",
              item: res.Data,
            });
          }
        }
    },
    GetTree: async (idKhoaHoc:any, dispatch: any) => {
        let res: IResponseMessage = await GiaoAnThucHanh.GetTree(idKhoaHoc);
        if (res && res.Success) {
            dispatch({
                type: "GetTree",
                item: res.Data,
            });
        }
        return res;
    },
    CreateItemWithKhoaHoc: async (data: any, idKhoaHoc:any, dispatch: any) => {
        let res: IResponseMessage = await GiaoAnThucHanh.CreateItemWithKhoaHoc(data, idKhoaHoc);
        if (res && res.Success) {
            data.Id = res.Data.IdGiaoAn;
            dispatch({
                type: "GetItem",
                item: data,
            });
        }
        return res;
    },
    UpdateItem: async (data: any, dispatch: any) => {
        let res: IResponseMessage = await GiaoAnThucHanh.UpdateItem(data);
        if (res && res.Success) {
            dispatch({
                type: "GetItem",
                item: data,
            });
        }
        return res;
    },
    onClickRemove: async () => {

    },
    RefeshItem: (dispatch: any) => {
        dispatch({
            type: "GetItem",
            item: {
                Id: Guid.Empty,
                IdGiaoAnLyThuyet: Guid.Empty,
                Loai: 0,
                TieuDe: "",
                URL_Video: "",
                ThoiLuong: 0,
                MienPhi: false,
                SoThuTu: 0
            },
        });
    }
};
