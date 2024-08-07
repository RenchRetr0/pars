import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ICreateLinkUseCase } from '@pars/domain/use-case/create-link';

@Controller('pars')
export class ParsController {
    constructor(
        @Inject(ICreateLinkUseCase)
        private readonly createLinkUseCase: ICreateLinkUseCase,
    ) {}

    @Get(':chatId')
    async getVipLinks(@Param('chatId') chatId: number): Promise<string[]> {
        return this.createLinkUseCase.createLink(chatId);
    }
}
