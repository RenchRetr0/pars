import { LinkModel } from "../model";

export abstract class ILinkRepository
{
    abstract createLink(linkModel: LinkModel): Promise<LinkModel>
    abstract getLinks(): Promise<LinkModel[]>
}