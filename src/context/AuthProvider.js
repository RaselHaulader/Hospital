import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
// context name
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // provided value to all components
    const AllAuth = useFirebase()
    
    return (
        <AuthContext.Provider value={AllAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;