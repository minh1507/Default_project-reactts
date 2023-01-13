import { IResponseMessage } from "common/Models";
import MonHocService from "services/MonHocService";
import QuanLyNhomTinTuc from "services/QuanLyNhomTinTuc";

export const Actions: any = {
  GetItemGiaoan: async (idMonHocCha: any, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.getMonHocPortal(
      idMonHocCha
    );
    dispatch({
      type: "GetItemGiaoAn",
      items: res.Data,
    });
  },
  GetItemPortal: async (ten: string, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomTinTuc.GetItemPortal(ten);
    if (res && res.Success) {
      dispatch({
        type: "GetItemPortal",
        items: res.Data,
      });
    }
  },
  GetItemChayDapBoi: async (idMonHocCha: any, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.getMonHocPortal(
      idMonHocCha
    );
    dispatch({
      type: "GetItemBoiDapChay",
      items: res.Data,
    });
  },
  GetItemTreEm: async (idMonHocCha: any, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.getMonHocPortal(
      idMonHocCha
    );
    dispatch({
      type: "GetItemTreEm",
      items: res.Data,
    });
  },
};
