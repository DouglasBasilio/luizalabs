# Tela de Login Luizalabs

- Front End: Tela de login criada utilizando HTML5, CSS3, SASS, Javascript;
- Back End: API criada em Nodejs, que fará a validação do usuário no banco de dados;
- Banco de dados: criei um ambiente em MySql e em MongoDB. A aplicação se conecta ao MongoDB para validação do login.

## Exemplo da aplicação rodando

![](https://i.imgur.com/hk3wPNx.gif)

1 - Caso o servidor não esteja no ar, ao tentar realizar o login, será apresentada uma mensagem de erro no navegador.

2 - Caso o usuário e senha não seja o correto, os campos do formulário serão destacados em vermelho.

3 - Caso o login esteja correto, será direcionado para uma tela de Bem Vindo.

## Instruções

Instalar os seguintes pacotes dentro da pasta back-end:

- npm install express mongoose
- npm install cors

Para rodar o projeto, precisa usar o comando:

- npm run dev

---

Para abrir o Front End, indico abrir no **Vscode** e usar a extensão **live server**.

---

Para o banco de dados mysql, usei o workbench como ID, as queries estão na pasta **Fase 3**.

Para o mongo, criei as tabelas a partir da API feita em **Nodejs**, mas criei um doc mostrando também como posso criar tabela via mongoDB Compass
