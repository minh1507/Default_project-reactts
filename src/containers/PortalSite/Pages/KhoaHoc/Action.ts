import { IResponseMessage } from "common/Models";
import MonHocService from "services/MonHocService";
import QuanLyNhomTinTuc from "services/QuanLyNhomTinTuc";

export const Actions: any = {
  GetMonHocPortal: async (ma: any, limit: any, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.getMonHocPortal(ma, limit);
    dispatch({
      type: "GetItem",
      items: res.Data,
    });
  },
};
