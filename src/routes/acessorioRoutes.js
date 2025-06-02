const express = require('express');
const router = express.Router();
const acessorioController = require('../controllers/acessorioController');

router.get('/acessorios', acessorioController.listar);
router.post('/acessorios', acessorioController.criar);
router.get('/acessorios/:id', acessorioController.buscarPorId); 
router.delete('/acessorios/:id', acessorioController.deletar);   
router.put('/acessorios/:id', acessorioController.atualizar);

module.exports = router;
