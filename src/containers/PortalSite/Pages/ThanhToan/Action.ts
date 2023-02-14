import ThanhToanService from 'services/ThanhToanService';
import { IResponseMessage } from "common/Models";
import KhoaHocService from "services/KhoaHocService";

export const Actions: any = {
  GetGioHang: async (data: any,  dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.GetChonKhoaHoc(data);
    dispatch({
      type: "GetGioHang",
      items: res.Data,
    });
  },
  GetThanhToan: async (dispatch: any) => {
    let res: IResponseMessage = await ThanhToanService.GetItemsPortal();
    dispatch({
      type: "GetThanhToan",
      items: res.Data,
    });
  },
  GetXacNhanThanhToan: async (data: any,dispatch: any) => {
    let res: IResponseMessage = await ThanhToanService.GetXacNhanThanhToan(data);
    return res
  },
  GetInfor: async (inf: any,dispatch: any) => {
    let res: IResponseMessage = await ThanhToanService.GetInfor();
    return res
  }
};
