import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpService } from '@nestjs/axios';
import * as cheerio from 'cheerio';
import { ICreateLinkUseCase } from "./i-create-link.use-case";
import { ILinkRepository } from "@pars/domain/storage";

@Injectable()
export class CreateLinkUseCase implements ICreateLinkUseCase
{
    constructor(
        @Inject(ILinkRepository)
        private readonly linkRepository: ILinkRepository,
        @Inject(ConfigService)
        private readonly config: ConfigService,
        @Inject(HttpService)
        private readonly httpService: HttpService
    ){}

    async createLink(chatId: number): Promise<string[]>
    {
        const response = await this.httpService.get(`https://vk.com/im?sel=${chatId}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                Authorization: 'Bearer ВАШ_ТОКЕН',
            },
        }).toPromise();

        const $ = cheerio.load(response.data);
        const vipLinks: string[] = [];

        $('a.vip-link').each((index, element) => {
            vipLinks.push($(element).attr('href'));
          });
      
        return vipLinks;
    }
}