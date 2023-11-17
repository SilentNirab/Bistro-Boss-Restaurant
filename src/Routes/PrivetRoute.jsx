import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()


    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

PrivetRoute.propTypes = {
    children:PropTypes.node
};

export default PrivetRoute;