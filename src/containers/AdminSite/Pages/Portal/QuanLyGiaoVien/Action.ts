import { IResponseMessage } from "common/Models";
import QuanLyGiaoVienService from "services/QuanLyGiaoVienService";

export const Actions: any = {
  GetItems: async (dispatch: any) => {
    let res: IResponseMessage = await QuanLyGiaoVienService.GetItems();
    if (res && res.Success) {
      dispatch({
        type: "GetItems",
        items: res.Data.Items,
      });
    }
  },
  DeleteById: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await QuanLyGiaoVienService.DeleteById([
      { id: id },
    ]);
    return res;
  },
};
