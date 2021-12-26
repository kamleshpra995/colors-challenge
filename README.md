This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

1. api folder contains "colors" api file.
2. common folder contain parsers and color spaces


## How to add new color space

1. Add your color space file in common>color-spaces folder
2. Your new space should return values in this format
        {type : 'space name', values: color values}
3. Import your spec in index.js in same folder and add in specs list like others
4. For front-end add your color parser in common>color-parsers/index.js
