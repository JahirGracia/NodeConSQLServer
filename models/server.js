const express = require('express')
const cors = require('cors');
const { db } = require('../database/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Rutas
        this.paths = {
            usuarios: '/api/usuarios'
        }

        // Connectar a base de datos
        this.conectarDB();

        // Middlewares (Son funciones que le agregan funcionalidades al web server)
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    async conectarDB() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;