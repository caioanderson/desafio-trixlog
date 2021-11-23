import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {

    const { signed } = useAuth();

    return signed ? <AppRoutes /> : <AuthRoutes/>
}