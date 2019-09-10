import React from 'react'
import './styles.scss'
import SearchBar from '../SearchBar';

class Header extends React.Component {
  render(){
    return(
      <header>
        Header
        <SearchBar />
      </header>
    )
  }
}
export default Header