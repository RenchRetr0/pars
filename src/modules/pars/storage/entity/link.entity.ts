import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('link')
export class LinkEntity {
    constructor(link: string) {
        this.link = link;
    }

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        type: 'varchar',
        name: 'link',
        select: true,
    })
    link!: string;
}
