import React from 'react';
import RecipePreview from './RecipePreview';

import './styles.scss';

const RecipeLister = props => {
  return (
    <section>
      {props.recipes.map((recipe, i) => {
        return (
          <div className='list-item mb-5 mb-md-3' key={'recipe_' + i}>
            <RecipePreview recipe={recipe} />
          </div>
        );
      })}
    </section>
  );
};

export default RecipeLister;
