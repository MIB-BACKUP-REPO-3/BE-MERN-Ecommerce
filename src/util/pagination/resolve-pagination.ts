import type { IPageRequest } from "../../interface/common/page-request.interface.js";
import type { IPagination } from "../../interface/common/pagination interface.js";
import { PAGINATION_PREFERENCE } from "../constant/constants.js";

export function resolvePagination(
    request: IPageRequest
): IPagination {

    const page = request.page ?? PAGINATION_PREFERENCE.STARTING_PAGE;
    const size = request.size ?? PAGINATION_PREFERENCE.DEFAULT_PAGE_SIZE;

    return {
        page,
        size,
        skip: page * size
    };
}