import { useState } from "react";
import { useAuthContext } from './useAuth.context';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.err);
            console.log(json);
        }
        else {
            //save the token into the local storage
            localStorage.setItem('user', JSON.stringify(json));

            //update the auth context
            dispatch({ type: 'LOGIN', payload: json });

            setIsLoading(false);
        }

    }
    return { signup, error, isLoading };
}