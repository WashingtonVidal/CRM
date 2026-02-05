const clientes =[];

class ClientesService {
    create(cliente) {
        clientes.push(cliente);
        return cliente;
    }
}

module.exports = new ClientesService();