<!-- PROJECT SHIELDS -->

[![npm](https://img.shields.io/npm/v/react-native-template-rocketseat-basic.svg?label=npm%20package)](https://www.npmjs.com/package/react-native-template-rocketseat-basic)
[![npm](https://img.shields.io/npm/dt/react-native-template-rocketseat-basic.svg)](https://www.npmjs.com/package/react-native-template-rocketseat-basic)
[![GitHub issues](https://img.shields.io/github/issues-raw/rocketseat/react-native-template-rocketseat-basic.svg)](https://github.com/Rocketseat/react-native-template-rocketseat-basic/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/rocketseat/react-native-template-rocketseat-basic.svg)](https://github.com/Rocketseat/react-native-template-rocketseat-basic/commits/master)
[![NPM](https://img.shields.io/npm/l/react-native-template-rocketseat-basic.svg)](https://choosealicense.com/licenses/mit)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://rocketseat.com.br">
    <img src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" alt="Logo" style="width: 64px; height: 64px;">
  </a>

  <h3 align="center">Basic Start Template</h3>
</p>

<!-- Index -->

## Index

- [Index](#index)
- [O que é isso?](#o-que-é-isso)
  - [O que tem dentro?](#o-que-tem-dentro)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instalação)
  - [Edição](#edição)
  - [Publicação](#publicação)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Valeu](#valeu)

<!-- ABOUT THE PROJECT -->

## O que é isso?

Eu costumo perder muito tempo iniciando um novo projeto React Native e configurando o ambiente de testes, gerenciador de estados, montando a estrutura de pastas e etc. Com isso eu resolvi desenvolver esse template que vai me ajudar a poupar bastante tempo sempre que eu resolver iniciar um novo projeto. 😌

### O que tem dentro?

Aqui vai uma lista de tudo o que foi instalado nesse template:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [Redux](https://redux.js.org/) - Gerenciador de estados para aplicações Javascript;
- [Redux Toolkit](https://redux-toolkit.js.org/) - Toolkit oficial para o desenvolvimento eficiente de aplicações usando Redux;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade da comunidade do React Native de uma navegação de forma fácil de se usar e escrita toda em JavaScript;
- [Styled Components](https://styled-components.com/) - Biblioteca para componentização de componentes visuais;
- [Jest](https://jestjs.io/) - Framework de testes Javascript;
- [Testing Library](https://testing-library.com/) - Utilitários de teste simples e completos que incentivam boas práticas de teste;
- [MSW](https://mswjs.io/) - Biblioteca de simulação de API REST / GraphQL perfeita para navegador e Node.js.;
- [Typescript](https://www.typescriptlang.org/) - Linguagem de programação fortemente digitada que se baseia no JavaScript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) - Este pacote adiciona suporte Typescript ao styleguide do Airbnb;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Regras de linting para os React Hooks;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
basic-start
├── scripts/
│   │── clean_android.sh
│   └── clean_ios.sh
├── src/
│   ├── assets/
│   │   └── fonts/
│   │       └── index.ts
│   ├── components/
│   │   │── Counter/
│   │   │   │── index.tsx
│   │   │   │── styles.ts
│   │   │   └── Counter.test.tsx
│   │   │── GithubMessage/
│   │   │   │── index.tsx
│   │   │   │── styles.ts
│   │   │   └── GithubMessage.test.tsx
│   │   │── HelloWorld/
│   │   │   │── index.tsx
│   │   │   │── styles.ts
│   │   │   └── HelloWorld.test.tsx
│   │   └── index.ts
│   ├── mocks/
│   │   │── ***.mock.ts
│   │   │── handlers.ts
│   │   └── server.ts
│   ├── redux/
│   │   │── Counter/
│   │   │   │── counter.actions.ts
│   │   │   │── counter.api.ts
│   │   │   │── counter.slice.ts
│   │   │   │── counter.test.ts
│   │   │   └── types.ts
│   │   │── hooks.ts
│   │   └── store.ts
│   ├── routes/
│   │   └── index.tsx
│   ├── screens/
│   │   │── Home/
│   │   │   │── index.tsx
│   │   │   │── styles.ts
│   │   │   └── Home.test.tsx
│   │   └── index.ts
│   ├── services/
│   │   └── api.ts
│   ├── styles/
│   │   │── themes/
│   │   │   │── dark.ts
│   │   │   └── light.ts
│   │   └── styled.d.ts
│   ├── utils/
│   │   │── enums/
│   │   │   └── e-screens.ts
│   │   └── test.utils.tsx
│   ├── App.tsx
│   └── types.ts
├── .buckconfig
├── .eslintignore
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .prettierrc
├── .watchmanconfig
├── app.json
├── assetsTransformer.js
├── babel.config.js
├── index.js
├── jest.config.js
├── jest.setup.js
├── metro.config.js
├── package.json
├── react-native.config.js
├── README.md
├── SECURITY.md
├── tsconfig.json
└── typings.d.ts
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
npx react-native init MyApp --template https://github.com/victorsoares96/react-native-template-basic-start
```

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron para ser usado na aplicação;

  - **images** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação, esse diretório pode ser renomeado para `assets` e dentro de `assets` criar um novo diretório para guardar somente as imagens, assim é possível ter um diretório para guardar todo tipo de arquivo, e não apenas imagens;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Main** - Diretório exemplo de uma página cujo nome é **Main**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.js** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigators disponibilizados na biblioteca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `@babel/runtime`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do JavaScript no Editor, ele é o responsável por ativar o Auto Complete de códigos JavaScript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

### Publicação

Para publicar um template como esse, o processo é bastante simples e rápido.

1. Crie uma conta no [site do NPM](https://www.npmjs.com/);

2. Com a conta criada execute o comando abaixo e insira suas credenciais;

```sh
npm login
```

3. Basta abrir o arquivo `package.json` e modificar as informações de acordo com o seu template, mas as informações mais importantes são duas, o `name` e o `version`, que são os únicos que tem restrições, seguem abaixo as restrições:

   1. O `name` sempre deve começar com o prefixo `react-native-template-` seguido do nome do seu template;
   2. O template deve ser publicado em uma conta pessoal, pois quando publicado em uma **Organization** é acrescentado o prefixo `@<nome_da_organization>` no nome do pacote;
   3. O `name` deve ser único, não podendo ser igual ao de um template já publicado;
   4. A `version` deve ser atualizada a cada publicação, se o template está na versão **0.0.1** e é preciso publicar uma atualização no mesmo, a `version` deve ser diferente e superior a versão atual, por exemplo, **0.0.2**;

4. Após configurar corretamente o `package.json` basta executar no terminal/prompt o comando `npm publish`;

5. Com a publicação finalizada o template deve ficar disponível através do link `https://www.npmjs.com/package/react-native-template-<nome_do_template>`.

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Valeu

Para desenvolver este readme eu me baseei no que está neste [projeto](https://github.com/Rocketseat/react-native-template-rocketseat-basic).
