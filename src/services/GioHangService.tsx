import request from "common/Request";
const Por_ChiTietGioHang = "Por_ChiTietGioHang";
const GioHangService = {
    GetAllGioHang: async () => {
        let res: any = await request({
          url: `/${Por_ChiTietGioHang}/Categories`,
          method: "get",
        });
        return res;
      },
};
export default GioHangService;
