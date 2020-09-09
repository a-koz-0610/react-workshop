import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home';
import StarWarsPeoplePage from './pages/star-wars-people';
import Nav from './components/nav';

import style from './style.module.scss';

function App() {

  const PageSwitch = () => (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/star-wars-people' component={StarWarsPeoplePage} />
    </Switch>
  )


  return (
    <BrowserRouter>
      <Nav />
      <div className={style.page}>
        <PageSwitch />
      </div>
    </BrowserRouter >
  );
}

export default App;
