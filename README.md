## The reprodcution explained

- There is a catch all route at [lang]. In page.tsx we specify that the only possible value for [locale] is 'en' (i.e. only urls beginning with '/en' are allowed).
- In next.config.js we setup one redirect, to redirect '/' to '/home'
- In middleware we setup logic to detect when the URL doesn't have a local in it, and rewrite the URL to include '/en'.
- The expected behaviour here is that when the user visits '/' they should be redirected to '/home' and the middleware should receive the URL '/home'. This is the behaviour we see when run locally or deployed to Vercel.
- The actual behaviour when deployed to Netlify is that the when the user visits '/' they get redirected to the 404 page. We believe this is because the middleware runs first, rewriting the URL to '/en'. But since there's no redirect that has '/en' as the source, the user isn't redirected and because there's no page at '/en' they're presented with the 404 page.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
