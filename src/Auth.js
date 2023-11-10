import React, { useState, useEffect, useReducer } from 'react'
import {useAuth0} from "@auth0/auth0-react"
import {Button, Card} from 'react-onsenui'
import {returnTo, auth0params} from './config'
import AuthContext from './store/AuthContext'
import authReducer from './store/authReducer'


function AuthStore({children, user}) {
	const store = useReducer(authReducer, {user})

	return <AuthContext.Provider value={store}  children />
}

export function AuthRequired({children,anonymous}) {
	const { user, isAuthenticated, isLoading } = useAuth0()

	if (!isAuthenticated) return anonymous
	if (isLoading) return <div>Loading...</div>

	return <AuthStore children user={user} />
}


export function LoginButton() {
	const { loginWithRedirect } = useAuth0()
	return (
		<button className="loginButton" onClick={() => loginWithRedirect()}>Log In</button>
	)
}

export function LogoutButton() {
	const { logout } = useAuth0()
	return (
		<Button onClick={() =>
			logout({ logoutParams: { returnTo: returnTo() } })}>
			Log Out
		</Button>
	)
}

export function UserInfoCard() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  window.cronify_user = user

  return (
      <Card>
        { isLoading &&
          <div><p>Loading...</p></div>
        }
        { isAuthenticated &&
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p><i>{user.email}</i></p>
        </div>
        }
      </Card>
  )
}

export function AuthCard() {
  const { isAuthenticated } = useAuth0()
  return (
    <Card>
      <div style={{ textAlign: 'center'}}>
      { !isAuthenticated && <LoginButton/>  }
      {  isAuthenticated && <LogoutButton/> }
      </div>
    </Card>
  )
}

//getAccessTokenWithPopup
export function AuthToken() {
  const { getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState('accessToken?');

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: { audience: auth0params.audience }
        });
        setAccessToken(token)
        window.cronify_token = token
	localStorage.setItem('hasuraToken',token)
      } catch (e) {
        console.error(e);
	setAccessToken('AuthToken Error: ' + e)
      }
    })();
  }, [getAccessTokenSilently]);

  return (
    <Card>
      <div>
        <p>{ accessToken }</p>
      </div>
    </Card>
  )
}

