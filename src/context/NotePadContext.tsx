import React, { createContext, useContext, useReducer, type JSX, type ReactNode } from "react";
import NotePadReducer, { initialState, type NotePadActions } from "../reducer/NotePadReducer";

export type Note = {
    id: number, 
    note_title: string,
    description: string,
    cId: string
}
export type NotePadContextType = {
    notes: Note[],
    dispatch : React.Dispatch<NotePadActions>
}

interface ChildrenProps {
   children: ReactNode;
}

export const notePadContext = createContext<NotePadContextType | undefined>(undefined);


export const useNotePadContext = () : NotePadContextType =>{
    const context = useContext(notePadContext);
     if (!context) {
    throw new Error("Must be used within a BookmarkProvider");
  }
  return context;
}

export const NotePadProvider: React.FC<ChildrenProps> = ({children}) : JSX.Element =>{

    const [state, dispatch] = useReducer(NotePadReducer, initialState)

      return (<notePadContext.Provider value={{notes: state.notes, dispatch }}>{children}</notePadContext.Provider>)
}



  
