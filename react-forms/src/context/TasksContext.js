import { createContext } from "react";

export const TasksContext = createContext()
//TasksContext.Provider

//1. Create Context
//2. Create Provider wraps children within it
//3. Use the context: context shouldnt be used directly by the components. it should used by a hook that validate if the context exist