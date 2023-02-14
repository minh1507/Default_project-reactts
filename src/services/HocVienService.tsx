import request from "common/Request";
const LichSuGiaoDichService = {
  GetLichSuGiaoDich: async () => {
    let res: any = await request({
      url: `/LichSuGiaoDich`,
      method: "get",
    });
    return res;
  },
  GetDanhSach: async () => {
    let res: any = await request({
      url: `/DsKhoaHoc`,
      method: "get",
    });
    return res;
  },
};
export default LichSuGiaoDichService;
