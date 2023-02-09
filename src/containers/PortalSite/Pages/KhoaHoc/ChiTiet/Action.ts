import { IResponseMessage } from "common/Models";
import GioHangService from "services/GioHangService";
import KhoaHocService from "services/KhoaHocService";

export const Actions: any = {
  GetDetailKhoaHoc: async (id: any, dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.getById(id);
    console.log(res)
    dispatch({
      type: "getDetail",
      items: res.Data,
    });
  },
  CreateGioHang: async (data: any, dispatch: any) => {
    let res: IResponseMessage = await GioHangService.CreateGioHang(data);
    return res;
  },
};
