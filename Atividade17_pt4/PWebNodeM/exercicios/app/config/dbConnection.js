const sql = require('mssql');
var connSQLServer = function()
{
    const sqlConfig =
    {
        user: 'BD2121040',
        password: '#BD2121040',
        database: 'BD',
        server: 'apolo',
        options:
        {
            encrypt: false,
            trustServerCertificate: true // se você não tiver um certificado de servidor configurado
        }
    }
    return sql.connect(sqlConfig);
}

module.exports = function(){ 
  console.log('O autoload carregou o módulo de conexão com o BD');
  return connSQLServer;
}