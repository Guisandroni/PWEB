var app = require("./app/config/server");

var rotaHome = require("./app/routes/home");
rotaHome(app);

var rotaAdicionarUsuario = require("./app/routes/adicionar_usuario")(app);

var rotaHistoria = require("./app/routes/historia")(app);

var rotaProfessor = require("./app/routes/professores")(app);

var rotaCurso = require("./app/routes/cursos")(app);

app.listen(3000, function() {
    console.log("servidor iniciado");
});