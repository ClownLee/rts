import React from 'react';
import Loadable from 'react-loadable';

const Loading: React.FC = (props: any) => {
    if (props.error) {
        return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else {
        return <div>Loading...</div>;
    }
};

const Home = Loadable({
    loader: () => import('../views/Home'),
    loading: Loading,
});

const About = Loadable({
    loader: () => import('../views/About'),
    loading: Loading
});

const Link = Loadable({
    loader: () => import('../views/Link'),
    loading: Loading
});

const Other = Loadable({
    loader: () => import('../views/Other'),
    loading: Loading
});

const routes = [
    {
        path: '/',
        component: null,
        name: "主页",
        roles: [],
        routes: [
            {
                path: '/',
                component: Home,
                name: "首页",
                hide: false
            },
            {
                path: '/about',
                component: About,
                name: "关于",
            }
        ]
    },
    {
        path: '/link',
        component: Link,
        name: "链接",
    },
    {
        path: '/other',
        component: Other,
        name: "其他",
    }
];

export default routes;
