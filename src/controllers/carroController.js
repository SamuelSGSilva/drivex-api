const carroService = require('../services/carroService');

module.exports = {
  async listar(req, res) {
    const carros = await carroService.listar();
    res.json(carros);
  },

  async criar(req, res) {
    const carro = await carroService.criar(req.body);
    res.status(201).json(carro);
  },

   async atualizar(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    try {
      const carro = await carroService.atualizar(id, dadosAtualizados);
      if (!carro) {
        return res.status(404).json({ error: 'Carro não encontrado' });
      }
      res.json(carro);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar carro' });
    }
  },

  async buscarPorId(req, res) {
  try {
    const id = req.params.id;
    const carro = await carroService.buscarPorId(id);
    if (!carro) {
      return res.status(404).json({ error: "Carro não encontrado" });
    }
    res.json(carro);
  } catch (err) {
    console.error("Erro ao buscar carro:", err);
    res.status(500).json({ error: "Erro interno" });
  }
},

 async deletar(req, res) {
    const { id } = req.params;
    const carro = await carroService.deletar(id);
    if (!carro) return res.status(404).json({ error: 'Carro não encontrado' });
    res.json({ message: 'Carro deletado com sucesso' });
  }

};
