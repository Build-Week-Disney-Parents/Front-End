import React from 'react';
import { Tab, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Nav = props => <NavLink exact {...props} activeClassName='active' />
const panes = [
    {
        menuItem: (
            <Menu.Item key='signup' as={Nav} to={'/'}>
                Signup
            </Menu.Item>
        )
    },
    {
        menuItem: (
            <Menu.Item key='login' as={Nav} to={'/login'}>Login</Menu.Item>
        )
    }
];

const AuthTabNav = () => <Tab panes={panes} renderActiveOnly={false} />;
export default AuthTabNav;