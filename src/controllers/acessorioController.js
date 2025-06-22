const acessorioService = require('../services/acessorioService');

module.exports = {
  async listar(req, res) {
    const acessorios = await acessorioService.listar();
    res.json(acessorios);
  },

  async criar(req, res) {
    const acessorio = await acessorioService.criar(req.body);
    res.status(201).json(acessorio);
  },

   async buscarPorId(req, res) {
    const { id } = req.params;
    const acessorio = await acessorioService.buscarPorId(id);
    if (!acessorio) return res.status(404).json({ error: 'Acessório não encontrado' });
    res.json(acessorio);
  },

  async deletar(req, res) {
    const { id } = req.params;
    const acessorio = await acessorioService.deletar(id);
    if (!acessorio) return res.status(404).json({ error: 'Acessório não encontrado' });
    res.json({ message: 'Acessório deletado com sucesso' });
  },

   async atualizar(req, res) {
    const { id } = req.params;
    const novosDados = req.body;

    try {
      const acessorioAtualizado = await acessorioService.atualizar(id, novosDados);
      if (!acessorioAtualizado) return res.status(404).json({ error: 'Acessório não encontrado' });
      res.json(acessorioAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar acessório' });
    }
  }
};
