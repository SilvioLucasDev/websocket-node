# api-node-websocket
Este projeto Node.js utiliza um serviço de WebSocket e o PostgreSQL como banco de dados. O projeto foi desenvolvido desenvolvido seguindo a metodologia TDD (Test-Driven Development) e aplicando os princípios SOLID, Clean Architecture e Design Patterns para resolver desafios comuns de desenvolvimento.

Para ter uma ideia mais concreta do projeto, você pode assistir a um vídeo demonstrando seu funcionamento [aqui](https://youtu.be/cbDzqG9esYo)
<br><br>
> ## Abordagem e Soluções

No desenvolvimento desse sistema busquei aplicar boas práticas de desenvolvimento visando criar um código de qualidade e facilmente escalável.
- **Arquitetura e Princípios de Design:** Optei por seguir os princípios SOLID e o padrão de arquitetura Clean Architecture para garantir a separação de responsabilidades e a escalabilidade do código.
- **Design Patterns :** Utilizei o padrão Factory para realizar a inversão de dependência e o padrão Singleton no helper de conexão com o banco de dados e com o WebSocket. Isso garante que essas classes tenham apenas uma instância e facilita o gerenciamento de recursos.
- **Prisma ORM:** Escolhi incorporar o Prisma ORM para otimizar o acesso ao banco de dados e agilizar o processo de desenvolvimento.
- **Atualização em Tempo Real:** Para atender aos requisitos de atualização em tempo real, implementei um serviço de WebSocket.
- **Documentação:** Utilizei o Swagger para criar a documentação das rotas da API, e também adicionei o MER na pasta "docs" na raiz do projeto.
<br><br>
> ## Executando a Aplicação

### Com Docker
Certifique-se de ter o Docker instalado em sua máquina.

**1 - Env:** Env:** Renomeie o arquivo .env.example para .env e configure-o de acordo.
<br> **2 - Iniciar Docker:** Na raiz do projeto, execute o comando `docker compose up`

### Sem Docker
Certifique-se de ter o PostgreSQL e o NodeJs instalados em sua máquina.

**1 - Env:** Renomeie o arquivo .env.example para .env e configure-o de acordo.
<br> **2 - Instalação de Dependências:** Execute `npm install` para instalar todas as dependências necessárias.
<br> **3 - Migrations e Seed:** Execute `npx prisma migrate dev` para rodar as migrations e a seed do banco de dados.
<br> **4 - Executando o Servidor:** Execute `npm run dev` para iniciar o servidor na porta especificada no .env e todos os serviços da aplicação.

Após inciar a aplicação você poderá executar essas ações:

**Testes:** Para rodar os testes unitários, execute `npm run test:unit`. Para os testes de integração e E2E, execute `npm run test:integration`.
<br> **Interface:** Acesse a página de ranking em `http://localhost:{WEB_SOCKET_PORT}/index.html`.
<br> **Swagger:** Acesse a a documentação em `http://localhost:{PORT}/api-docs/`.
<br> **Prisma Studio:** Execute `npx prisma studio` para ter acesso ao banco de dados na web.

## Rotas

Rota para cadastrar notas de alunos.

- **Método:** POST
- **URL:** `http://localhost:{PORT}/v1/api/students/grades`
- **Corpo da Requisição:**
  ```json
  {
    "note": "Number (Obrigatório)",
    "studentId": "String (Obrigatório)",
  }
