import { IResponseMessage } from "common/Models";
import TuVanService from "services/TuVanService";

export const Actions: any = {
  GetItems: async (dispatch: any) => {
    let res: IResponseMessage = await TuVanService.GetItems();
    if (res && res.Success) {
      dispatch({
        type: "GetItems",
        items: res.Data.Items,
      });
    }
  },
  DeleteById: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await TuVanService.DeleteById([{ id: id }]);
    return res;
  },
};
