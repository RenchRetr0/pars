import { Provider } from '@nestjs/common';
import {
    IStartParsUseCase,
    StartParsUseCase,
} from '@pars/domain/use-case/start-pars';

export const StartParsProvider: Provider = {
    provide: IStartParsUseCase,
    useClass: StartParsUseCase,
};
