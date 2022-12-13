import { Guid } from "models/Enums";

export interface IModelItem {
    Id: String;
    SoHieu: String;
    NgayCap: String;
    NguoiSuDung: String;
    DiaChiThuongTru: String;
    CCCD: String;
    NguoiKy: String;
    SoThua: String;
    SoTo: String;
    DiaChiThuaDat: String;
    TenPhuongXa: String;
    MaPX: String;
    DienTich: String;
    MucDichSuDung: String;
    ThoiHanSuDung: String;
    NhaO: String;
    CongTrinh: String;
    RungSanXuat: String;
    CayLauNam: String;
}
export interface IState {
    DataItem: IModelItem
}
export const InitState: IState = {
    DataItem: {
        Id: Guid.Empty,
        SoHieu: "",
        NgayCap: "",
        NguoiSuDung: "",
        DiaChiThuongTru: "",
        CCCD: "",
        NguoiKy: "",
        SoThua: "",
        SoTo: "",
        DiaChiThuaDat: "",
        TenPhuongXa: "",
        MaPX: "",
        DienTich: "",
        MucDichSuDung: "",
        ThoiHanSuDung: "",
        NhaO: "",
        CongTrinh: "",
        RungSanXuat: "",
        CayLauNam: ""
    }
};  
