# Parseamento do Código OAuth2

O projeto em questão tem como propósito realizar o parseamento do `code` retornado na URL, pelo Cognito, quando há integração entre um App Client com um Identity Provider.

## Sobre o Código OAuth2

O código OAuth2 é um token no formato `?code=XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX`, que é retornado pelo Cognito, na URL de uma aplicação customizada e cadastrada no App Client, a partir do momento em que há autenticação de usuários por meio de um Identity Provider, como Google, Apple, Amazon e outros.

O endpoint `/oauth2/authorize` é um ponto de redirecionamento que suporta dois destinos de redirecionamento. Se você incluir um parâmetro `identity_provider` ou `idp_identifier` na URL, ele redireciona seu usuário para a página de login desse provedor de identidade (IdP). Caso contrário, ele redireciona para o endpoint de Login com os mesmos parâmetros de URL que você incluiu em sua solicitação.

O endpoint de autorização redireciona para a UI hospedada ou para uma página de login do IdP. O destino de uma sessão de usuário neste ponto é uma página da web com a qual seu usuário deve interagir diretamente em seu navegador.


## Documentação da API

A API em questão utiliza o Node.js como ambiente de execução em uma máquina, para construção do back-end, e o Express.js como biblioteca e estrutura para o roteamento da aplicação.

#### Captura o token OAuth2 e realiza seu parse

```http
  GET /
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `code` | `string` | **Obrigatório**. Token na estrutura XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX |

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`COGNITO_TOKEN_URI="URL customizada do User Pool do Cognito + /oauth2/authorize"`

`COGNITO_CLIENT_ID="ID do App Client do User Pool"`

`COGNITO_CLIENT_SECRET="Secret do App Client do User Pool"`

`COGNITO_CALLBACK_URI="URL da sua aplicação que está cadastrada no App Client"`

## Execução

Para fazer a execução desse projeto rode

```bash
  npm run test
```


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de gustavomainchein@outlook.com

## Histórico de mudanças

- 0.1.0
  - Primeira versão da aplicação

## Autores

Gustavo Mainchein – [@gugamainchein](https://www.instagram.com/gugamainchein) – gustavomainchein@outlook.com

[Veja mais sobre mim](https://github.com/gugamainchein)

## Faça sua contribuição

1. Realize o fork do projeto (<https://github.com/gugamainchein/cognito-parse-oauth-code/fork>)
2. Crie a nova feature em uma branch (`git checkout -b feature/fooBar`)
3. Faça o commit das suas mudanças (`git commit -am 'Add some fooBar'`)
4. Realize o push para a branch (`git push origin feature/fooBar`)
5. Crie um novo pull request

