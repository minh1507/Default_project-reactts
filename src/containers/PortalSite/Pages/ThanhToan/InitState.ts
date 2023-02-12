import { Guid } from "common/Enums";

export interface giohang{
    Id: string;
    TieuDe: string;
    URL_AnhDaiDien: string;
    HocPhiGoc: string;
    HocPhiGiamGia: string
    Check: boolean
}

export interface IState {
    Total: number;
    Count: number,
    DataItem: giohang[]
}

export const InitState: IState = {
    DataItem: [],
    Count: 0,
    Total: 0
};
