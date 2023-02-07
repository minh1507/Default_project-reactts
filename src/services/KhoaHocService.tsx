import request from "common/Request";
const Por_KhoaHoc = "Por_KhoaHoc";
const KhoaHocService = {
  GetKhoaHocTheoIdMonHocPortal: async (id: String) => {
    let res: any = await request({
      url: `/${Por_KhoaHoc}/TheoMonHoc?idMonHoc=${id}`,
      method: "get",
    });
    return res;
  },
  GetItems: async () => {
    let res: any = await request({
      url: `/${Por_KhoaHoc}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
      method: "get",
    });
    return res;
  },
  GetItemstim: async () => {
    let res: any = await request({
      url: `/${Por_KhoaHoc}/DanhSach`,
      method: "get",
    });
    return res;
  },
  GetCategories: async () => {
    let res: any = await request({
      url: `/${Por_KhoaHoc}/Categories`,
      method: "get",
    });
    return res;
  },
  GetItem: async (id: String) => {
    let res: any = await request({
      url: `/${Por_KhoaHoc}/${id}`,
      method: "get",
    });
    return res;
  },
  CreateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_KhoaHoc}`,
      method: "post",
      data,
    });
    return res;
  },
  UpdateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_KhoaHoc}`,
      method: "put",
      data,
    });
    return res;
  },
  DeleteById: async (data: any) => {
    let res: any = await request({
      url: `/${Por_KhoaHoc}`,
      method: "delete",
      data,
    });
    return res;
  },
  getById: async (id: any) => {
    let res: any = await request({
      url: `/${Por_KhoaHoc}/ChiTiet/${id}`,
      method: "get",
    });
    return res;
  },
};
export default KhoaHocService;
