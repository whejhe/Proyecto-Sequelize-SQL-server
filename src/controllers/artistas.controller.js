import { artistas } from '../models/artistas.js'

export const getArtista = async (req, res) => {
    try {
        const misArtistas = await artistas.findAll();
        res.json(misArtistas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createArtista = async (req, res) => {
    const { nombre_artista } = req.body;
    try {
        const newArtista = await artistas.create({
            nombre_artista
        });
        res.json(newArtista);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateArtista = async (req,res)=>{}

export const deleteArtista = async (req,res)=>{
    try{
        const {id} = req.params;
        await artistas.destroy({
            where:{
                id,
            },
        });
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}