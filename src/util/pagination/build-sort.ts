import type { ISort } from "../../interface/common/sort.interface.js";
import { SortDirection } from "../constant/constants.js";

export function buildSort(
    sorts?: ISort[]
): Record<string, 1 | -1> | undefined {

    if (!sorts || sorts.length === 0) {
        return undefined;
    }

    return Object.fromEntries(
        sorts.map(sort => [
            sort.field,
            sort.direction === SortDirection.ASC ? 1 : -1
        ])
    );
}