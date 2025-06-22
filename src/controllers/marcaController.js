const express = require('express');
const router = express.Router();
const marcaService = require('../services/marcaService');

module.exports = {
  async listar(req, res) {
    const marcas = await marcaService.listar();
    res.json(marcas);
  },
  async criar(req, res) {
    const marca = await marcaService.criar(req.body);
    res.status(201).json(marca);
  },

   async buscarPorId(req, res) {
    const { id } = req.params;
    const marca = await marcaService.buscarPorId(id);
    if (!marca) return res.status(404).json({ error: 'Marca não encontrada' });
    res.json(marca);
  },

  async atualizar(req, res) {
    const { id } = req.params;
    const marcaAtualizada = await marcaService.atualizar(id, req.body);
    if (!marcaAtualizada) return res.status(404).json({ error: 'Marca não encontrada' });
    res.json(marcaAtualizada);
  },

  async deletar(req, res) {
    const { id } = req.params;
    const marcaDeletada = await marcaService.deletar(id);
    if (!marcaDeletada) return res.status(404).json({ error: 'Marca não encontrada' });
    res.json({ message: 'Marca deletada com sucesso' });
  }

};
