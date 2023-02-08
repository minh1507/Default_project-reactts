import request from "common/Request";
const Por_GiaoAnThucHanh = "Por_GiaoAnThucHanh";
const Por_GiaoAnThucHanhService = {
  GetItems: async () => {
    let res: any = await request({
      url: `/${Por_GiaoAnThucHanh}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
      method: "get",
    });
    return res;
  },
  GetCategories: async () => {
    let res: any = await request({
      url: `/${Por_GiaoAnThucHanh}/Categories`,
      method: "get",
    });
    return res;
  },
  GetList: async () => {
    let res: any = await request({
      url: `/${Por_GiaoAnThucHanh}/List`,
      method: "get",
    });
    return res;
  },
  GetTree: async (idKhoaHoc: String) => {
    let res: any = await request({
      url: `/${Por_GiaoAnThucHanh}/Tree/${idKhoaHoc}`,
      method: "get",
    });
    return res;
  },
  GetTreePortal: async (idKhoaHoc: String) => {
    let res: any = await request({
      url: `/${Por_GiaoAnThucHanh}/TreePortal/${idKhoaHoc}`,
      method: "get",
    });
    return res;
  },
  GetItem: async (id: String) => {
    let res: any = await request({
      url: `/${Por_GiaoAnThucHanh}/${id}`,
      method: "get",
    });
    return res;
  },
  CreateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_GiaoAnThucHanh}`,
      method: "post",
      data,
    });
    return res;
  },
  CreateItemWithKhoaHoc: async (data: any, idKhoaHoc: any) => {
    let res: any = await request({
      url: `/${Por_GiaoAnThucHanh}/${idKhoaHoc}`,
      method: "post",
      data,
    });
    return res;
  },
  UpdateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_GiaoAnThucHanh}`,
      method: "put",
      data,
    });
    return res;
  },
  DeleteById: async (id:any) => {        
    let res:any = await request({
        url: `/${Por_GiaoAnThucHanh}/DeleteById/${id}`,
        method: 'delete'            
    });
    return res
},
};
export default Por_GiaoAnThucHanhService;
