import { IResponseMessage } from "common/Models";
import MonHocService from "services/MonHocService";
import QuanLyNhomSuKien from "services/QuanLyNhomSuKien";
import QuanLyNhomTinTuc from "services/QuanLyNhomTinTuc";

export const Actions: any = {
  GetItemGiaoan: async (idMonHocCha: any, limit: string, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.getMonHocPortal(
      idMonHocCha,
      limit
    );
    dispatch({
      type: "GetItemGiaoAn",
      items: res.Data,
    });
  },
  GetItemTinTucPortal: async (ten: string, limit: string, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomTinTuc.GetItemPortal(
      ten,
      limit
    );

    if (res && res.Success) {
      dispatch({
        type: "GetItemTinTucPortal",
        items: res.Data,
      });
    }
  },
  // GetItemChayDapBoi: async (idMonHocCha: any, dispatch: any) => {
  //   let res: IResponseMessage = await MonHocService.getMonHocPortal(
  //     idMonHocCha
  //   );
  //   dispatch({
  //     type: "GetItemBoiDapChay",
  //     items: res.Data,
  //   });
  // },
  // GetItemTreEm: async (idMonHocCha: any, dispatch: any) => {
  //   let res: IResponseMessage = await MonHocService.getMonHocPortal(
  //     idMonHocCha
  //   );
  //   dispatch({
  //     type: "GetItemTreEm",
  //     items: res.Data,
  //   });
  // },
  GetItemSuKien: async (idMonHocCha: any, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.getSuKienPortal(
      idMonHocCha
    );
    dispatch({
      type: "GetItemSuKien",
      items: res.Data,
    });
  },
};
