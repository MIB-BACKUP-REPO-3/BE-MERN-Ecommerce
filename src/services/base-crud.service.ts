import type { ICrudService } from "../interfaces/service/crud-service.interface.js";

export class BaseCrudService<
    T,
    CreateDTO = Partial<T>,
    UpdateDTO = Partial<T>,
    FilterDTO = Record<string, unknown>
> implements ICrudService<T, CreateDTO, UpdateDTO, FilterDTO> {

    constructor(
        protected model: any
    ) {}

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
        return this.model.findByIdAndUpdate(id, data, {new:true});
    }

    remove(id: string) {
        return this.model.findByIdAndDelete(id);
    }
}