const express = require("express");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded());

let message = "";

app.get("/", (req, res) => {
  const devList = ["Backend", "Frontend", "Fullstack"];
  const analyticsList = ["Engenharia de dados", "Ciência de dados"];

  //Esvaziar variavel msg, para sumir com ela da tela
  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", {
    titulo: "Blue",
    devList: devList,
    analyticsList: analyticsList,
    message,
  });
});

app.post("/subs", (req, res) => {
  const { nome, email } = req.body;
  message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
  res.redirect("/");
});
// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));