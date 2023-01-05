import MenuService from "services/MenuService";
import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import OrganService from "services/OrganService";
import { IModelItem } from "./InitState";

export const Actions: any = {
  GetItem: async (id: String, treeId: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await OrganService.GetItem(id);
      if (res && res.Success) {
        res.Data.ParentId = treeId;
        dispatch({
          type: "GetItem",
          item: res.Data,
        });
      }
    } else {
      let itemNew: IModelItem = {
        id: Guid.Empty,
        ma: "",
        url: "",
        ten: "",
        trangThaiBanGhi: true,
        idMenuCha: treeId,
      };
      dispatch({
        type: "GetItem",
        item: itemNew,
      });
    }
  },
  CreateItem: async (item: IModelItem, dispatch: any) => {
    console.log(item);
    let res: IResponseMessage = await MenuService.CreateItem(item);
    return res;
  },
  UpdateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await OrganService.UpdateItem(item);
    return res;
  },
  CheckDuplicateAttributes: async (
    id: any,
    code: any,
    parentId: any,
    dispatch: any
  ) => {
    let res: IResponseMessage = await OrganService.CheckDuplicateAttributes(
      id,
      code,
      parentId
    );
    return res;
  },
};
