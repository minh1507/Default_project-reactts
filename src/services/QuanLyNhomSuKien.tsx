import { Thang } from "common/Enums";
import request from "common/Request";
const Por_NhomSuKien = "Por_NhomSuKien";
const QuanLyNhomSuKien = {
  GetByParentId: async (idMenuCha: any) => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}/List/${idMenuCha}`,
      method: "get",
    });
    return res;
  },
  GetItem: async (id: String) => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}/${id}`,
      method: "get",
    });
    return res;
  },
  getSuKienPortal: async (id: String) => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}/GetSuKienPortal?id=${id}`,
      method: "get",
    });
    res.Data.forEach((val: any) => {
      val.Date =
        new Date(val.ThoiGian).getDate() +
        "/" +
        Thang[new Date(val.ThoiGian).getMonth()] +
        "/" +
        new Date(val.ThoiGian).getFullYear();
      val.Time =
        new Date(val.ThoiGian).getHours() +
        ":" +
        new Date(val.ThoiGian).getMinutes();
      val.Detech = new Date(val.ThoiGian).getHours() > 12 ? "PM" : "AM";
      delete val.ThoiGian;
    });

    console.log(res);
    return res;
  },
  GetTree: async () => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}/Tree`,
      method: "get",
    });
    return res;
  },
  GetTreeList: async () => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}/TreeList`,
      method: "get",
    });
    return res;
  },
  GetCategories: async () => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}/Categories`,
      method: "get",
    });
    return res;
  },
  CreateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}`,
      method: "post",
      data,
    });
    return res;
  },
  UpdateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}`,
      method: "put",
      data,
    });
    return res;
  },
  DeleteById: async (data: any) => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}`,
      method: "delete",
      data,
    });
    return res;
  },
  CheckDuplicateAttributes: async (id: any, ma: any, idMonHocCha: any) => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}/CheckDuplicateAttributes?id=${id}&ma=${ma}&idMonHocCha=${idMonHocCha}`,
      method: "get",
    });
    return res;
  },
  CheckDuplicateAttributesCreateNew: async (ma: any, idMonHocCha: any) => {
    let res: any = await request({
      url: `/${Por_NhomSuKien}/CheckDuplicateAttributes?ma=${ma}&idMonHocCha=${idMonHocCha}`,
      method: "get",
    });
    return res;
  },
};
export default QuanLyNhomSuKien;
