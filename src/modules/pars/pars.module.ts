import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkEntity } from './storage/entity';
import { LinkProvider } from './dependency-injection/domain/repository';
import { LinkProviders } from './dependency-injection/domain/use-case';
import { ParsController } from './api/pars.controller';

@Module({
    imports: [TypeOrmModule.forFeature([LinkEntity])],
    controllers: [ParsController],
    providers: [LinkProvider, ...LinkProviders],
})
export class ParsModule {}
