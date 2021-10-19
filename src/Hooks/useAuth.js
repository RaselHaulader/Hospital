import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useAuth = () => {
    // make useAuth hook which provide auth context data to all components 
    const authContext = useContext(AuthContext)
    return authContext
};

export default useAuth;