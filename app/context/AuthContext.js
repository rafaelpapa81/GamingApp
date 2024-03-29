import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

// pass any value to any screen of the app
export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const login = () => {
        setUserToken('random_key');
        setIsLoading(false);
    };

    const logout = () => {
        setUserToken(null);
        setIsLoading(false);
    };

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    );
};

