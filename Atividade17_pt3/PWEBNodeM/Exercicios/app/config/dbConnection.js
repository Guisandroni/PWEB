var sql = require("mssql");

module.exports = function() {
    const sqlConfig = {
        user: 'BD2221032',
        password: '#genshinimpact1',
        database: 'BD',
        server: 'Apolo',
        driver: 'msnodesqlv8',
        options: {
            encrypt: false, 
            trustServerCertificate: true // se você não tiver um certificado de servidor configurado
        }
    }
    return sql.connect(sqlConfig);
}       