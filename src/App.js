import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {Page, Card, Button, Toolbar, ToolbarButton, BackButton, Icon} from 'react-onsenui';

function App() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();
  return (
    <Page renderToolbar={() =>
      <Toolbar>
        <div className="left">
          <ToolbarButton><Icon icon="md-menu" /></ToolbarButton>
        </div>
        <div className="center">Cronify</div>
      </Toolbar> } >
      <Card>
        <p>Tarjetas</p>
      </Card>
      <Card>
        { isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p><i>{user.email}</i></p>
        </div>
        ) }
      </Card>
      { !isAuthenticated && <Button onClick={() => loginWithRedirect()}>Log In</Button> }
      {  isAuthenticated && <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button> }
    </Page>
  );
}

export default App;
