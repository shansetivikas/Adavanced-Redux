import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            About Home Page
            {/* <button onClick={()=>navigate('order-summary', {replace:true})}>Place Order</button> */}
            <button onClick={()=>navigate('order-summary')}>Place Order</button>
        </div>
    )
}

export default Home;