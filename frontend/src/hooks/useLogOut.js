import { useAuthContext } from "./useAuth.context";

export const useLogOut = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({ type: 'LOGOUT' });
    }

    return { logout };
}