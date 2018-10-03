import React  from 'react';
import  { Route } from 'react-router';
import  { Link } from 'react-router-dom';

import Header from './components/Header';
import Tiles from './components/Tiles';
import Detail from './components/Detail';
import './App.css';

const { Provider } = React.createContext('catalogue');

const App = () => {
  return (
    <div className="app">
        <Link to={ '/' }>
            <Header title={ 'Catalogue' }/>
        </Link>
        <Provider>
            <Route exact path="/" component={ () => <Tiles /> }/>
        </Provider>
        <Provider>
            <Route path="/detail/:name" component={ () => <Detail /> }/>
        </Provider>
    </div>
  )
};

export default App;
