import { getManager } from "typeorm";
import { Genero} from "../entity/Genero";
import { error } from "console";

class GeneroController{
    async criarGenero(genero: Genero){
        const {nome} = genero;

        const generoExistente = await getManager().findOne(Genero, { nome });
        if(generoExistente){
            throw new Error("Ja existe um genero cadastrado para isso");
        }

        const generoSalvo = await getManager().save(genero);
        return generoSalvo;
        

    }
}

export default GeneroController;