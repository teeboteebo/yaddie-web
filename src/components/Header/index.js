import React from 'react'
import './styles.scss'
import logo from '../../img/yaddie-logo-orange.png'

class Header extends React.Component {
  render(){
    return(
      <header>
        Header
        <img class="logo" src={logo} alt={"logo"}/> 
      </header>
    )
  }
}
export default Header