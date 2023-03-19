import { usuarios } from '../models/usuarios.js'

export const getUsuario = async (req, res) => {
    try {
        const misUsuarios = await usuarios.findAll();
        res.json(misUsuarios);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createUsuario = async (req, res) => {
    const { nombreUsuario, apellidos, email, fechaNacimiento, contraseña } = req.body;

    try {
        const newUsuario = await discos.create({
            nombreUsuario,
            apellidos,
            email,
            fechaNacimiento,
            contraseña
        });
        res.json(newUsuario);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateUsuarios = async (req,res)=>{}

export const deleteUsuarios = async (req,res)=>{
    try{
        const {id} = req.params;
        await usuarios.destroy({
            where:{
                id,
            },
        });
    }catch(error){
        return res.status(500).json({message: error.message});
    }

};