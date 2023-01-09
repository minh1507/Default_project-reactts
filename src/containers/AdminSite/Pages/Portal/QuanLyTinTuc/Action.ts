import { IResponseMessage } from "common/Models";
import TinTucService from "services/TinTucService";
import { Thang } from "common/Enums";

export const Actions: any = {
  GetItems: async (dispatch: any) => {
    let res: IResponseMessage = await TinTucService.GetItems();
    if (res && res.Success) {
      dispatch({
        type: "GetItems",
        items: res.Data.Items,
      });
    }
  },
  DeleteById: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await TinTucService.DeleteById([{ id: id }]);
    return res;
  },
};
