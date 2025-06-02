const Acessorio = require('../models/acessorio');
const Carro = require('../models/carro');

module.exports = {
  async listar() {
    return await Acessorio.findAll({ include: Carro });
  },

  async criar(data) {
    return await Acessorio.create(data);
  },

   async buscarPorId(id) {
    return await Acessorio.findByPk(id, { include: Carro });
  },

  async deletar(id) {
    const acessorio = await Acessorio.findByPk(id);
    if (!acessorio) return null;

    await acessorio.destroy();
    return acessorio;
  },

  async atualizar(id, novosDados) {
    const acessorio = await Acessorio.findByPk(id);
    if (!acessorio) return null;

    await acessorio.update(novosDados);
    return acessorio;
  }
};
