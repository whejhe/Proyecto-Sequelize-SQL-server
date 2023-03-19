import {discosUsuario} from '../models/discosUsuario.js'

export const getDiscosUsuario = async(req,res)=>{
    try{
        const discosDelUsuario = await discosUsuario.findAll();
    res.json(discosDelUsuario);
    }catch(error){
        return res.status(500).json({ message: error.message });
    }
}

export const deleteDiscosUsuario = async (req,res)=>{
    try{
        const {id} = req.params;
        await discosUsuario.destroy({
            where:{
                id,
            },
        });
    }catch(error){
        return res.status(500).json({message: error.message});
    }

};