import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ILinkRepository } from "@pars/domain/storage";
import { LinkEntity } from "../entity";
import { LinkModel } from "@pars/domain/model";

@Injectable()
export class LinkRepository implements ILinkRepository
{
    constructor(
        @InjectRepository(LinkEntity)
        private readonly linkRepository: Repository<LinkEntity>,
    ){}

    async createLink(linkModel: LinkModel): Promise<LinkModel> {
        return await this.linkRepository.save(linkModel);
    }

    async getLinks(): Promise<LinkModel[]> {
        return await this.linkRepository.find();
    }
}