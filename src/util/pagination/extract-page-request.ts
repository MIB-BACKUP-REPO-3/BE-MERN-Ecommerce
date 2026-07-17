import type { IPageRequest } from "../../interface/common/page-request.interface.js";
import type { PaginationQuery } from "../../type/pagination-query.type.js";
import { parseSort } from "./parse-sort.js";

export function extractPageRequest<T extends PaginationQuery>(
  query: T
): IPageRequest {
  const result: IPageRequest = {};

  if (query.page) {
    result.page = Number(query.page);
  }

  if (query.size) {
    result.size = Number(query.size);
  }

  const sort = parseSort(query.sort);

  if (sort) {
    result.sort = sort;
  }

  return result;
}