class ClientesController {
    create(req, res) {
        console.log("Dados recebidos:", req.body);

        return res.status(201).json({
            mensagem: "Cliente recebido com sucesso!",
            dados: req.body
        });
    }
}

module.exports = new ClientesController();