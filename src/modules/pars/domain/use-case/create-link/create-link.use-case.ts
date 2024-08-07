import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cheerio from 'cheerio';
import { MessageContext, VK } from 'vk-io';
import { ICreateLinkUseCase } from './i-create-link.use-case';
import { ISaveLinkUseCase } from '../save-link';

@Injectable()
export class CreateLinkUseCase implements ICreateLinkUseCase {
    constructor(
        @Inject(ISaveLinkUseCase)
        private readonly saveLinkUseCase: ISaveLinkUseCase,
    ) {}

    async createLink(message: MessageContext): Promise<void> {
        const $ = cheerio.load(message.text);
        const links = $('a');

        links.each((index, link) => {
            const href = $(link).attr('href');
            if (href && href.includes('vip')) {
                this.saveLinkUseCase.saveToExcel(
                    [href],
                    `vip-links-${message.peerId}.xlsx`,
                );
            }
        });
    }
}
