import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('capitaes')
export class Capitão {
    @PrimaryGeneratedColumn()
    id_capitao!: number;

    @Column()
    nome!: string;

    @Column()
    divisao!: number;

    @Column()
    bankai!: string;
}
