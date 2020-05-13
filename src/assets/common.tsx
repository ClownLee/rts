import React from 'react';
import { Route } from 'react-router-dom';
import { RouteInterface } from './interface';

const RouteWithSubRoutes = (route: RouteInterface, index: number) => {
    return (
        <Route
            exact
            key={index}
            path={route.path}
            render={props => {
                return <route.component {...props} routes={route.routes} />
            }}
        />
    );
};

export {
    RouteWithSubRoutes
}
