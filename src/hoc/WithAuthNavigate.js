import { Navigate, Outlet } from "react-router-dom";

const WithAuthNavigate = (props) => {
    return props.isAuth ? <Outlet/> : <Navigate to="/login" replace/>
}

export default WithAuthNavigate