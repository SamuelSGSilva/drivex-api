const Carro = require('../models/carro');
const Marca = require('../models/marca');

module.exports = {
  async listar() {
    return await Carro.findAll({ include: Marca });
  },

  async criar(data) {
    return await Carro.create(data);
  },

   async atualizar(id, data) {
    const carro = await Carro.findByPk(id);
    if (!carro) return null;

    await carro.update(data);
    return carro;
  },

  async buscarPorId(id) {
  return await Carro.findByPk(id);
},

 async deletar(id) {
    const carro = await Carro.findByPk(id);
    if (!carro) return null;

    await carro.destroy();
    return carro;
  }
};
