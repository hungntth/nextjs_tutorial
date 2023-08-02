declare namespace NodeJS {
  export interface ProcessEnv {
    readonly SSO_RESPONSE_TYPE: string;
    readonly SSO_CLIENT_ID: string;
    readonly SSO_REDIRECT_URI: string;
    readonly SSO_URL_LOGIN: string;
    readonly BASE_API: string;
  }
}