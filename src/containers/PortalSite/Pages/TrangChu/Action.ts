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
  GetItemTinTuc: async (arr: any, ma: string, limit: string, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomTinTuc.GetItemPortal(ma, limit);

    if (res && res.Success) {
      dispatch({
        type: "GetItemTinTucPortal",
        items: res.Data[0],
        array: arr,
      });
    }
  },
  GetItemBlog: async (ma: string, limit: string, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomTinTuc.GetItemPortal(ma, limit);

    if (res && res.Success) {
      dispatch({
        type: "GetItemBlogPortal",
        items: res.Data[0],
      });
    }
  },
  GetItemKhoaHoc: async (
    maMonHocCha: any,
    limitMonHoc: any,
    limitKhoaHoc: any,
    dispatch: any
  ) => {
    let res: IResponseMessage = await MonHocService.getKhoaHocPortal(
      limitMonHoc,
      limitKhoaHoc,
      maMonHocCha
    );

    dispatch({
      type: "GetItemsKhoaHoc",
      items: res.Data,
    });
  },
  GetItemSuKien: async (ma: number, limit: string, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.getSuKienPortal(
      ma,
      limit
    );
    dispatch({
      type: "GetItemSuKien",
      items: res.Data[0],
    });
  },
};
