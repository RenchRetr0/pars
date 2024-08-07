import { Provider } from '@nestjs/common';
import { CreateLinkProvider } from './create-link';
import { SaveLinkProvider } from './save-link';

export const LinkProviders: Provider[] = [CreateLinkProvider, SaveLinkProvider];
