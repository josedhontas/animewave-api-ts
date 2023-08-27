import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Anime } from "./Anime";

@Entity()
export class Genero{
    constructor(nome: string){
        this.nome = nome;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @ManyToMany(type => Anime, anime => anime.generos)
    animes: Anime[]
}