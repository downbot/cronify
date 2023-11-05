import React from 'react';
import MainTab from "./Components/MainTab";
import {LoginButton, LogoutButton, AuthCard, UserInfoCard} from "./Components/Auth";
import {Page, Card, Button, Toolbar, ToolbarButton, BackButton, Icon, Tabbar, Tab, TabPage} from 'react-onsenui';

function App() {
  return (
    <Page renderToolbar={() =>
      <Toolbar>
        <div className="left">
          <ToolbarButton><Icon icon="md-menu" /></ToolbarButton>
        </div>
        <div className="center">Cronify</div>
      </Toolbar> } >

      <MainTab />

      <Card>
        <p>Tarjetas</p>
      </Card>
      <UserInfoCard/>
      <AuthCard/>
    </Page>
  );
}

export default App;
