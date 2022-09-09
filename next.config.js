/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  i18n,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_HOST}`,'lh3.googleusercontent.com','icon-library.com','realestatebuketwebdev.s3.ap-northeast-3.amazonaws.com'], //Domain of image host
  },
}

module.exports = nextConfig
