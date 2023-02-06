import { IResponseMessage } from "common/Models";
import SuKienService from "services/SuKienService";
import TinTucService from "services/TinTucService";

export const Actions: any = {
  GetDetailTinTuc: async (id: any, dispatch: any) => {
    let res: IResponseMessage = await TinTucService.getById(id);
    dispatch({
      type: "getDetailTinTuc",
      items: res.Data,
    });
  },
  GetDetailSuKien: async (id: any, dispatch: any) => {
    let res: IResponseMessage = await SuKienService.GetItem(id);
    dispatch({
      type: "getDetailSuKien",
      items: res.Data,
    });
  },
};
