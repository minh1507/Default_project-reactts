import request from "common/Request";
const Por_TinTuc = "Por_TinTuc";
const TinTucService = {
  GetItems: async () => {
    let res: any = await request({
      url: `/${Por_TinTuc}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
      method: "get",
    });
    return res;
  },
  GetItemstim: async () => {
    let res: any = await request({
      url: `/${Por_TinTuc}/DanhSach`,
      method: "get",
    });
    return res;
  },
  GetCategories: async () => {
    let res: any = await request({
      url: `/${Por_TinTuc}/Categories`,
      method: "get",
    });
    return res;
  },
  GetItem: async (id: String) => {
    let res: any = await request({
      url: `/${Por_TinTuc}/${id}`,
      method: "get",
    });
    return res;
  },
  CreateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_TinTuc}`,
      method: "post",
      data,
    });
    return res;
  },
  UpdateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_TinTuc}`,
      method: "put",
      data,
    });
    return res;
  },
  DeleteById: async (data: any) => {
    let res: any = await request({
      url: `/${Por_TinTuc}`,
      method: "delete",
      data,
    });
    return res;
  },
  getById: async (id: any) => {
    let res: any = await request({
      url: `/${Por_TinTuc}/${id}`,
      method: "get",
    });
    return res;
  },
};
export default TinTucService;
