import { Provider } from '@nestjs/common';
import {
    ISaveLinkUseCase,
    SaveLinkUseCase,
} from '@pars/domain/use-case/save-link';

export const SaveLinkProvider: Provider = {
    provide: ISaveLinkUseCase,
    useClass: SaveLinkUseCase,
};
