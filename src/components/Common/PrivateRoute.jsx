import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
    return props.isAuth ? props.element : <Navigate to="/login" replace/>
}

export default PrivateRoute