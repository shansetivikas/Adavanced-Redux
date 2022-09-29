import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { UseAuth } from "./Auth";
import { useLocation } from "react-router-dom";

export const Login = () => {
    const [user, setUser] = useState(null);
    const auth = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace:true});
    }
    return (
        <div>
            <label>
                Username: {''} 
                <input type="text" onChange={(e)=>setUser(e.target.value)}/>
            </label>
            <button onClick={handleLogin}>Submit</button>
            
        </div>
    )
}