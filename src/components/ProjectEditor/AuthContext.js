// Authentication context is a way to pass data to components without having to pass props down through every component in the tree.

// This is useful for data that is used in many components, such as authentication data.

// In this example, we use the useContext hook to create a context for authentication data. We then use the Provider component to wrap the entire application in the context. This allows us to access the authentication data from any component in the application.

// Path: src/components/ProjectEditor/AuthContext.js

import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children, auth }) => {
        return(
            <AuthContext.Provider value={auth}>
                {children}
            </AuthContext.Provider>
        )
}