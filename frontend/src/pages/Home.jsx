import { useEffect, useState } from "react";
import WorkoutDetails from "../components/workout-details/WorkoutDetails";
import { useWorkoutsContext } from '../hooks/useWorkouts.context';
import WorkoutForm from "../components/workouts-form/WorkoutsForm";

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = () => {
            fetch('/api/workouts/')
                .then(response => response.json())
                .then(data => {
                    //set workouts is for getting all the workouts on the UI not adding new (that's create workout)
                    dispatch({ type: 'SET_WORKOUTS', payload: data });
                })
                .catch(err => console.log(err))
        }
        fetchWorkouts();
    }, []);

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