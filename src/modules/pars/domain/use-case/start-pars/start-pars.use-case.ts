import { Inject, Injectable } from '@nestjs/common';
import { MessageContext, VK } from 'vk-io';
import { ConfigService } from '@nestjs/config';
import { IStartParsUseCase } from './i-start-pars.use-case';
import { ICreateLinkUseCase } from '../create-link';

@Injectable()
export class StartParsUseCase implements IStartParsUseCase {
    private vk: VK;

    constructor(
        @Inject(ConfigService)
        private readonly config: ConfigService,
        @Inject(ICreateLinkUseCase)
        private readonly createLinkUseCase: ICreateLinkUseCase,
    ) {
        this.vk = new VK({
            token: this.config.get<string>('VK_TOKEN'),
        });
    }

    async startParsing(chatId: number): Promise<void> {
        this.vk.updates.on('message', (message: MessageContext) => {
            if (message.peerId === chatId) {
                this.createLinkUseCase.createLink(message);
            }
        });

        this.vk.updates.startPolling();
    }
}
