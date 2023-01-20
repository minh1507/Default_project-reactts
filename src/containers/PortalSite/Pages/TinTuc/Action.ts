import { IResponseMessage } from "common/Models";
import TinTucService from "services/TinTucService";

export const Actions: any = {
  GetDetailTinTuc: async (id: any, dispatch: any) => {
    let res: IResponseMessage = await TinTucService.getById(id);
    dispatch({
      type: "getDetail",
      items: res.Data,
    });
  },
};
