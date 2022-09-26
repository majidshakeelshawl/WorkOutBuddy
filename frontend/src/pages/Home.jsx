import { useEffect, useState } from "react";
import WorkoutDetails from "../components/workout-details/WorkoutDetails";
import WorkoutForm from "../components/workouts-form/WorkoutsForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    useEffect(() => {
        const fetchWorkouts = () => {
            fetch('/api/workouts/')
                .then(response => response.json())
                .then(data => {
                    setWorkouts(data)
                    console.log(data)
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