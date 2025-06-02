const express = require('express');
const router = express.Router();
const carroController = require('../controllers/carroController');

router.get('/carros', carroController.listar);
router.post('/carros', carroController.criar);
router.put('/carros/:id', carroController.atualizar);
router.get('/carros/:id', carroController.buscarPorId);
router.delete('/carros/:id', carroController.deletar);

module.exports = router;