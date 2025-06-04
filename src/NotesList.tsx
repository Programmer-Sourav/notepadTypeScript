import type { JSX } from "react";
import { useNotePadContext, type Note } from "./context/NotePadContext";
import "./createnode.css"

const NotesList = () : JSX.Element =>{

     const { notes, dispatch } = useNotePadContext();



     const deleteANoteById = (NoteToBeDeleted : number) =>{
         dispatch({type: "Delete-A-Note", NoteToBeDeleted})
     }


     const deleteANote = (NoteToBeDeleted : number) =>{
          deleteANoteById(NoteToBeDeleted);
     }

     const editANote = (NoteToBeDeleted : number) =>{
        
     }

    return(
        <>
        <h2>All Notes</h2>
        {
            notes.map((noteItem : Note)=>(
                <li key={noteItem.id} className="parent-item0">{noteItem.id} - {noteItem.note_title} - {noteItem.description} - {noteItem.cId}
                <button onClick={()=>{editANote(noteItem.id)}} style={{margin: "4px"}} className="edit-button0">Edit</button>
                <button onClick={()=>{deleteANote(noteItem.id)}} style={{margin: "4px"}} className="delete-button0">Delete</button>
                 </li>
                
            ))
        }
        </>
    )
}


export default NotesList;

