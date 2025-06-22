const express = require('express');
const router = express.Router();
const MarcaController = require('../controllers/marcaController');

router.post('/marcas', MarcaController.criar);
router.get('/marcas', MarcaController.listar);
router.get('/marcas/:id', MarcaController.buscarPorId);
router.put('/marcas/:id', MarcaController.atualizar);
router.delete('/marcas/:id', MarcaController.deletar);

module.exports = router;
