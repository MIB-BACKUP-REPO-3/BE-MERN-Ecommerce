import type { IPageResponse } from "../interface/common/page-response.interfac.js";
import type { IPagination } from "../interface/common/pagination interface.js";

export function createPageResponse<T>(
    content:T[],
    pagination:IPagination,
    totalElements:number
):IPageResponse<T>{

    return {
        content,
        page: pagination.page,
        size: pagination.size,
        totalElements,
        totalPages: Math.ceil(
            totalElements / pagination.size
        )
    };
}