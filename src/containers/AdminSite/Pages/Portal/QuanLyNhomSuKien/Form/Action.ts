import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";
import QuanLyNhomSuKien from "services/QuanLyNhomSuKien";

export const Actions: any = {
  GetItem: async (id: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await QuanLyNhomSuKien.GetItem(id);
      if (res && res.Success) {
        dispatch({
          type: "GetItem",
          item: res.Data,
        });
      }
    } else {
      let itemNew: IModelItem = {
        Id: Guid.Empty,
        Ma: "",
        Ten: "",
        Diachi: "",
        NoiDung: "",
        GiaTien: "",
        Url_AnhDaiDien: "",
        TrangThaiBanGhi: false,
      };
      dispatch({
        type: "GetItem",
        item: itemNew,
      });
    }
  },
  CreateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.CreateItem(item);
    return res;
  },
  UpdateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.UpdateItem(item);
    return res;
  },
  CheckDuplicateAttributes: async (id: any, code: any, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.CheckDuplicateAttributes(
      id,
      code
    );
    return res;
  },
  CheckDuplicateAttributesCreateNew: async (
    ma: any,
    idNhomSuKien: any,
    dispatch: any
  ) => {
    let res: IResponseMessage =
      await QuanLyNhomSuKien.CheckDuplicateAttributesCreateNew(
        ma,
        idNhomSuKien
      );
    return res;
  },
};
