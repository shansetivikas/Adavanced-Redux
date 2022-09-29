import { useParams } from "react-router-dom"

export const UserDetails = () => {
    const params = useParams();
    const userId = params.id
    return <div>Details About User : {userId}</div>
}