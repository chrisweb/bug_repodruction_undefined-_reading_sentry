# reproduction three-fiber - sentry - nextjs bug

## setup

```shell
npx create-next-app@latest
npx @sentry/wizard
npm i @react-three/fiber
```

## needs to be run in "production" mode

```shell
npm run build

npm run start
```

(error not present in dev mode)