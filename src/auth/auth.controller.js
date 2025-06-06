const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./auth.model');

const SECRET_KEY = process.env.SECRET_KEY || 'chavesecreta';

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifica se usuário já existe
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(400).json({ error: 'Usuário já existe' });

    // Criptografa a senha
    const hash = await bcrypt.hash(password, 10);

    // Cria usuário no banco
    await User.create({ username, password: hash });

    return res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Busca usuário
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    // Compara senha
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Senha incorreta' });

    // Gera token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

    return res.json({ message: 'Login realizado com sucesso', token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao realizar login' });
  }
};