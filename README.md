

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

