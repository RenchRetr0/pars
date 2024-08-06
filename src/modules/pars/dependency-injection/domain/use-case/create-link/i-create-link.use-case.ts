export abstract class ICreateLinkUseCase
{
    abstract createLink(chatId: number): Promise<string[]>
}