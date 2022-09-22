import { useEffect, useState } from "react";

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
            {workouts && workouts.map(workout => {
                return (
                    <>
                        <h2>{workout.title}</h2>
                        <h3>{workout.load}</h3>
                    </>
                );
            })}
        </div>
    );
}

export default Home;