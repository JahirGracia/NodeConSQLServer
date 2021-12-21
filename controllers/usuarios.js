const { response, request } = require('express');
const Usuario = require('../models/usuario');



const usuariosGet = async (req = request, res = response) => {

    try {
        const usuarios = await Usuario.findAll();

        // const usuarios = await Usuario.findAll({
        //     attributes: ['id', 'nombre']
        // });

        res.json({
            usuarios
        })
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}

const usuarioGet = async (req = request, res = response) => {

    const { id } = req.params;

    try {
        const usuario = await Usuario.findByPk(id);

        if(!usuario) {
            res.status(404).json({
                msg: `No existe el usuario con el id: ${id}`
            });
        }

        res.json({
            usuario
        })
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}

module.exports = {
    usuariosGet,
    usuarioGet
}