import React from 'react'
import {Page, Card} from 'react-onsenui'
import {LoginButton} from './Components/Auth'

function App() {
  return (
    <Page backgroundStyle={{backgroundColor: '#3c7ac1'}} contentStyle={{backgroundColor: 'blue', padding: 60}} >
      <section class="anonAppLayout">
        <div></div>
        <div><img src={ window.location.origin + window.location.pathname + '/logo512.png' }
              style={{ width: '512px' }} alt="Cronify" /> </div>
        <div></div>
        <div><Card><LoginButton/></Card></div>
        <div></div>
      </section>
    </Page>
  )
}

export default App
