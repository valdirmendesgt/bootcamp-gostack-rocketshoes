<h1 align="center">
    <strong>Aplicação Front-end Rocketshoes</strong>
    <br />
    <br />
  <img alt="Rocketshoes" title="Rocketshoes" src=".github/logo.svg" width="300px" />
</h1>

## Sobre o projeto

O Rocketshoes é um projeto front-end desenvolvido durante as aulas de React ministradas no bootcamp GoStack da Rocketseat.

É uma aplicação front-end desenvolvida com React, consumindo uma API fake e utiliza da arquitetura Flux (Saga + Redux).

## Para testar o projeto

Faça o clone do repositório
```bash
git clone git@github.com:valdirmendesgt/bootcamp-gostack-rocketshoes.git
```

### Back-end - API Fake 

Para que a aplicação possa ser testada, precisamos que a nossa API fake esteja funcionando. 
Para isso, deixe o servidor da API em um terminal da seguinte maneira:

```bash
npx json-server server.json -p 3333 -w
```

### Rodar a aplicação

#### Dependências
Para execução do projeto, instale as dependências do projeto com o comando abaixo:

```bash
yarn install
```

Agora é só rodar a aplicação:

```bash
yarn start
```

## :page_facing_up: Licença de uso

Esse projeto está sob a licença MIT detalhada no arquivo [LICENSE](LICENSE.md).