import { AuthContext } from '../context/Auth.context';
import { useContext } from 'react';

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) // it will be null if used outside AuthContextProvider
        return Error("useAuthContext must be used inside an AuthContextProvider");

    return context;
}