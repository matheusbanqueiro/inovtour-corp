<p align="center">
<img src="https://raw.githubusercontent.com/govinda777/inovtour-corp/main/public/img/logo.png" height="150">
</p>
<h1 align="center">
Inovtour Corp
</h1>
<p align="center">
A corporate travel management platform.
<p>

<p align="center">
<a href="https://inovtour-corp.vercel.app/"><b>Live Demo!</b></a>
</p>
<p align="center">
 <a href="https://inovtour-corp.docs">📖 Documentation</a> | <a href="https://inovtour-corp.docs/intro/">🚀 Getting Started</a> | <a href="https://www.jsdelivr.com/package/npm/inovtour-corp">🌐 CDN</a> | <a href="https://discord.gg/AgrbSrBer3" title="Discord invite">🙌 Join Us</a>
</p>
<p align="center">
<a href="./README.pt-BR.md">Português (BR)</a>
</p>
<p align="center">
Try Live Editor previews of future releases: <a href="https://develop.inovtour-corp.live/" title="Try the inovtour-corp version from the develop branch.">Develop</a> | <a href="https://next.inovtour-corp.live/" title="Try the inovtour-corp version from the next branch.">Next</a>
</p>

<br>
<br>

[![NPM](https://img.shields.io/npm/v/inovtour-corp)](https://www.npmjs.com/package/inovtour-corp)
[![npm minified gzipped bundle size](https://img.shields.io/bundlephobia/minzip/inovtour-corp)](https://bundlephobia.com/package/inovtour-corp)
[![Coverage Status](https://codecov.io/github/govinda777/inovtour-corp/branch/develop/graph/badge.svg)](https://app.codecov.io/github/govinda777/inovtour-corp/tree/develop)
[![CDN Status](https://img.shields.io/jsdelivr/npm/hm/inovtour-corp)](https://www.jsdelivr.com/package/npm/inovtour-corp)
[![NPM Downloads](https://img.shields.io/npm/dm/inovtour-corp)](https://www.npmjs.com/package/inovtour-corp)
[![Join our Discord!](https://img.shields.io/static/v1?message=join%20chat&color=9cf&logo=discord&label=discord)](https://discord.gg/AgrbSrBer3)
[![Twitter Follow](https://img.shields.io/badge/Social-inovtour__-blue?style=social&logo=X)](https://twitter.com/inovtour_)

<img src="./public/img/header.png" alt="" />

:trophy: **Inovtour Corp won the [Corporate Travel Awards (2023)](https://awards.com/corporate-travel/2023) in the category "Best Travel Management Platform"!!!**

**Thanks to all involved, people committing pull requests, people answering questions! 🙏**

## Table of Content

<details>
<summary>Expand contents</summary>

- [About](#about)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

</details>

## About

Inovtour Corp is a comprehensive travel management platform designed for corporate travel agencies. It streamlines travel booking, expense management, and itinerary planning, making corporate travel efficient and hassle-free.

> Efficient travel management saves time and resources.

With Inovtour Corp, you can manage travel bookings, monitor travel expenses, and provide seamless travel experiences to your clients. The platform integrates with various services to offer a one-stop solution for all corporate travel needs.

## Setup

### Prerequisites

- Node.js (version 14 or higher)
- Yarn

### Installation

1 - Link to vercel

```bash
npx vercel link
```

2 - Pull the `.env` variables to your local system.

```bash
npx vercel env pull
```

3 - Install dependencies

```bash
yarn install
```

4 - Configure sanity

```bash
npm install -g @sanity/cli
```

5 - Login to sanity

```
sanity login
```

6 - Import demo content

```bash
npm run sanity-import
```

7 - Run the project

```bash
yarn dev
```

8 - Run CMS Sanity

```bash
npm run sanity
```

9 - Deploy to Vercel

```bash
npx vercel --prod
```

## Usage

### Features 

* Travel Booking: Book flights, hotels, and car rentals.
* Expense Management: Track and manage travel expenses.
* Itinerary Planning: Create and share detailed travel itineraries.
* Real-time Updates: Get updates on flight status, hotel bookings, and more.

### Integrations
Inovtour Corp integrates with several third-party services to provide a seamless experience. Check out the Integrations page for more details.

## Documentação da Arquitetura do Projeto Inovtour-Corp

## Estrutura do Projeto Inovtour-Corp

### Diretório Raiz

```
inovtour-corp/
├── .vscode/
│   └── settings.json
├── app/
│   ├── (sanity)/
│   │   ├── layout.tsx
│   │   └── studio/
│   │       └── [[...index]]/
│   │           ├── studio.tsx
│   │           ├── style.css
│   │           └── page.tsx
│   ├── (website)/
│   │   ├── home.js
│   │   ├── home2.js
│   │   ├── page.js
│   │   ├── layout.tsx
│   │   ├── contact/
│   │   │   ├── page.js
│   │   │   └── contact.js
│   │   └── post/
│   │       ├── [slug]/
│   │       │   ├── page.js
│   │       │   └── opengraph-todo.js
│   ├── favicon.ico
│   ├── layout.tsx
│   └── providers.jsx
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── lib/
│   └── sanity/
│       ├── client.ts
│       ├── config.ts
│       ├── groq.js
│       ├── image.js
│       ├── plugins/
│       │   ├── settings.tsx
│       │   ├── portabletext.js
│       │   └── previews/
│       │       ├── BlogPreview.jsx
│       │       ├── PagePreview.jsx
│       │       └── IframePreview.css
│       ├── schemas/
│       │   ├── author.js
│       │   ├── blockContent.js
│       │   ├── category.js
│       │   ├── post.js
│       │   ├── settings.js
│       │   ├── index.ts
│       │   └── previews/
│       │       ├── table.jsx
│       │       └── iframe.jsx
│       └── data/
│           └── production.tar.gz
├── public/
│   ├── fonts/
│   │   ├── Inter-Bold.otf
│   │   └── Inter-Regular.otf
│   ├── img/
│       ├── logo.svg
│       ├── solutions/
│           ├── solutions_airline_tickets.png
│           ├── solutions_promotional_packages.png
│           ├── solutions_call_to_action.png
│           ├── solutions_accommodation.png
│           ├── solutions_banner.png
│           └── index.js
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── utils/
│   ├── fetcher.js
│   └── constants.js
├── .env.local.example
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── LICENSE.md
├── README.md
├── next-sitemap.config.js
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── sanity.cli.ts
├── sanity.config.ts
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

### Descrição dos Arquivos e Diretórios

#### Diretório `.vscode`
- **settings.json**: Configurações do editor VSCode.

#### Diretório `app`
- **(sanity)**: Contém layouts e páginas relacionadas ao Sanity CMS.
  - **layout.tsx**: Layout para as páginas do Sanity.
  - **studio/[[...index]]**: Páginas e estilos do estúdio Sanity.
    - **studio.tsx**: Componente principal do estúdio.
    - **style.css**: Estilos específicos do estúdio.
    - **page.tsx**: Página principal do estúdio.
- **(website)**: Contém layouts e páginas relacionadas ao site.
  - **home.js, home2.js, page.js**: Páginas principais do site.
  - **layout.tsx**: Layout para as páginas do site.
  - **contact/**: Páginas de contato.
    - **page.js, contact.js**: Página e componentes de contato.
  - **post/[slug]/**: Páginas de postagens.
    - **page.js, opengraph-todo.js**: Página de postagem e configuração do Open Graph.
- **favicon.ico**: Ícone do site.
- **providers.jsx**: Provedores de contexto para a aplicação.

#### Diretório `components`
- **Header.jsx, Footer.jsx**: Componentes reutilizáveis de cabeçalho e rodapé.

#### Diretório `lib/sanity`
- **client.ts, config.ts**: Configurações do cliente Sanity.
- **groq.js, image.js**: Utilitários e configurações do Sanity.
- **plugins/**: Plugins personalizados para o Sanity.
  - **settings.tsx, portabletext.js**: Configurações e plugins de texto.
  - **previews/**: Pré-visualizações de conteúdos.
    - **BlogPreview.jsx, PagePreview.jsx, IframePreview.css**: Pré-visualizações de blogs e páginas.
- **schemas/**: Esquemas de dados do Sanity.
  - **author.js, blockContent.js, category.js, post.js, settings.js, index.ts**: Esquemas de conteúdo.
  - **previews/**: Pré-visualizações específicas de esquemas.
    - **table.jsx, iframe.jsx**: Pré-visualizações de tabelas e iframes.
- **data/production.tar.gz**: Dados de produção do Sanity.

#### Diretório `public`
- **fonts/**: Fontes utilizadas no site.
  - **Inter-Bold.otf, Inter-Regular.otf**: Fontes Inter.
- **img/**: Imagens utilizadas no site.
  - **logo.svg**: Logotipo do site.
  - **solutions/**: Imagens das soluções oferecidas.
    - **solutions_airline_tickets.png, solutions_promotional_packages.png, solutions_call_to_action.png, solutions_accommodation.png, solutions_banner.png**: Imagens específicas.
    - **index.js**: Script relacionado às imagens.

#### Diretório `styles`
- **globals.css**: Estilos globais da aplicação.
- **Home.module.css**: Estilos específicos para a página inicial.

#### Diretório `utils`
- **fetcher.js**: Utilitário para realizar fetch de dados.
- **constants.js**: Constantes usadas na aplicação.

### Arquivos de Configuração

- **`.env.local.example`**: Exemplo de variáveis de ambiente.
- **`.eslintignore`**: Arquivos e diretórios a serem ignorados pelo ESLint.
- **`.eslintrc`**: Configurações do ESLint.
- **`.gitignore`**: Arquivos e diretórios a serem ignorados pelo Git.
- **`.prettierrc`**: Configurações do Prettier.
- **`LICENSE.md`**: Licença do projeto.
- **`README.md`**: Documentação do projeto.
- **`next-sitemap.config.js`**: Configurações do sitemap.
- **`next.config.js`**: Configurações do Next.js.
- **`package.json`**: Dependências e scripts do projeto.
- **`pnpm-lock.yaml`**: Lockfile do pnpm.
- **`postcss.config.js`**: Configurações do PostCSS.
- **`sanity.cli.ts`**: Configurações do CLI do Sanity.
- **`sanity.config.ts`**: Configurações do Sanity.
- **`tailwind.config.js`**: Configurações do Tailwind CSS.
- **`tsconfig.json`**: Configurações do TypeScript.
- **`yarn.lock`**: Lockfile do Yarn.

### Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web.
- **Sanity**: Plataforma de gerenciamento de conteúdo.
- **Tailwind CSS**: Framework de CSS utilitário.
- **TypeScript**: Superset de JavaScript para tipagem estática.
- **Vercel**: Plataforma de deploy e hospedagem.

## Arquivos de Configuração

Os arquivos de configuração são essenciais para definir o comportamento e a integração da aplicação. Aqui estão os principais arquivos de configuração no projeto Inovtour-Corp e o que você pode fazer com eles:

### .env.local.example
- **Descrição**: Modelo para as variáveis de ambiente.
- **Utilização**: Crie um arquivo `.env.local` a partir deste modelo e configure suas variáveis de ambiente, como chaves de API e URLs de serviços.

### .eslintignore
- **Descrição**: Arquivos e diretórios a serem ignorados pelo ESLint.
- **Utilização**: Adicione caminhos de arquivos ou diretórios que não precisam de linting.

### .eslintrc
- **Descrição**: Configurações do ESLint.
- **Utilização**: Defina regras de linting e plugins para manter a consistência do código.

### .gitignore
- **Descrição**: Arquivos e diretórios a serem ignorados pelo Git.
- **Utilização**: Especifique arquivos que não devem ser versionados, como `node_modules` e arquivos de configuração locais.

### .prettierrc
- **Descrição**: Configurações do Prettier.
- **Utilização**: Defina regras de formatação de código, como tamanho de tabulação e aspas.

### next-sitemap.config.js
- **Descrição**: Configurações do sitemap para SEO.
- **Utilização**: Configure a geração automática de sitemaps para melhorar a indexação pelos motores de busca.

### next.config.js
- **Descrição**: Configurações gerais do Next.js.
- **Utilização**: Ajuste comportamentos específicos do Next.js, como redirecionamentos e otimizações de build.

### postcss.config.js
- **Descrição**: Configurações do PostCSS.
- **Utilização**: Configure plugins de processamento de CSS, como autoprefixer e cssnano.

### sanity.cli.ts
- **Descrição**: Configurações do CLI do Sanity.
- **Utilização**: Configure comandos e scripts específicos do Sanity para gerenciamento de conteúdo.

### sanity.config.ts
- **Descrição**: Configurações gerais do Sanity.
- **Utilização**: Defina esquemas de conteúdo e integrações com o backend do Sanity.

### tailwind.config.js
- **Descrição**: Configurações do Tailwind CSS.
- **Utilização**: Personalize o framework de CSS utilitário, como cores, espaçamentos e breakpoints.

### tsconfig.json
- **Descrição**: Configurações do TypeScript.
- **Utilização**: Configure o compilador TypeScript, incluindo caminhos de módulo e opções de compilação.

### package.json
- **Descrição**: Dependências e scripts do projeto.
- **Utilização**: Adicione dependências, scripts de execução e outras informações do projeto.

### yarn.lock e pnpm-lock.yaml
- **Descrição**: Lockfiles para gerenciadores de pacotes.
- **Utilização**: Garantem que as dependências sejam instaladas de maneira consistente.

### Passos para Configuração e Utilização

1. **Criar Variáveis de Ambiente**:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Personalizar ESLint e Prettier**:
   - Edite `.eslintrc` e `.prettierrc` conforme suas preferências de linting e formatação.

3. **Configurar Next.js**:
   - Ajuste `next.config.js` para personalizar o comportamento da aplicação Next.js.

4. **Configurar Tailwind CSS**:
   - Modifique `tailwind.config.js` para personalizar o design do seu projeto.

5. **Configurar Sanity**:
   - Edite `sanity.cli.ts` e `sanity.config.ts` para configurar o gerenciamento de conteúdo com Sanity.

6. **Gerenciar Dependências**:
   - Use `yarn.lock` ou `pnpm-lock.yaml` para garantir a instalação consistente de pacotes.

## Frameworks de CSS Utilizados no Projeto

### Tailwind CSS

**Descrição**:
Tailwind CSS é um framework utilitário para CSS que permite construir interfaces personalizadas de forma rápida e eficiente.

**Funcionalidade**:
- **Utilitários**: Utiliza classes utilitárias para estilizar elementos diretamente no HTML.
- **Customização**: Altamente configurável através do arquivo `tailwind.config.js`.
- **Produtividade**: Aumenta a velocidade de desenvolvimento ao evitar a criação de estilos customizados repetitivos.

**Exemplo de Uso**:
```html
<div class="bg-blue-500 text-white p-4">
  <h1 class="text-2xl">Olá, Mundo!</h1>
</div>
```

### PostCSS

**Descrição**:
PostCSS é uma ferramenta de transformação de CSS que utiliza plugins para processar e otimizar seu código CSS.

**Funcionalidade**:
- **Plugins**: Utilize plugins como `autoprefixer` e `cssnano` para adicionar prefixos automáticos e minificar o CSS.
- **Configuração**: Configurado através do arquivo `postcss.config.js`.

**Exemplo de Uso**:
```javascript
module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {},
  },
}
```

### Como Utilizá-los no Projeto

1. **Configurar Tailwind**:
   - Personalize as configurações em `tailwind.config.js` para ajustar o design conforme necessário.

2. **Adicionar Plugins PostCSS**:
   - Configure plugins de PostCSS em `postcss.config.js` para melhorar e otimizar o seu CSS.

### Benefícios

- **Reutilização**: Componentes e utilitários reutilizáveis.
- **Consistência**: Estilos consistentes em todo o projeto.
- **Eficiência**: Desenvolvimento mais rápido e eficiente.

### Recursos

- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do PostCSS](https://postcss.org/)

Esses frameworks ajudam a manter o código CSS organizado, eficiente e fácil de manter, proporcionando uma base sólida para o desenvolvimento de interfaces de usuário modernas e responsivas.



## Links

- [Live Demo](https://inovtour-corp.vercel.app/)
- [Documentation](https://inovtour-corp.docs)
- [Figma Site](https://www.figma.com/design/pjuPkngqXmwDqPl5W3UU1y/Inovtour?node-id=94-434&t=gm8OsOSOTa1JeJKn-1)
- [Figma Estudo](https://www.figma.com/file/eQNyCKBenlZYG1sXA03t5n/Inovtour---desk-research?type=whiteboard&node-id=0%3A1&t=HJ4fZZLiCpHuahNk-1)
- [Blue Ocean](https://docs.google.com/spreadsheets/d/1IE6fQinP2gdQYV3Ib0WicAfLGkd9JVj7Hq_TwJNW3BM/edit?usp=sharing)
- [Miro](https://miro.com/app/board/uXjVKRVfwCk=/)

## Contributing
We welcome contributions from the community. To get started, check out our Contributing Guide.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

