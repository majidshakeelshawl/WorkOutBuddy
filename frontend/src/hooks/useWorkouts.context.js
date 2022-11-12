import { WorkoutsContext } from "../context/Workouts.context";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);

    if (!context) // it will be null if used outside WorkoutsContextProvider
        return Error("useWorkoutsContext must be used inside an WorkoutsContextProvider");

    return context;
}