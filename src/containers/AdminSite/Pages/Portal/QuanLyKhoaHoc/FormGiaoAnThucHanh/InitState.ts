import { Guid } from "common/Enums";

export interface IModelItem {
    Id: String;
    IdGiaoAnThucHanh: String;
    Loai: Number;
    TieuDe: String;
    GhiChu: String;
    URL_Video: String;
    ThoiLuong: Number,
    MienPhi: Boolean,
    SoThuTu: Number
}
export interface IModelTree {
    Id: String;
    Code: String;
    Name: String;
    Children: Array<IModelTree>;
}
export interface IState {
    Item: IModelItem,
    Tree: IModelTree[]
}
export const InitState: IState = {
    Item: {
        Id: Guid.Empty,
        IdGiaoAnThucHanh: Guid.Empty,
        Loai: 0,
        TieuDe: "",
        GhiChu: "",
        URL_Video: "",
        ThoiLuong: 0,
        MienPhi: false,
        SoThuTu: 0
    },
    Tree: [
        {
            Id: Guid.Empty,
            Code: "DsGiaoAnThucHanh",
            Name: "Danh sách giáo án thực hành",
            Children: [],
        }
    ]
};
