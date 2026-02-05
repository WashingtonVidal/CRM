const express = require("express");

const app = express();

// rota de teste
app.get("/", (req, res) => {
  res.send("Servidor rodando com Express 🚀");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});