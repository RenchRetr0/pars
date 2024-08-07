import { MessageContext } from 'vk-io';

export abstract class ICreateLinkUseCase {
    abstract createLink(message: MessageContext): Promise<void>;
}
