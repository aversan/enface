import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from 'pages/home';
import AllPage from 'pages/all';
import 'assets/scss/app.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/all" component={AllPage} />
      </Switch>
    </Router>
  );
}

export default App;
