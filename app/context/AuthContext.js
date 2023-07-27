import React, {createContext} from 'react';

export const AuthContext = createContext();

// pass any value to any screen of the app
export const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

