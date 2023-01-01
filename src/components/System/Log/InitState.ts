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
    DataItems: IModelItem[]
}
export const InitState: IState = {
    DataItems: []
};  
