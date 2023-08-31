# Desafio | Aplicação FullStack

Este projeto Node.js utiliza um serviço de WebSocket e o PostgreSQL como banco de dados, aplicando os princípios SOLID e Clean Architecture como padrão de projeto..

## Abordagem e Soluções

No desenvolvimento desse sistema busquei aplicar boas práticas de desenvolvimento visando criar um código de qualidade e facilmente escalável.
- **Arquitetura e Princípios de Design:** Optei por seguir os princípios SOLID e o padrão de arquitetura Clean Architecture para garantir a separação de responsabilidades e a escalabilidade do código.
- **Design Patterns :** Utilizei o padrão Factory para realizar a inversão de dependência e o padrão Singleton no helper de conexão com o banco de dados e com o WebSocket. Isso garante que essas classes tenham apenas uma instância e facilita o gerenciamento de recursos.
- **Prisma ORM:** Escolhi incorporar o Prisma ORM para otimizar o acesso ao banco de dados e agilizar o processo de desenvolvimento.
- **Atualização em Tempo Real:** Para atender aos requisitos de atualização em tempo real, implementei um serviço de WebServer que roda na porta `http://localhost:3000`.
- **Documentação:** Utilizei o Swagger para criar a documentação das rotas da API, acessível em `http://localhost:8888/api-docs/`, e também adicionei o MER na pasta "docs" na raiz do projeto.

## Desafios

Durante o desenvolvimento, enfrentei alguns desafios:
- **Frontend:** Tive dificuldades na parte de frontend, especialmente na atualização dos dados recebidos via WebSocket.
- **Reaproveitamento do Express:** Tive dificuldade em reaproveitar a instância do Express, como o tempo estava curto não consegui implementar da melhor maneira possível.

## Executando a Aplicação

**1 - Banco de dados:** Certifique-se de ter o PostgreSQL instalado em sua máquina.
<br> **2 - NodeJs:** Certifique-se de ter o NodeJs instalado em sua máquina.
<br> **3 - Env:** Renomeie o arquivo .env.example para .env e configure-o de acordo.
<br> **4 - Instalação de Dependências:** Execute `npm install` para instalar todas as dependências necessárias.
<br> **5 - Migrations e Seed:** Execute `npx prisma migrate dev` para rodar as migrations e a seed do banco de dados.
<br> **6 - Executando o Servidor:** Execute `npm run dev` para iniciar o servidor na porta `http://localhost:8080` e todos os serviços da aplicação.
<br> **7 - Testes:** Para rodar os testes unitários, execute `npm run test:unit`. Para os testes de integração e E2E, execute `npm run test:integration`.
<br> **8 - Interface:** Acesse a página de ranking em `http://localhost:3000/index.html`.
<br> **9 - Prisma Studio:** Execute `npx prisma studio` para ter acesso ao banco de dados na web.

### Inclui Docker e melhorei a utilização da instância do Express na branch feat/add-new-features (Após o prazo estipulado)
**1 - Env:** Renomeie o arquivo .env.example para .env.
<br> **2 - Utilização do Docker:** Faça um checkout para a branch feat/add-new-features `git checkout feat/add-new-features` e execute o comando `docker compose up`.
<br> **3 - Interface:** Acesse a página de ranking em `http://localhost:3000/index.html`.
<br> **4 - Swagger:** Acesse a a documentação em `http://localhost:8080/api-docs/`.

## Rotas

Rota para cadastrar notas de alunos.

- **Método:** POST
- **URL:** `http://localhost:8000/v1/api/students/grades`
- **Corpo da Requisição:**
  ```json
  {
    "note": "Number (Obrigatório)",
    "studentId": "String (Obrigatório)",
  }
