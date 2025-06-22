const Marca = require('../models/marca');

module.exports = {
  async listar() {
    return await Marca.findAll();
  },

  async criar(data) {
    return await Marca.create(data);
  },

  async buscarPorId(id) {
    return await Marca.findByPk(id);
  },

  async atualizar(id, novosDados) {
    const marca = await Marca.findByPk(id);
    if (!marca) return null;

    await marca.update(novosDados);
    return marca;
  },

  async deletar(id) {
    const marca = await Marca.findByPk(id);
    if (!marca) return null;

    await marca.destroy();
    return marca;
  }

};
