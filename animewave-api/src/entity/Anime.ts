import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Genero } from "./Genero";

@Entity()
export class Anime{
    constructor(nome: string, descricao: string, numeroEpisodios: number, urlImagem: string){
        this.nome = nome;
        this.descricao = descricao;
        this.numeroEpisodios = numeroEpisodios;
        this.urlImagem = urlImagem

    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    numeroEpisodios: number;

    @Column()
    urlImagem: string;

    @ManyToMany(type => Genero, genero => genero.animes)
    @JoinTable()
    generos: Genero[]

}