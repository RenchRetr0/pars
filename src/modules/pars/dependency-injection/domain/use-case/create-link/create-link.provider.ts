import { Provider } from '@nestjs/common';
import {
    CreateLinkUseCase,
    ICreateLinkUseCase,
} from '@pars/domain/use-case/create-link';

export const CreateLinkProvider: Provider = {
    provide: ICreateLinkUseCase,
    useClass: CreateLinkUseCase,
};
