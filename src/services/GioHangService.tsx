import request from "common/Request";
const Por_GioHang = "Por_GioHang";
const GioHangService = {
  GetItems: async () => {        
    let res:any = await request({
        url: `/${Por_GioHang}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
        method: 'get'
    });
    return res
  }
};
export default GioHangService;
