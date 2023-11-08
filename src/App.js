import React from 'react'
import AnonApp from './AnonApp'
import MainTab from './Components/MainTab'
import Hasura from './Components/Hasura'
import {AuthRequired, AuthCard, UserInfoCard, AuthToken} from './Components/Auth'
import {Page, Card, Toolbar, ToolbarButton, Icon} from 'react-onsenui'

function App() {
  return (
    <AuthRequired anonymous={<AnonApp/>} >
    <Page renderToolbar={() =>
      <Toolbar>
        <div className="left">
          <ToolbarButton><Icon icon="md-menu" /></ToolbarButton>
        </div>
        <div className="center">Cronify v6</div>
      </Toolbar> } >

      <MainTab />

      <Card>
        <p>Tarjetas</p>
      </Card>
      <UserInfoCard/>
      <Hasura/>
      <AuthToken/>
      <AuthCard/>
    </Page>
    </AuthRequired>
  )
}

export default App
