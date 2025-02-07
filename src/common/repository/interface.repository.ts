export abstract class IRepository<T> {
    abstract findAll(): Promise<T[]>;
    abstract findById(id: number): Promise<T | null>;
    abstract create(item: T): Promise<T>;
    abstract update(id: number, item: T): Promise<void>;
    abstract delete(id: number): Promise<void>;
}
