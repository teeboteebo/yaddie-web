import React from 'react'
import './styles.scss'
import SearchSection from '../SearchSection';

class Header extends React.Component {
  render(){
    return(
      <header>
        Header
        <SearchSection />
      </header>
    )
  }
}
export default Header