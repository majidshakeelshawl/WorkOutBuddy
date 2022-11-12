import { useAuthContext } from "./useAuth.context";
import { useWorkoutsContext } from "./useWorkouts.context";

export const useLogOut = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: workoutsDispatch } = useWorkoutsContext();

    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({ type: 'LOGOUT' });
        workoutsDispatch({ type: 'SET_WORKOUTS', payload: null });
    }

    return { logout };
}