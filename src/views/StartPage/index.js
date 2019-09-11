import React from 'react';
import './styles.scss';

import LatestAddedRecipe from '../../components/LatestAddedRecipe';

class StartPage extends React.Component {
  render() {
    return (
      <div className='start-page'>
        Main
        <div style={{ height: 1000 }}>hej</div>
        <LatestAddedRecipe />
      </div>
    );
  }
}

export default StartPage;
