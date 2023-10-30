import { Outlet, Navigate } from 'react-router-dom'
import { getAccessToken } from '../../services/AuthSlice/AuthHelper'

const PrivateRoutes = () => {
    const token = getAccessToken()
    if(!token){
        return <Navigate to={'/auth/login'} />
    }
    return <Outlet />
}

export default PrivateRoutes