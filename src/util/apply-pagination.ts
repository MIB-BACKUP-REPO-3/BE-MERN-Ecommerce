import type { Query } from "mongoose";
import type { IPagination } from "../interface/common/pagination interface.js";

export function applyPagination<T>(
    query: Query<T[], T>,
    pagination: IPagination
) {
    return query
        .skip(pagination.skip)
        .limit(pagination.size);
}