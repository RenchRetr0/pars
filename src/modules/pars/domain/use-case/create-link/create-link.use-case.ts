import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cheerio from 'cheerio';
import { VK } from 'vk-io';
import { ICreateLinkUseCase } from './i-create-link.use-case';
import { ISaveLinkUseCase } from '../save-link';

@Injectable()
export class CreateLinkUseCase implements ICreateLinkUseCase {
    private vk: VK;

    constructor(
        @Inject(ConfigService)
        private readonly config: ConfigService,
        @Inject(ISaveLinkUseCase)
        private readonly saveLinkUseCase: ISaveLinkUseCase,
    ) {
        this.vk = new VK({
            token: this.config.get<string>('VK_TOKEN'),
        });
    }

    async createLink(chatId: number): Promise<string[]> {
        const messages = await this.vk.api.messages.getHistory({
            peer_id: chatId,
            count: 100,
        });

        const vipLinks: string[] = [];

        messages.items.forEach((message) => {
            const $ = cheerio.load(message.text);
            const links = $('a');

            links.each((index, link) => {
                const href = $(link).attr('href');
                if (href && href.includes('vip')) {
                    vipLinks.push(href);
                }
            });
        });

        await this.saveLinkUseCase.saveToExcel(
            vipLinks,
            `vip-links-${chatId}.xlsx`,
        );

        return vipLinks;
    }
}
