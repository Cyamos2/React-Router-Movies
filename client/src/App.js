import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'

import MovieList from './Movies/SavedList';
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState ( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={[]} />
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' component={Movie} />
    </div>
  );
};


export default App;