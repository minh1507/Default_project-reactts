import { IResponseMessage } from "common/Models";
import OrganService from "services/OrganService";
import MenuService from "services/MenuService";

export const Actions: any = {
  GetItems: async (parentId: any, dispatch: any) => {
    let res: IResponseMessage = await OrganService.GetByParentId(parentId);
    if (res && res.Success) {
      dispatch({
        type: "GetItems",
        items: res.Data,
      });
    }
  },
  GetTree: async (dispatch: any) => {
    let res: IResponseMessage = await MenuService.GetTree();
    if (res && res.Success) {
      dispatch({
        type: "GetTree",
        tree: res.Data,
      });
    }
  },
  DeleteById: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await OrganService.DeleteById(id);
    return res;
  },
};
