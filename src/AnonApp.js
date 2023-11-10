import React from 'react'
//import {Page, Card} from 'react-onsenui'
import {LoginButton} from './Components/Auth'
import {slogan, imgPath} from './config'

function App() {
  return (
    <div class="anonAppPage">
      <section class="anonAppLayout">
        <div></div>
        <div><img src={imgPath('logo192.png')}  alt="Cronify" /> </div>
        <div><img src={imgPath('cronify-logo.png')} alt="Cronify" />
        <p class="textSlogan" >{slogan}</p></div>
        <div><LoginButton/></div>
        <div></div>
      </section>
    </div>
  )
}

export default App
