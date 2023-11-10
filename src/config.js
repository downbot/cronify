
export const appVersion = process.env.REACT_APP_VERSION || 'v0.1'

export const appName = process.env.REACT_APP_NAME || 'Cronify'
	
export const slogan = process.env.REACT_APP_SLOGAN || 'credit and savings tracking'

export const publicUrl = (filename) => process.env.PUBLIC_URL + '/' + filename

export const returnTo = () => window.location.origin + window.location.pathname

export const auth0config = {
		domain: process.env.REACT_APP_AUTH0_DOMAIN,
		clientId: process.env.REACT_APP_AUTH0_CLIENTID
	}

export const auth0params = {
		redirect_uri: returnTo(),
		audience: process.env.REACT_APP_AUTH0_API_AUDIENCE,
		scope: 'profile'
	}

const def = { appVersion, appName, slogan }
export default def

