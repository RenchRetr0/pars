export abstract class ISaveLinkUseCase {
    abstract saveToExcel(vipLinks: string[], filename: string): Promise<void>;
}
