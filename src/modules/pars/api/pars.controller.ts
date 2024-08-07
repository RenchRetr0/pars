import { Controller, Get, Inject, Param } from '@nestjs/common';
import { IStartParsUseCase } from '@pars/domain/use-case/start-pars';

@Controller('pars')
export class ParsController {
    constructor(
        @Inject(IStartParsUseCase)
        private readonly startParsUseCase: IStartParsUseCase,
    ) {}

    @Get(':chatId')
    async getVipLinks(@Param('chatId') chatId: number): Promise<void> {
        await this.startParsUseCase.startParsing(chatId);
    }
}
