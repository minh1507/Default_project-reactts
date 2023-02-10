import { Guid } from "common/Enums";

export interface giohang{
    TieuDe: string;
    URL_AnhDaiDien: string;
    HocPhiGoc: string;
    HocPhiGiamGia: string
}

export interface IState {
    Totalpre: number,
    Totalnext:number,
    Count: number,
    DataItem: giohang[]
}

export const InitState: IState = {
    Totalnext:0,
    Totalpre: 0,
    Count: 0,
    DataItem: []
};
