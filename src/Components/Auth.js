import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
import {Button, Card} from 'react-onsenui'

export function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button onClick={() => loginWithRedirect()}>Log In</Button> 
  )
}

export function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <Button onClick={() => 
        logout({ logoutParams: { returnTo: window.location.origin + window.location.pathname } })}>
        Log Out
    </Button>
  )
}

export function UserInfoCard() {
  const { user, isAuthenticated, isLoading } = useAuth0()
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
      <div>
      { !isAuthenticated && <LoginButton/>  }
      {  isAuthenticated && <LogoutButton/> }
      </div>
    </Card>
  )
}
