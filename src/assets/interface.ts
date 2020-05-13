interface routeInterface {
    path: string,
    component: any,
    name: string,
    routes?: Array<any>,
    hide?: boolean
}

export type RouteInterface = routeInterface;
