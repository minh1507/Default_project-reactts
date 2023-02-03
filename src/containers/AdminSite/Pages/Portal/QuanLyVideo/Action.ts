import { IResponseMessage } from "common/Models";
import QuanLyVideoService from "services/QuanLyVideo";

export const Actions: any = {
  GetItems: async (dispatch: any) => {
    let res: IResponseMessage = await QuanLyVideoService.GetItems();
    if (res && res.Success) {
      dispatch({
        type: "GetItems",
        items: res.Data.Items,
      });
    }
  },
  DeleteById: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await QuanLyVideoService.DeleteById([
      { id: id },
    ]);
    return res;
  },
};
