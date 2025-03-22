import React, { createContext, useState } from 'react';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    

    const userInfo = {
        loading, setLoading,
        user, setUser

    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;