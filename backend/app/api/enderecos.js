module.exports = function(app){
    let api = {};

//Controle de gestores, retorna os dados do gestor de acordo com id
    api.listaEnderecos = (req, res) => {
        const { cpf } = req.params,
        connection = app.conexao.mysqlConnectionDB(),
        enderecosDAO = new app.infra.enderecosDAO(connection);

        enderecosDAO.listaEnderecoById(cpf, (error, result) => {
            if (error) {
                console.log(error);
                res.status(400).send(error);
            }
            res.status(200).send(result.rows);
        });
    connection.end();
}

    return api;
};