import type { IPageRequest } from "../common/page-request.interface.js";
import type { IPageResponse } from "../common/page-response.interfac.js";

export interface ICrudService<
  T,
  CreateDTO = Partial<T>,
  UpdateDTO = Partial<T>,
  FilterDTO = Record<string, unknown>,
> {
  getAll(filters?: FilterDTO): Promise<T[]>;
  getAllPaginated(filters: FilterDTO,pageRequest: IPageRequest): Promise<IPageResponse<T>>;
  getOne(id: string): Promise<T | null>;
  create(data: CreateDTO): Promise<T>;
  update(id: string, data: UpdateDTO): Promise<T | null>;
  remove(id: string): Promise<T | null>;
}
