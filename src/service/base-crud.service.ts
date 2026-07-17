import type { Model, QueryFilter, UpdateQuery } from "mongoose";
import type { ICrudService } from "../interface/service/crud-service.interface.js";
import type { IPageRequest } from "../interface/common/page-request.interface.js";
import type { IPageResponse } from "../interface/common/page-response.interfac.js";
import { resolvePagination } from "../util/pagination/resolve-pagination.js";
import { applyPagination } from "../util/pagination/apply-pagination.js";
import { applySort } from "../util/pagination/apply-sort.js";
import { createPageResponse } from "../util/pagination/create-page-response.js";
import { buildSort } from "../util/pagination/build-sort.js";

export class BaseCrudService<
  T,
  CreateDTO extends Partial<T> = Partial<T>,
  UpdateDTO extends UpdateQuery<T> = UpdateQuery<T>,
  FilterDTO extends QueryFilter<T> = QueryFilter<T>,
> implements ICrudService<T, CreateDTO, UpdateDTO, FilterDTO> {
  constructor(protected model: Model<T>) {}

  async getAll(filters?: FilterDTO) {
    return this.model.find(filters);
  }

  async getOne(id: string) {
    return this.model.findById(id);
  }

  async create(data: CreateDTO) {
    return this.model.create(data);
  }

  async update(id: string, data: UpdateDTO) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  async getAllPaginated(
    filters: FilterDTO = {} as FilterDTO,
    pageRequest: IPageRequest = {},
  ): Promise<IPageResponse<T>> {
    const pagination = resolvePagination(pageRequest);
    const query = applyPagination(this.model.find(filters), pagination);
    applySort(query, buildSort(pageRequest.sort));
    const [content, totalElements] = await Promise.all([
      query.exec(),
      this.model.countDocuments(filters),
    ]);
    return createPageResponse(content, pagination, totalElements);
  }
}
