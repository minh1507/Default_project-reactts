import { IResponseMessage } from "common/Models";
import MonHocService from "services/MonHocService";

export const Actions: any = {
  GetItems: async (dispatch: any) => {
    let res: IResponseMessage = await MonHocService.GetItems();
    if (res && res.Success) {
      dispatch({
        type: "GetItems",
        items: res.Data.Items,
      });
    }
  },
  DeleteById: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.DeleteById([{ id: id }]);
    return res;
  },
};
