const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro) => {
    if(erro){
        console.log('Erro na conexão com o banco de dados: ' + erro)
    }else{
        console.log('Conexão com o banco de dados estabelecida com sucesso!')
        Tabelas.init(conexao)
        const app = customExpress()
        
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})