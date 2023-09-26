# Rest API

![GitHub repo size](https://img.shields.io/github/repo-size/pedrocmoreira/rest_api?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/pedrocmoreira/rest_api?style=for-the-badge)

> API simples de cadastro de transações financeiras, feita utilizando Typescript e Knex. 


# Requisitos Funcionais 

- [x] O usuário deve poder criar uma nova transação;
- [ ] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas as transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

# Regras de negócio

- [x] A transação pode ser do tipo crédito que somará ao valor total ou débto subtrairá;
- [x] Deve ser possível indentificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações que ele criou;


# Para executar

  - Para fazer a execução deste backend, primeiramente adicione um .env no diretório root seguindo o .env.example
  - Depois execute o comando `npm run knex migrate:latest`, para executar todas as migrations