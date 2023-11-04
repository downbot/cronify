import React from 'react';
import {LoginButton, LogoutButton, AuthCard, UserInfoCard} from "./Components/Auth";
import {Page, Card, Button, Toolbar, ToolbarButton, BackButton, Icon} from 'react-onsenui';

function App() {
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
      <UserInfoCard/>
      <AuthCard/>
    </Page>
  );
}

export default App;
