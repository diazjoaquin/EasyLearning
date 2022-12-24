import { useAuth } from "./Auth-context";
import { useHistory } from "react-router-dom";

export const ProtectedRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const history = useHistory();

    if (loading) return <h1>Loading ...</h1>;
    if (!user) history.push('/login');
    return <>{children}</>;
}