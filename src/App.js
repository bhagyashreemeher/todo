import React from 'react';
import DataTable from './components/TodoTable';
import Home from './components/Home'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <Button variant="contained" color="primary">
            ToDo
          </Button>
        </Link>
        <Link to="/table">
          <Button variant="contained" color="primary">
            Table
          </Button>
        </Link>
      </header>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/table" component={DataTable} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
