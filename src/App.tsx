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
    const {navs, children, changeChildren} = this.props;

    return <ul>
      {navs.map((item:RouteInterface, index: number) => (
          !item.hide && <li key={index} onClick={changeChildren}>
            <Link to={item.path}>{item.name}</Link>
            {children ?
                <></> :
                item.routes && <Nav navs={item.routes} children={false} className="App-nav-children" />
            }
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

  state={
    navChildren: true
  };

  changeChildren = () : void => {
    const navChildren = !this.state.navChildren;
    this.setState({ navChildren });
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <Nav navs={routes} children={this.state.navChildren} changeChildren={this.changeChildren} />
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
