import { Router } from "express";
import { Genero } from "../entity/Genero";
import GeneroController from "../controller/GeneroController";

export const routerGenero = Router()

const generoCtrl = new GeneroController;

routerGenero.post('/', async (req, res) =>{
    const {nome} = req.body;
    const genero = new Genero(nome);
    try {
        const generoSalvo = await generoCtrl.criarGenero(genero);
        if (!generoSalvo) {
        }
        res.json(generoSalvo);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

