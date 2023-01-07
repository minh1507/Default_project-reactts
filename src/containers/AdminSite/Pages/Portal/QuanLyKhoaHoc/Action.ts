import { IResponseMessage } from "common/Models";
import KhoaHocService from "services/KhoaHocService";
import { Thang } from "common/Enums";

export const Actions: any = {
  GetItems: async (dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.GetItems();
    if (res && res.Success) {
      dispatch({
        type: "GetItems",
        items: res.Data.Items,
      });
    }
  },
  DeleteById: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.DeleteById([{ id: id }]);
    return res;
  },
};
