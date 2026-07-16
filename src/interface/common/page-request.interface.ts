import type { ISort } from "./sort.interface.js";

export interface IPageRequest {
    page?: number;
    size?: number;
    sort?: ISort[];
}
