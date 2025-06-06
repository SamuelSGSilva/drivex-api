require("dotenv").config();
const express = require("express");
const sequelize = require("./src/models/db");
const cors = require("cors");
const marcaRoutes = require('./src/routes/marcaRoutes');
const carroRoutes = require("./src/routes/carroRoutes");
const acessorioRoutes = require("./src/routes/acessorioRoutes");
const authRoutes = require("./src/auth/auth.routes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", carroRoutes);
app.use("/api", acessorioRoutes);
app.use('/api', marcaRoutes);
app.use('/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("API Drivex funcionando!");
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Banco sincronizado com Sequelize");
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco:", err);
  });

module.exports = app;
