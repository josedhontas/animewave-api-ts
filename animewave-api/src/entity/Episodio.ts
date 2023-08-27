import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Anime } from "./Anime";

@Entity()
export class Episodio{
    constructor(nome: string, numero: number, link: string){
        this.nome = nome;
        this.numero = numero;
        this.link = link;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
    
    @Column()
    numero: number;

    @Column()
    link: string;

    @ManyToOne(()=> Anime)
    anime: Anime;
}