const { default: axios } = require('axios');
const { Router } = require('express');
const {allVideogames, createVideogame, getGenres, videogamesById} = require('../controllers/controllers.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/videogames', createVideogame)

router.get('/videogames', allVideogames)

router.get('/videogames/:id', videogamesById)

router.get('/genres', getGenres)




module.exports = router;
