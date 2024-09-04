// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

// Simulating an authentication hook
const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // Simulate a login/logout toggle
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    // Simulate fetching the authentication state from an API
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            // Simulate an async operation like fetching user status
            setIsAuthenticated(false); // Set initial auth state
            setLoading(false);
        }, 1000); // Delay to simulate loading
    }, []);

    return { isAuthenticated, loading, login, logout };
};

export default useAuth;
