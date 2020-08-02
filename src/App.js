import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CarrinhoPage from './pages/CarrinhoPage';
import Error from './pages/Error';

function App() {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/carrinho" component={CarrinhoPage} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
