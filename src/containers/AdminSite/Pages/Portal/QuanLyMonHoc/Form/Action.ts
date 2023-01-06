import MonHocService from "services/MonHocService";
import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";

export const Actions: any = {
  GetItem: async (id: String, treeId: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await MonHocService.GetItem(id);
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
        idMonHocCha: treeId,
      };
      dispatch({
        type: "GetItem",
        item: itemNew,
      });
    }
  },
  CreateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.CreateItem(item);
    return res;
  },
  UpdateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.UpdateItem(item);
    return res;
  },
  CheckDuplicateAttributes: async (
    id: any,
    ma: any,
    idMenuCha: any,
    dispatch: any
  ) => {
    let res: IResponseMessage = await MonHocService.CheckDuplicateAttributes(
      id,
      ma,
      idMenuCha
    );
    return res;
  },
  CheckDuplicateAttributesCreateNew: async (
    ma: any,
    idMenuCha: any,
    dispatch: any
  ) => {
    let res: IResponseMessage =
      await MonHocService.CheckDuplicateAttributesCreateNew(ma, idMenuCha);
    return res;
  },
};
