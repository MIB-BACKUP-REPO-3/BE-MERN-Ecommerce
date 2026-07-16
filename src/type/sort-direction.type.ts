import type { SortDirection } from "../util/constant/constants.js";


export type SortDirection =
    typeof SortDirection[keyof typeof SortDirection];