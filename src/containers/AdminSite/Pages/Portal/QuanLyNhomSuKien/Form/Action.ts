import QuanLyNhomSuKien from "services/QuanLyNhomSuKien";
import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";

export const Actions: any = {
  GetItem: async (id: String, treeId: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await QuanLyNhomSuKien.GetItem(id);
      if (res && res.Success) {
        res.Data.IdMenuCha = treeId;
        dispatch({
          type: "GetItem",
          item: res.Data,
        });
      }
    } else {
      let itemNew: IModelItem = {
        id: Guid.Empty,
        ma: "",
        ten: "",
        trangThaiBanGhi: true,
        idNhomSuKienCha: treeId,
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
  CheckDuplicateAttributes: async (
    id: any,
    ma: any,
    idNhomSuKienCha: any,
    dispatch: any
  ) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.CheckDuplicateAttributes(
      id,
      ma,
      idNhomSuKienCha
    );
    return res;
  },
  CheckDuplicateAttributesCreateNew: async (
    ma: any,
    idNhomSuKienCha: any,
    dispatch: any
  ) => {
    let res: IResponseMessage =
      await QuanLyNhomSuKien.CheckDuplicateAttributesCreateNew(
        ma,
        idNhomSuKienCha
      );
    return res;
  },
};
