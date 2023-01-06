import { IResponseMessage } from "common/Models";
import MonHocService from "services/MonHocService";

export const Actions: any = {
  GetItems: async (idMenuCha: any, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.GetByParentId(idMenuCha);
    if (res && res.Success) {
      dispatch({
        type: "GetItems",
        items: res.Data,
      });
    }
  },
  GetTree: async (dispatch: any) => {
    let res: IResponseMessage = await MonHocService.GetTree();
    if (res && res.Success) {
      dispatch({
        type: "GetTree",
        tree: res.Data,
      });
    }
  },
  DeleteById: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.DeleteById([{ id: id }]);
    return res;
  },
};
