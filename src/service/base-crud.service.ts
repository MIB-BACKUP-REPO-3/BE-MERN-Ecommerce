import type { Model } from "mongoose";
import type { ICrudService } from "../interface/service/crud-service.interface.js";
import type { IPageRequest } from "../interface/common/page-request.interface.js";
import type { IPageResponse } from "../interface/common/page-response.interfac.js";
import { resolvePagination } from "../util/resolve-pagination.js";
import { applyPagination } from "../util/apply-pagination.js";
import { applySort } from "../util/apply-sort.js";
import { createPageResponse } from "../util/create-page-response.js";

export class BaseCrudService<
  T,
  CreateDTO = Partial<T>,
  UpdateDTO = Partial<T>,
  FilterDTO = Record<string, unknown>,
> implements ICrudService<T, CreateDTO, UpdateDTO, FilterDTO> {
  constructor(protected model: Model<T>) {}

  getAll(filters?: FilterDTO) {
    return this.model.find(filters);
  }

  getOne(id: string) {
    return this.model.findById(id);
  }

  create(data: CreateDTO) {
    return this.model.create(data);
  }

  update(id: string, data: UpdateDTO) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  async getAllPaginated(
    filters: FilterDTO = {} as FilterDTO,
    pageRequest: IPageRequest = {},
  ): Promise<IPageResponse<T>> {
    const pagination = resolvePagination(pageRequest);
    const query = applyPagination(this.model.find(filters), pagination);
    applySort(query, buildSort(pageRequest.sort));
    const [content, totalElements] = await Promise.all([query.exec(),this.model.countDocuments(filters),]);
    return createPageResponse(content, pagination, totalElements);
  }
}
