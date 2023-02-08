import request from "common/Request";
const Por_GiaoAnLyThuyet = "Por_GiaoAnLyThuyet";
const Por_GiaoAnLyThuyetService = {
  GetItems: async () => {
    let res: any = await request({
      url: `/${Por_GiaoAnLyThuyet}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
      method: "get",
    });
    return res;
  },
  GetCategories: async () => {
    let res: any = await request({
      url: `/${Por_GiaoAnLyThuyet}/Categories`,
      method: "get",
    });
    return res;
  },
  GetList: async () => {
    let res: any = await request({
      url: `/${Por_GiaoAnLyThuyet}/List`,
      method: "get",
    });
    return res;
  },
  GetTree: async (idKhoaHoc: String) => {
    let res: any = await request({
      url: `/${Por_GiaoAnLyThuyet}/Tree/${idKhoaHoc}`,
      method: "get",
    });
    return res;
  },
  GetTreePortal: async (idKhoaHoc: String) => {
    let res: any = await request({
      url: `/${Por_GiaoAnLyThuyet}/TreePortal/${idKhoaHoc}`,
      method: "get",
    });
    return res;
  },
  GetItem: async (id: String) => {
    let res: any = await request({
      url: `/${Por_GiaoAnLyThuyet}/${id}`,
      method: "get",
    });
    return res;
  },
  CreateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_GiaoAnLyThuyet}`,
      method: "post",
      data,
    });
    return res;
  },
  CreateItemWithKhoaHoc: async (data: any, idKhoaHoc: any) => {
    let res: any = await request({
      url: `/${Por_GiaoAnLyThuyet}/${idKhoaHoc}`,
      method: "post",
      data,
    });
    return res;
  },
  UpdateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_GiaoAnLyThuyet}`,
      method: "put",
      data,
    });
    return res;
  },
  DeleteById: async (id:any) => {        
    let res:any = await request({
        url: `/${Por_GiaoAnLyThuyet}/DeleteById/${id}`,
        method: 'delete'            
    });
    return res
},
};
export default Por_GiaoAnLyThuyetService;
