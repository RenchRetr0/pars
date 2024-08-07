export abstract class IStartParsUseCase {
    abstract startParsing(chatId: number): Promise<void>;
}
