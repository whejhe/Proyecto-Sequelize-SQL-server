import { discos } from '../models/discos.js'

export const getDiscos = async (req, res) => {
    try {
        const misDiscos = await discos.findAll();
        res.json(misDiscos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createDiscos = async (req, res) => {
    const { titulo_disco, anio_lanzamiento, id_artista } = req.body;
    try {
        const newDisco = await discos.create({
            titulo_disco,
            anio_lanzamiento,
            id_artista
        });
        res.json(newDisco);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateDiscos = async (req,res)=>{}

export const deleteDiscos = async (req,res)=>{
    try{
        const {id} = req.params;
        await discos.destroy({
            where:{
                id,
            },
        });
    }catch(error){
        return res.status(500).json({message: error.message});
    }

};