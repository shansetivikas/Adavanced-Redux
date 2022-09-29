import { Navigate, useLocation } from "react-router-dom";
import { UseAuth } from "./Auth"

export const RequireAuth = ({children}) => {
    const auth = UseAuth();
    const location = useLocation();

    if(!auth.user) {
         return <Navigate to='/login' state={{path : location.pathname}} />
    }

    return children
}