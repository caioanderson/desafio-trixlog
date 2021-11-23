import { Route, Routes as Switch } from 'react-router-dom';
import { LocationProvider } from '../hooks/useLocation';
import { Main } from '../pages/Main';

export const AppRoutes = () => {
    return (
        <LocationProvider>
            <Switch>
                <Route element={<Main />} path="/" />
            </Switch>
        </LocationProvider>
    )
}