import { Request } from "express-serve-static-core";
import { ICrudService } from "../interfaces/service/crud-service.interface";

export class CustomerAccountService implements ICrudService {
    getAll(request: Request): Promise<unknown[]> {
        throw new Error("Method not implemented.");
    }
    getOne(request: Request): Promise<unknown> {
        throw new Error("Method not implemented.");
    }
    create(request: Request): Promise<unknown> {
        throw new Error("Method not implemented.");
    }
    update(request: Request): Promise<unknown> {
        throw new Error("Method not implemented.");
    }
    remove(request: Request): Promise<unknown> {
        throw new Error("Method not implemented.");
    }
}