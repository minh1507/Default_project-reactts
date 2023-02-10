import { IResponseMessage } from "common/Models";
import KhoaHocService from "services/KhoaHocService";

export const Actions: any = {
  GetGioHang: async (data: any, dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.GetChonKhoaHoc(data);
    dispatch({
      type: "GetGioHang",
      items: [
        {
          TieuDe: "hello",
          URL_AnhDaiDien: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
          HocPhiGoc: 120000,
          HocPhiGiamGia: 20000,
        },
        {
          TieuDe: "hello",
          URL_AnhDaiDien: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
          HocPhiGoc: 120000,
          HocPhiGiamGia: 20000,
        },
      ],
    });
  },
};
