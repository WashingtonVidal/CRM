CRM – Sistema de Cadastro de Clientes (Backend)
📘 Visão Geral

Este projeto é o backend de um sistema de CRM (Customer Relationship Management) voltado para pequenos estabelecimentos. O objetivo é fornecer uma ferramenta interna para que donos de negócios (ou funcionários autorizados) possam gerenciar seus clientes de forma organizada e eficiente.

Nesta fase inicial, o foco foi:

Configurar corretamente o ambiente de desenvolvimento;

Estruturar o backend de forma profissional e escalável;

Aplicar na prática conceitos fundamentais de APIs, HTTP e arquitetura em camadas;

Criar uma base técnica sólida para futuras implementações (regras de negócio, banco de dados e autenticação).

🎯 Objetivo do Sistema

O sistema será utilizado internamente pelos estabelecimentos para:

Cadastrar clientes ✔️ (em desenvolvimento)

Listar clientes ⏳ (próxima etapa)

Editar clientes ⏳ (futuro)

Excluir clientes ⏳ (futuro)

Autenticação de usuários ⏳ (futuro)

📌 Importante: O sistema não é para o cliente final se cadastrar, mas sim uma ferramenta de gestão para o estabelecimento.

🛠 Tecnologias Utilizadas (Backend)

Node.js – Ambiente de execução JavaScript no servidor

npm – Gerenciador de pacotes

Express.js – Framework para criação de APIs HTTP

Windows – Sistema operacional de desenvolvimento

VS Code – Editor de código

Motivos da escolha:

Uso de JavaScript no backend (moderno e amplamente adotado);

Grande comunidade e vasta documentação;

Simplicidade para projetos pequenos e médios;

Facilidade de evolução futura (banco de dados, autenticação, frontend, etc.).

📁 Estrutura Atual do Projeto
CRM/
└── backend/
    ├── package.json
    ├── package-lock.json
    ├── index.js
    └── src/
        ├── server.js
        ├── routes/
        │   └── index.js
        ├── controllers/
        │   ├── HomeController.js
        │   └── ClientesController.js
        └── services/
            └── ClientesService.js


📌 A pasta src/ contém todo o código principal da aplicação. Arquivos fora dela são apenas configurações ou dependências.

🚀 Servidor com Express

O arquivo src/server.js é responsável por:

Inicializar o Express;

Configurar middlewares;

Importar e utilizar as rotas;

Iniciar o servidor na porta 3000.

Para rodar o servidor:
node src/server.js


Após isso, acesse no navegador:

http://localhost:3000

🛣 Rotas Implementadas
src/routes/index.js
Método	Rota	Controller	Status
GET	/	HomeController	✔️ OK
POST	/clientes	ClientesController	✔️ Estrutura criada

As rotas funcionam como um "mapa", direcionando cada requisição para o controller correto.

🧠 Arquitetura em Camadas (Adotada)

O fluxo padrão do sistema é:

Requisição → Routes → Controller → Service → (futuro) Database


Responsabilidades:

Routes: definem os caminhos da API;

Controller: recebe a requisição e devolve a resposta;

Service: contém as regras de negócio (em implementação);

Database: etapa futura.

📡 Conceitos Trabalhados
Métodos HTTP

GET → Buscar informações

POST → Criar novos registros

Códigos de Status

200 → Sucesso

201 → Criado com sucesso

404 → Não encontrado

Exemplo de JSON (Cliente)
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "telefone": "1199999-9999"
}

✅ Estado Atual do Projeto

✔ Ambiente configurado corretamente
✔ Node e npm funcionando
✔ Express configurado
✔ Servidor rodando na porta 3000
✔ Estrutura base profissional criada
✔ Rotas separadas em arquivo próprio
✔ Controllers estruturados
✔ Conceitos de HTTP, JSON e arquitetura compreendidos

🔜 Próximos Passos

Finalizar ClientesService.js;

Implementar lógica para criação de clientes em memória (array);

Conectar ClientesController.create ao ClientesService;

Testar criação de clientes (navegador e Postman);

Implementar GET /clientes para listagem;

Introduzir banco de dados posteriormente;

Implementar autenticação no futuro.

📌 Observação Final

Este projeto está sendo desenvolvido como:

Um sistema real com potencial de comercialização;

Um projeto de aprendizado profundo em Node.js, APIs e arquitetura de software;

Uma base profissional que poderá evoluir para um CRM completo.
