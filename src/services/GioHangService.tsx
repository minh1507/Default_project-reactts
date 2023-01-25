import request from "common/Request";
const Por_ChiTietGioHang = "Por_ChiTietGioHang";
const GioHangService = {
  CreateGioHang: async (data: any) => {
    let res: any = await request({
      url: `/${Por_ChiTietGioHang}`,
      method: "post",
      data: data,
    });
    return res;
  },
};
export default GioHangService;
