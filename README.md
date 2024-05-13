This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
ecommerce
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 0b
│  │  │  └─ e456b24d7209194852a10a02bffbc1a7e45d1f
│  │  ├─ 18
│  │  │  └─ 2cd5e1b7b0f624758c8b796521d0e5584cecbe
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 24
│  │  │  └─ 1adbee1e1da7f5687cc7fec3ebd3e0aead60a0
│  │  ├─ 2a
│  │  │  └─ cfd440d7c9eb66792802a8660bf245a4f5a3ab
│  │  ├─ 33
│  │  │  └─ 14e4780a0c8785366fdc3b8499668d163e33f8
│  │  ├─ 46
│  │  │  └─ 78774e6d606704bce1897a5dab960cd798bf66
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 69
│  │  │  ├─ 20335578d0ee0ddd4c8e563f89505f348ece03
│  │  │  └─ bf6ff96a21c7d82690b38d05e94645b6c894dd
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 7b
│  │  │  └─ 2858930495fc4a76d7a51d958bacf2d64eb81f
│  │  ├─ 87
│  │  │  └─ 5c01e819b90038f0c3e4aee2a4dcc2086b0e14
│  │  ├─ 93
│  │  │  └─ 5246e63af63d2869d904eb82a74b8437aea5d6
│  │  ├─ af
│  │  │  └─ 584660be49934983cb55b30a6f18c63f927efa
│  │  ├─ bf
│  │  │  └─ fb357a7122523ec94045523758c4b825b448ef
│  │  ├─ c4
│  │  │  └─ 033664f80d3cb9cb687fb5facbc82aedb302f6
│  │  ├─ d2
│  │  │  └─ f84222734f27b623d1c80dda3561b04d1284af
│  │  ├─ e9
│  │  │  └─ a0944e7b319989ec1a7327d9695247c5bd1a41
│  │  ├─ fd
│  │  │  └─ 3dbb571a12a1c3baf000db049e141c888d05a8
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ b1.jpg
│  ├─ b2.jpg
│  ├─ b3.jpg
│  ├─ b4.jpg
│  ├─ b5.png
│  ├─ b6.png
│  ├─ b7.png
│  ├─ b8.png
│  ├─ banner.jpg
│  ├─ banner1.jpg
│  ├─ banner2.jpg
│  ├─ banner3.jpg
│  ├─ banner4.jpg
│  ├─ banner5.jpg
│  ├─ hero.png
│  ├─ next.svg
│  ├─ placeholder.jpg
│  ├─ prod1.jpg
│  └─ vercel.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ admin
│  │  │  ├─ dashboard
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  └─ products
│  │  │     └─ page.tsx
│  │  ├─ api
│  │  │  ├─ add_product
│  │  │  │  └─ route.ts
│  │  │  ├─ auth
│  │  │  │  └─ [...nextauth]
│  │  │  │     └─ route.ts
│  │  │  ├─ delete_product
│  │  │  │  └─ [id]
│  │  │  │     └─ route.ts
│  │  │  ├─ edit_product
│  │  │  │  └─ [id]
│  │  │  │     └─ route.ts
│  │  │  ├─ get_products
│  │  │  │  └─ route.ts
│  │  │  └─ uploadthing
│  │  │     ├─ core.ts
│  │  │     └─ route.ts
│  │  ├─ App.tsx
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ admin-panel
│  │  │  ├─ AuthProvider.tsx
│  │  │  ├─ Loader.tsx
│  │  │  ├─ Login.tsx
│  │  │  ├─ Popup.tsx
│  │  │  ├─ ProductForm.tsx
│  │  │  ├─ ProductRow.tsx
│  │  │  └─ Sidebar.tsx
│  │  └─ frontend
│  │     ├─ Banner.tsx
│  │     ├─ Cart.tsx
│  │     ├─ CartProduct.tsx
│  │     ├─ Feature.tsx
│  │     ├─ FeatureCard.tsx
│  │     ├─ Footer.tsx
│  │     ├─ Hero.tsx
│  │     ├─ Navbar.tsx
│  │     ├─ ProductCard.tsx
│  │     └─ TrendingProducts.tsx
│  ├─ libs
│  │  ├─ models
│  │  │  └─ Product.ts
│  │  └─ MongoConnect.ts
│  ├─ redux
│  │  ├─ features
│  │  │  ├─ cartSlice.ts
│  │  │  ├─ loadingSlice.ts
│  │  │  └─ productSlice.ts
│  │  ├─ hooks.ts
│  │  └─ store.ts
│  └─ utils
│     ├─ helper.ts
│     └─ uploadthing.ts
├─ tailwind.config.ts
└─ tsconfig.json

```