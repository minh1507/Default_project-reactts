import request from "common/Request";
const Por_Video = "Por_Video";
const QuanLyVideoService = {
  GetItems: async () => {
    let res: any = await request({
      url: `/${Por_Video}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
      method: "get",
    });
    return res;
  },
  GetCategories: async () => {
    let res: any = await request({
      url: `/${Por_Video}/Categories`,
      method: "get",
    });
    return res;
  },
  GetTreeList: async () => {
    let res: any = await request({
      url: `/${Por_Video}/List`,
      method: "get",
    });
    return res;
  },
  GetItem: async (id: String) => {
    let res: any = await request({
      url: `/${Por_Video}/${id}`,
      method: "get",
    });
    return res;
  },
  CreateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_Video}`,
      method: "post",
      data,
    });
    return res;
  },
  UpdateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_Video}`,
      method: "put",
      data,
    });
    return res;
  },
  DeleteById: async (data: any) => {
    let res: any = await request({
      url: `/${Por_Video}`,
      method: "delete",
      data,
    });
    return res;
  },
};
export default QuanLyVideoService;
