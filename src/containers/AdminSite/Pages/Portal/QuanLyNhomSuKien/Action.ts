import { IResponseMessage } from "common/Models";
import QuanLyNhomSuKien from "services/QuanLyNhomSuKien";

export const Actions: any = {
  GetItems: async (idNhomSuKienCha: any, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.GetByParentId(
      idNhomSuKienCha
    );
    if (res && res.Success) {
      dispatch({
        type: "GetItems",
        items: res.Data,
      });
    }
  },
  GetTree: async (dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.GetTree();
    if (res && res.Success) {
      dispatch({
        type: "GetTree",
        tree: res.Data,
      });
    }
  },
  DeleteById: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.DeleteById([{ id: id }]);
    return res;
  },
};
