const clientes =[];

class ClientesService {
    create(cliente) {
        clientes.push(cliente);
        return cliente;
    }
    findAll(){
        return clientes;
    }
}

module.exports = new ClientesService();