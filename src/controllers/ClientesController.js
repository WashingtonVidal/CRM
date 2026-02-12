const ClientesService = require("../services/ClientesService");


class ClientesController {
    create(req, res) {

        console.log("Dados recebidos:", req.body);

        const clienteCriado = ClientesService.create(req.body);

        return res.status(201).json({
            mensagem: "Cliente criado com sucesso!",
            dados: clienteCriado
        });
    }

    list(req,res){
        const clientes = ClientesService.findAll();

        return res.status(200).json(clientes);
    }   
}

module.exports = new ClientesController();