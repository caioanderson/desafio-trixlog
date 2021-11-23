import { Route, Routes as Switch } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const AuthRoutes = () => {

    return (
        <Switch>
            <Route element={<Login />} path="/" />
            <Route element={<Register />} path="/create" />
        </Switch>
    )
}