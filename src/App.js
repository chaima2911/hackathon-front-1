import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Lendning from './pages/lending/Lending';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Lendning} />
        <Route path='/pages/home/Home'  component={Home} />
      </Switch>
    </Router>
    
  );
}

export default App;
