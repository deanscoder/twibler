# Twibler
<a href="https://developer.twitter.com/en/docs/twitter-api/early-access" rel="nofollow"><img src="https://camo.githubusercontent.com/7d2e5e053a704be62d3feab1d1918a33ad47878eb32aef24ef6e9d0e2f7df7e4/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e743f75726c3d687474707325334125324625324674776261646765732e676c697463682e6d652532466261646765732532467632" alt="Twitter API v2 badge" data-canonical-src="https://img.shields.io/endpoint?url=https%3A%2F%2Ftwbadges.glitch.me%2Fbadges%2Fv2" style="max-width:100%;"></a>
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)

![Website](https://img.shields.io/website?down_message=off&label=demo%20on%20vercel&style=for-the-badge&up_message=on&url=https%3A%2F%2Ftwibler-tumblr-clone.vercel.app) ![Twitter Follow](https://img.shields.io/twitter/follow/servosalt?label=Follow%20me%20on%20twitter&style=for-the-badge)
## Um client minimalista e elegante para consumir as APIs do Twitter e transformar em mini-blogs.
O projeto consiste em solicitar alguns tweets diretamente do [API oficial do Twitter](https://developer.twitter.com/en/docs) com uma cara Tumbler. *#hurdur #gratidao*

## Tabela de conteúdos

<!--ts-->
  * [Status do Projeto](#em-desenvolvimento)
  * [Ver Demo](#demonstração)
  * [Objetivos](#objetivos)
    * [Para o projeto](#para-o-projeto)
    * [Pessoais](#pessoais)
  * [Instalação](#mãos-na-massa)
    * [Clonando o Repositório](#clone-o-repositório)
    * [Instalando dependencias](#instale-as-dependencias)
    * [Criando/Editando .env](#criando-ou-editando-as-variaveis-de-ambiente)
  * [License - GPLv3](#license)

## Em Desenvolvimento
****

### Destaques

- [x] Chamadas API
- [x] Pesquisar por Tag ou Palavra-chave
- [x] Sistema de curtir posts com double-tap
- [ ] Lightbox para mídias
- [ ] Suporte para videos
  - [x] Pausar/Reproduzir vídeo visível na janela
  - [ ] Congelar Evento de pausar ou reproduzir vídeo ao scrollar a página quando lightbox estiver em funcionamento.
- [ ] Uma lista fixa de usuários para buscar tweets. (Como da sua equipe) 
- [ ] Integrar a um banco de dados para favoritos


### Demonstração
[View Demo | Ver Demo](https://twibler.vercel.app/)

# Objetivos
### Para o Projeto
Buscar atraves da **API os últimos tweets** de determinado usuário, palavra-chave ou hashtag e exibir em uma plataforma muito semelhante aos mini-blogs do Tumblr ─ *que por sinal muito me agrada o design* ─

### Pessoais
Popular meu GitHub. Tenho uma boa experiência com *ECMAscript, Typescript e WebDev*, porém todos os meus projetos foram para clientes e são privados. Então eu decidi realizar pequenos projetos para demonstrar minhas habilidades.


# Instalação - Mãos na massa

## Clone o repositório

Clone esse maravilhoso repositório no seu prompt/terminal de comandos

```bash
git clone https://github.com/servosalt/twibler
```

Caso deseje baixar o zip [Twibler a Tumblr Twitter](https://github.com/servosalt/twibler).

Entre na pasta do repositório clonado.
```bash
cd twibler
```

Você precisa ter em mãos as chaves API fornecidas pelo Twitter Developers [Guia Para obter Chaves API](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api)
Após gerar as chaves de acesso modifique o arquivo `.env` na raiz do projeto.

## Instale as dependencias

```bash
npm install
# ou
yarn install
```

Após concluído, você precisará editar o arquivo `.env` com as credenciais API recebidas do Twitter.

## Criando ou Editando as variaveis de ambiente

Crie um arquivo chamado `.env`, pode ser acessado da pasta raiz do projeto.

```
touch .env
```

Depois insira as chaves que o twitter developers te forneceu com a seguinte estrutura:

```bash
TT_API_ACCESS_KEY="TWITTER ACCESS KEY"
TT_API_TOKEN="TWITTER ACCESS TOKEN"
TT_API_KEY="TWITTER APP KEY"
TT_API_KEY_SECRET="TWITTER APP SECRET"
```

Você deve substituir o conteúdo dentro das aspas { " " } com os seus respectivos valores obtidos no painel API do twitter.

*Se por ventura desejar mudar esses nomes, lembre-se de altera-los no Hangar de Processamento de Dados que fica localizado em*  `./src/HPD/index.ts`

### Vai de play
Com as credenciais inseridas, basta um `yarn dev` ou `npm run dev` e o client estará online no endereço local `http://localhost:3000`


## Tecnologias

As seguintes tecnologias de maior impacto foram usadas;

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Next.js](https://nextjs.org)
- [Twitter API v2](https://github.com/plhery/node-twitter-api-v2)
- [Styled Components](https://styled-components.com)
- [React Infinite Scroll Component](https://github.com/ankeetmaini/react-infinite-scroll-component)

A maneira mais fácil de você realizar o deploy de uma aplicação Next é na [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app) tanto em desenvolvimento como em produção.

# LICENSE
[GNU GPLv3](COPYING)