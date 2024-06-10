var dbConnection = require("../config/dbConnection");

module.exports = function(app) {
    app.get("/informacao/professores", function(req, res) {
        //res.render("informacao/professores");
        async function getProfessores() {
            try {
                const pool = await dbConnection();
                const results = await pool.request().query("SELECT * FROM PROFESSORES"); 
                res.render("informacao/professores", {profs : results.recordset});
            }
            catch (err) {
                console.log(err);
            }
        }
        getProfessores();
    });
}