export enum Message {
    Data_Does_Not_Exists = "Dữ liệu không tồn tại !",
    UserName_Is_Not_Empty = "Tên đăng nhập không được để trống !",
    Password_Is_Not_Empty = "Mật khẩu không được để trống !",
    FullName_Is_Not_Empty = "Họ và tên không được để trống !",
    Email_Is_Not_Empty = "Email không được để trống !",
    Email_Is_Not_Format = "Email không đúng định dạng !",
    Phone_Is_Not_Empty = "SĐT không được để trống !",
    Phone_Is_Not_Format = "SĐT không đúng định dạng !",    
    OldPassword_Is_Not_Empty = "Mật khẩu cũ không được để trống !",
    NewPassword_Is_Not_Empty = "Mật khẩu mới không được để trống !",    
    Require_Row_Selection = "Yêu cầu chọn bản ghi !",
    Response_Success = "Xử lý thành công !",
    Response_Error = "Xử lý lỗi !",
    DuplicateAttribute_Name = "Trùng tên !",    
    DuplicateAttribute_Code = "Trùng mã !",    
    DuplicateAttribute_LoginName = "Trùng tài khoản hoặc email !",
    DeptNotInOrgan = "Đơn vị không là cấp con của phòng ban !",  
    LoginFacebookError = "Đăng nhập Facebook thất bại !",  
    LoginGoogleError = "Đăng nhập Google thất bại !",    
}
export enum Guid {
    Empty = "00000000-0000-0000-0000-000000000000"
}
export enum ControlType {
    InputText = "InputText",  
    CkEditor = "CkEditor",   
    TextArea = "TextArea",    
    InputNumber = "InputNumber",    
    Select = "Select",
    Date = "Date",   
    Checkbox = "Checkbox",
    RadioButton = "RadioButton",
    UploadFile = "UploadFile"
}
export const AppName = "HuyenCuChi"

export let TruongDuLieu = [
    { Id: "MaHoSo", Name: "Mã hồ sơ" },
    { Id: "HoVaTen", Name: "Họ và tên" },
    { Id: "Email", Name: "Email" },
    { Id: "SĐT", Name: "Số điện thoại" },
    { Id: "DiaChi", Name: "Địa chỉ" },
    { Id: "LinhVuc", Name: "Lĩnh vực" },
    { Id: "LoaiPhanAnh", Name: "Loại phản ánh" },
    { Id: "NgayHienTai", Name: "Ngày hiện tại" },
]
export let TruongDuLieu_GiayBienNhan = [
    { Id: "SoHoSo", Name: "Số hồ sơ" },
    { Id: "HovatenNguoiNhan", Name: "Họ và tên người nhận" },
    { Id: "HovatenNguoiGiao", Name: "Họ và tên người giao" },
    { Id: "Email", Name: "Email" },
    { Id: "Dienthoai", Name: "Điện thoại" },
    { Id: "DiaChi", Name: "Địa chỉ" },
    { Id: "LoaiHoSo", Name: "Loại dịch vụ" },
    { Id: "NgayHienTai", Name: "Ngày hiện tại" },
]

// export let TieuChiTamDung = [
//     {Id: 0, Ten: "Hồ sơ không đủ thông tin"}, 
//     {Id: 1, Ten: "Hồ sơ không đủ giấy tờ pháp lý"}
// ]

// export let TinhThanhPho = [
//     { value: "86b520e3-56f4-46f6-bd1b-1b987ed4b9c2", label: "Thành phố Hồ Chí Minh" }
// ]
// export let QuanHuyen = [
//     { value: "16b520e3-56f4-46f6-bd1b-1b987ed4b9c2", label: "Củ Chi" }
// ]
// export let PhuongXa = [
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b901", label: "Thị trấn Củ Chi" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b902", label: "Xã Phú Mỹ Hưng" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b903", label: "Xã An Phú" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b904", label: "Xã Trung Lập Thượng" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b905", label: "Xã An Nhơn Tây" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b906", label: "Xã Nhuận Đức" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b907", label: "Xã Phạm Văn Cội" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b908", label: "Xã Phú Hòa Đông" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b909", label: "Xã Trung Lập Hạ" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b910", label: "Xã Trung An" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b911", label: "Xã Phước Thạnh" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b912", label: "Xã Phước Hiệp" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b913", label: "Xã Tân An Hội" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b914", label: "Xã Phước Vĩnh An" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b915", label: "Xã Thái Mỹ" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b916", label: "Xã Tân Thạnh Tây" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b917", label: "Xã Hòa Phú" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b918", label: "Xã Tân Thạnh Đông" },
//     { value: "a6b520e3-56f4-46f6-bd1b-1b987ed4b919", label: "Xã Bình Mỹ" },
// ]