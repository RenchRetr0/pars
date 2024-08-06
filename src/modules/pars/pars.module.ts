import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkEntity } from './storage/entity';
import { LinkProvider } from './dependency-injection/domain/repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            LinkEntity
        ]),
    ],
    controllers: [],
    providers: [
        LinkProvider
    ]
})
export class ParsModule {}
