import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const ProtectedRoute=({children})=>{
    const isLoggedIn=false;
    return(
        isLoggedIn ? children : <Navigate to="/login"/>
    )
}
export default ProtectedRoute;