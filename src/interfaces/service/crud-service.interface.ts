export interface ICrudService<
    T,
    CreateDTO = Partial<T>,
    UpdateDTO = Partial<T>,
    FilterDTO = Record<string, unknown>
> {
    getAll(filters?: FilterDTO): Promise<T[]>;
    getOne(id: string): Promise<T | null>;
    create(data: CreateDTO): Promise<T>;
    update(id: string, data: UpdateDTO): Promise<T | null>;
    remove(id: string): Promise<T | null>;
}