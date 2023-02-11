import request from "common/Request";

const Por_CauHinhGiaoDien = "Por_CauHinhGiaoDien";
const CauHinhGiaoDienService = {
  GetCauHinhGioiThieu: async (MaNhomTinTuc: any, SoLuong: any) => {
    let res: any = await request({
      url: `/${Por_CauHinhGiaoDien}/TrangChu/KhoiGioiThieu?MaNhomTinTuc=${MaNhomTinTuc}&SoLuong=${SoLuong}`,
      method: "get",
    });
    return res;
  },
  GetCauHinhKhoaHoc: async (data: any) => {
    let res: any = await request({
      url: `/${Por_CauHinhGiaoDien}/TrangChu/KhoiKhoaHoc`,
      method: "post",
      data,
    });
    return res;
  },
  GetCauHinhMonHoc: async (data: any) => {
    let res: any = await request({
      url: `/${Por_CauHinhGiaoDien}/TrangChu/KhoiMonHoc`,
      method: "post",
      data,
    });
    return res;
  },
  GetCauHinhSuKien: async (data: any) => {
    let res: any = await request({
      url: `/${Por_CauHinhGiaoDien}/TrangChu/KhoiSuKien`,
      method: "post",
      data,
    });
    return res;
  },
  GetCauHinhBlog: async (MaNhomTinTuc: any,SoLuong:any) => {
    let res: any = await request({
      url: `/${Por_CauHinhGiaoDien}/TrangChu/KhoiTinTuc?MaNhomTinTuc=${MaNhomTinTuc}&SoLuong=${SoLuong}`,
      method: "get",
    });
    return res;
  },
};
export default CauHinhGiaoDienService;
