import { IResponseMessage } from "common/Models";
import GioHangService from "services/GioHangService";
import KhoaHocService from "services/KhoaHocService";
import GiaoAnLyThuyet from "services/GiaoAnLyThuyet";
import GiaoAnThucHanh from "services/GiaoAnThucHanh";
import Por_GiaoAnLyThuyetService from "services/GiaoAnLyThuyet";
export const Actions: any = {
  // GetGiaoAnLyThuyetTheoIdKhoaHoc: async (idKhocHoc: any, dispatch: any) => {
  //   let res: IResponseMessage = await GiaoAnLyThuyet.GetTreePortal(idKhocHoc);
  //   dispatch({
  //     type: "getGiaoAnLyThuyet",
  //     items: res.Data,
  //   });
  // },
  // GetGiaoAnThucHanhTheoIdKhoaHoc: async (idKhocHoc: any, dispatch: any) => {
  //   let res: IResponseMessage = await GiaoAnThucHanh.GetTreePortal(idKhocHoc);
  //   dispatch({
  //     type: "getGiaoAnThucHanh",
  //     items: res.Data,
  //   });
  // },
  GetLinkVideoLyThuyet: async (id:any) => {
    let res: IResponseMessage = await Por_GiaoAnLyThuyetService.GetLinkVideoLyThuyet(id);
    return res.Data;
  },
  GetKhoaHocThuPortal: async (idKhocHoc: any, dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.GetKhoaHocThuPortal(idKhocHoc);
    dispatch({
      type: "GetKhoaHocThuPortal",
      items: res.Data,
    });
  },
  GetDetailKhoaHoc: async (id: any, dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.getById(id);
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
