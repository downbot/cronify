import React from 'react'
import {LoginButton} from './Auth'
import {slogan, publicUrl} from './config'

function App() {
  return (
    <div className="anonAppPage">
      <section className="anonAppLayout">
        <div></div>
        <div><img src={publicUrl('logo192.png')}  alt="Cronify" /></div>
        <div><img src={publicUrl('cronify-logo.png')} alt="Cronify" />
        <p className="textSlogan" >{slogan}</p></div>
        <div><LoginButton/></div>
        <div></div>
      </section>
    </div>
  )
}

export default App
