import { IResponseMessage } from "common/Models";
import TinTucService from "services/TinTucService";
import { Thang } from "common/Enums";

export const Actions: any = {
  GetItems: async (dispatch: any) => {
    let res: IResponseMessage = await TinTucService.GetItems();
    res.Data.Items.forEach((element: any) => {
      element.NgayXuatBan =
        new Date(element.NgayXuatBan).getDate() +
        "/" +
        Thang[new Date(element.NgayXuatBan).getMonth()] +
        "/" +
        new Date(element.NgayXuatBan).getFullYear();
    });
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
