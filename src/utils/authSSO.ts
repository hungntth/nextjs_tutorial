const urlAuthSSO = (baseUrl: string, state: string) => {
  let url = new URL(baseUrl)
  url.searchParams.set('response_type', process.env.SSO_RESPONSE_TYPE)
  url.searchParams.set('client_id', process.env.SSO_CLIENT_ID)
  url.searchParams.set('redirect_uri', process.env.SSO_REDIRECT_URI)
  url.searchParams.set('state', state)
  return url.toString()
}
export default urlAuthSSO
