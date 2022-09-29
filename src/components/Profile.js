import { useNavigate } from "react-router-dom";
import { UseAuth } from "./Auth"



export const Profile = () => {
    const auth = UseAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
            auth.logout();
            navigate('/');
    }

    return (
        <div>
           <p>Welcome {auth.user}</p>
           <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

