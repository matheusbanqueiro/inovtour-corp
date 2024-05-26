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

