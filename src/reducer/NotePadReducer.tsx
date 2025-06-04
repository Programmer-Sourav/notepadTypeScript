import type { Note } from "../context/NotePadContext"

export type NotepadState = {
     notes: Note[],
     selectionCategory: string
}

export const initialState : NotepadState = {
     notes: [],
     selectionCategory: ""
}

type AddNote = {
   type: "Add-A-Note",  
    note_title: string,
    description: string,
    cId: string
}


type DeleteNote = {
    type: "Delete-A-Note",
    NoteToBeDeleted: number

}

type UpdateNote = {
    type: "Edit-A-Note",
    NoteTobeUpdated: number

}

type Default = {
    type: "default"
}

export type NotePadActions = AddNote | DeleteNote | UpdateNote |Default



export default function NotePadReducer (state : NotepadState, action : NotePadActions) {
    switch(action.type){
        case "Add-A-Note":
            const newItem : Note = {id: state.notes.length +1, note_title: action.note_title, description: action.description, cId: action.cId };
            return {...state, notes: [...state.notes, newItem] }
            case "Delete-A-Note":
                const id = action.NoteToBeDeleted;
                return {...state, notes: [...state.notes].filter((item)=>item.id!==id)}
                case "Edit-A-Note":
                    //return {...state, notes: state.notes.map((item)=>item.id==action.NoteTobeUpdated ? {...item, } : "") }
                    case "default": 
                    return state;
    }

}

