# reproduction three-fiber - sentry - nextjs bug

## update

> [!IMPORTANT]  
> A while after posting about this bug I found a related [sentry-javascript-bundler-plugins: issue #530](https://github.com/getsentry/sentry-javascript-bundler-plugins/issues/530) in another sentry repository, there is a suggestion to add configuration options to exclude three fiber when the **reactComponentAnnotation** feature is enabled, this would fix the problem but as of now the ticket is still open
>
> I added a workaround to [my issue](https://github.com/getsentry/sentry-javascript/issues/13413#issuecomment-2295014148), which is similar to the one in [sentry-javascript-bundler-plugins: issue #530](https://github.com/getsentry/sentry-javascript-bundler-plugins/issues/530), the difference when using Next.js is that the disabling of reactComponentAnnotation is done in the next.config.mjs file:
>  
> ```js
> export default withSentryConfig(nextConfig, {
>     // Automatically annotate React components to show their full name in breadcrumbs and session replay
>     reactComponentAnnotation: {
>         enabled: false,
>     },
> });
> ```


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