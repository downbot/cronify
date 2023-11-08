import React from 'react'
import {Page, Card} from 'react-onsenui'
import {LoginButton} from './Components/Auth'

function App() {
  return (
    <Page>
      <Card>
        <div>
          <LoginButton/>
        </div>
      </Card>
    </Page>
  )
}

export default App
