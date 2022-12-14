import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload,
            }
        // since we are returning we do not need break;
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts],
            }
        // since we are returning we do not need break;
        case 'DELETE_WORKOUT':
            console.log(action.payload);
            return {
                workouts: state.workouts.filter((workout) => workout._id !== action.payload._id),
            }
        default:
            return state;
    }
}

export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null,
    });

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    );
}