import React, { createContext, useContext, useState, useEffect } from 'react';

// Key for local storage
const USER_STORAGE_KEY = 'user_auth_data';

// Default guest user
const DEFAULT_USER = {
    name: 'Guest User',
    email: 'guest@example.com',
};

// Create the context
export const AuthContext = createContext({
    user: DEFAULT_USER,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

// Hook to use the auth context easily
export const useAuth = () => {
    return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
    // Initialize state from local storage or use default guest user
    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem(USER_STORAGE_KEY);
            return storedUser ? JSON.parse(storedUser) : DEFAULT_USER;
        } catch (error) {
            console.error("Error reading user from localStorage:", error);
            return DEFAULT_USER;
        }
    }); 

    // Check if the user is authenticated (not the default guest)
    const isAuthenticated = user.email !== DEFAULT_USER.email;

    // Function to simulate login and store data in local storage
    const login = (userData) => {
        const userToStore = { name: userData.name, email: userData.email };
        setUser(userToStore);
        // Store user data in local storage
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userToStore));
        console.log(`User logged in and stored: ${userToStore.email}`);
    };

    // Function to simulate logout and clear data from local storage
    const logout = () => {
        setUser(DEFAULT_USER);
        // Clear user data from local storage
        localStorage.removeItem(USER_STORAGE_KEY);
        console.log('User logged out and data cleared.');
    };

    const value = {
        user,
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};