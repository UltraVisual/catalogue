import React  from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  { Route } from 'react-router';
import  { Link } from 'react-router-dom';

import Header from './components/Header';
import Tiles from './components/Tiles';
import Detail from './components/Detail';
import rootReducer from './reducers';
import './App.css';

const store = createStore(rootReducer)

const App = () => {
  return (
    <div className="app">
      <Link to={ '/' }>
        <Header title={ 'Catalogue' }/>
      </Link>
      <Provider store={ store }>
        <Route exact path="/" component={ Tiles }/>
      </Provider>
      <Provider store={ store }>
        <Route path="/detail/:name" component={ Detail }/>        
      </Provider>
    </div>
  )
};

export default App;
