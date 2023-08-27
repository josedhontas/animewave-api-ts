import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Genero } from "./Genero";
import { Episodio } from "./Episodio";

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

    @OneToMany(()=> Episodio, episodio => episodio.anime)

    @ManyToMany(type => Genero, genero => genero.animes)
    @JoinTable()
    generos: Genero[]

}