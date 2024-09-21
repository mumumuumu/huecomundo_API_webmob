import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('espadas')
export class Espada {
    @PrimaryGeneratedColumn()
    id_espada!: number;

    @Column()
    nome!: string;

    @Column()
    numero!: number;

    @Column()
    ressurecion!: string;
}
