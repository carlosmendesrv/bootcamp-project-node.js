<h1 align="center">
  <img src="./src/assets/rocketseat-header.png">
</h1>
<h2 align="center">
Primeiro projeto com Node.JS
</h2>

## ꠵ Indice
- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-Tecnologias-utilizadas)
- [Como baixar nosso projeto](#-Como-baixar-nosso-projeto)
- [Rotas da aplicação](#-rotas)

## 🔖 Sobre
Esse projeto de backend em **Node.JS** foi elaborado pela **ROCKETSEAT** dentro do curso de **Bootcamp** com intuito de testar as habilidade obtidas durante modulo de **Node.JS**.


## ☕️ Desafio
Essa será uma aplicação  que deve armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.

---

## 🚀 Tecnologias utilizadas
O projeto foi desenvolvido usando as seguintes tecnologia abaixo.

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)

---

## 📦 Como baixar nosso projeto

``` bash
#Clonar Repositório
$ git clone https://github.com/carlosmendesrv/bootcamp-project-node.js.git

#Acessar Diretório
cd bootcamp-project-node

#instalar as dependências
yarn install

#Inicinado aplicação
yarn dev:server
```

## 🤖 Rotas

### Criando uma transação
Rota: http://localhost:3333/transactions

Envie uma requisição do tipo POST no formato JSON para rota com os seguintes parametros abaixo, o tipo pode ser definido como entrada(income) e saida(outcome).

```js
{
	"title" : "Freela",        #Descrição da transação
	"value" : 2900,            #Valor R$
	"type" : "income"          #entrada (income) / saida (outcome).
}
```
### Listando Transações
Listando as transações realizadas e o balanço das mesma com metodo GET.

```js
{
  "transactions": [
    {
      "id": "97cc972e-b82c-4aa9-ae6e-81599a28b5d8",
      "title": "Internet",
      "value": 190,
      "type": "outcome"
    },
    {
      "id": "54d5712d-3785-434d-bc9c-d6a73643085c",
      "title": "Freela",
      "value": 2900,
      "type": "income"
    }
  ],
  "balance": {
    "income": 2900,
    "outcome": 190,
    "total": 2710
  }
}
```


---
Desenvolvido por 👨🏽‍💻 Carlos Augusto M. Neves com muito ❤️  e  ☕️
