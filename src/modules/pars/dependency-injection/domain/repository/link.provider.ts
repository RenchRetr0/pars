import { Provider } from '@nestjs/common';
import { ILinkRepository } from '@pars/domain/storage';
import { LinkRepository } from '@pars/storage/storage/link.repository';

export const LinkProvider: Provider = {
    provide: ILinkRepository,
    useClass: LinkRepository,
};
