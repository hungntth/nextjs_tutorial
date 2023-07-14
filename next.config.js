/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SSO_RESPONSE_TYPE: process.env.SSO_RESPONSE_TYPE,
        SSO_CLIENT_ID: process.env.SSO_CLIENT_ID,
        SSO_REDIRECT_URI: process.env.SSO_REDIRECT_URI,
        SSO_URL_LOGIN: process.env.SSO_URL_LOGIN,
        BASE_API: process.env.BASE_API,
      },
}

module.exports = nextConfig
