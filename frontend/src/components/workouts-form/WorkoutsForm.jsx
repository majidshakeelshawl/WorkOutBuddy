import { useState } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkouts.context";

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, reps, load };
        const response = await fetch('api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setTitle('');
            setReps('');
            setLoad('');
            setError(null);
            dispatch({ type: 'CREATE_WORKOUT', payload: json });
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add new Workout</h3>
            <label>Title</label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Reps</label>
            <input
                type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <label>Load (Kg) </label>
            <input
                type='number'
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            <button type="submit">Add Workout</button>
            {error && <div className="error"> {error} </div>}
        </form>
    );
}

export default WorkoutForm;