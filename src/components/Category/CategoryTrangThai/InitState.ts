export const CategoryType = 5;
export const CategoryName = "Trạng thái hồ sơ";
export interface IModelItem {
    Id: String;
    Code: String;
    Name: String;
    Type: Number;
}
export interface IState {
    DataItems: IModelItem[]
}
export const InitState: IState = {
    DataItems: []
};  
