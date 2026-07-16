import type { SortDirection } from "../../type/sort-direction.type.js";

export interface ISort {
    field: string;
    direction: SortDirection;
}
