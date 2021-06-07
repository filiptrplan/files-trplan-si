import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Switch
} from "react-router-dom";
import { Files } from './Files';
import { Home } from "./Home";
import './styles/app.scss';

interface AppProps { }

class App extends React.PureComponent<AppProps> {

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar">
            <div className="logo-container">
              <h1 className="name">
                Files
          </h1>
            </div>
            <ul className="nav-links">
              <li className="nav-item is-active">
                <NavLink exact to="/" className="nav-link" activeClassName="is-active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/files" className="nav-link" activeClassName="is-active">Manage files</NavLink>
              </li>
            </ul>
          </nav>
          <div className="main-container">
            <Switch>
              <Route exact path="/" component={Home}>
              </Route>
              <Route exact path="/files" component={Files}>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
