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

<hr>
Frontend :- https://ecommerce-rajkhatri.vercel.app/
<hr>
Admin Panel :- https://ecommerce-rajkhatri.vercel.app/admin/dashboard/
<hr>
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

Link: https://ecommerce-rajkhatri.vercel.app/

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure
```
ecommerce
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
