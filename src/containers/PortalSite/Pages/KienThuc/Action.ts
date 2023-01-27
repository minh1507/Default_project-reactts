import { IResponseMessage } from "common/Models";
import QuanLyNhomTinTuc from "services/QuanLyNhomTinTuc";

export const Actions: any = {
  GetDSNhomTinTucPortal: async (id: any, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomTinTuc.GetDSNhomTinTucPortal(
      id
    );
    dispatch({
      type: "GetItem",
      items: res.Data,
    });
  },
  GetItemByMa: async (ma: any, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomTinTuc.KienThucPortal(ma);
    dispatch({
      type: "GetItemByMa",
      items: res.Data,
    });
  },
};
