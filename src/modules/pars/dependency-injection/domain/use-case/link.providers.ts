import { Provider } from '@nestjs/common';
import { CreateLinkProvider } from './create-link';
import { SaveLinkProvider } from './save-link';
import { StartParsProvider } from './start-pars';

export const LinkProviders: Provider[] = [
    CreateLinkProvider,
    SaveLinkProvider,
    StartParsProvider,
];
