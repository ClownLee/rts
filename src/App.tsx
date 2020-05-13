import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom';
import routes from './router';
import { RouteWithSubRoutes } from './assets/common';
import { RouteInterface } from './assets/interface';
import './App.css';

class Nav extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

    return <ul>
      {this.props.navs.map((item:RouteInterface, index: number) => (
          !item.hide && <li key={index} >
            <Link to={item.path}>{item.name}</Link>
            {item.routes && <Nav navs={item.routes} children={true} />}
          </li>
      ))}
    </ul>
  }
}

class Content extends React.Component<any, any> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return <>
      {this.props.routes.map((route: RouteInterface, i: number) => {
        return route.routes ? <Content key={i} routes={route.routes} /> : RouteWithSubRoutes(route, i);
      })}
    </>;
  }
}

class App extends React.Component<any, any>{
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <Nav navs={routes} />
            </header>
            <Switch>
              <Content routes={routes} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
