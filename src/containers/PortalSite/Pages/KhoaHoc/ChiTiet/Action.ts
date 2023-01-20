import { IResponseMessage } from "common/Models";
import KhoaHocService from "services/KhoaHocService";

export const Actions: any = {
  GetDetailKhoaHoc: async (id: any, dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.getById(id);
    dispatch({
      type: "getDetail",
      items: res.Data,
    });
  },
};
