import { useEffect } from "react";
import WorkoutDetails from "../components/workout-details/WorkoutDetails";
import { useWorkoutsContext } from '../hooks/useWorkouts.context';
import WorkoutForm from "../components/workouts-form/WorkoutsForm";
import { useAuthContext } from '../hooks/useAuth.context';

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();
    useEffect(() => {
        const fetchWorkouts = () => {
            fetch('/api/workouts/', {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                }
            })
                .then(response => response.json())
                .then(data => {
                    //set workouts is for getting all the workouts on the UI not adding new (that's create workout)
                    dispatch({ type: 'SET_WORKOUTS', payload: data });
                })
        }
        if (user)
            fetchWorkouts();
    }, [dispatch, user]);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => {
                    return (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    );
                })}
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home;