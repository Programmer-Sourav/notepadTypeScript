import { useContext, useState } from "react"
import { notePadContext, useNotePadContext } from "./context/NotePadContext";
import "./createnode.css"

const AddANote : React.FC = () =>{

     const [noteTitle, setNoteTitle ] = useState<string>("");
     const [noteDescription, setNoteDescription] = useState<string>("");
     const [cId, setCid] = useState<string>("");


     const {notes, dispatch} = useNotePadContext();


     const onChangeCategory = (e : React.ChangeEvent<HTMLSelectElement>) =>{
            setCid(e.target.value)
     }


     const onChangeDescription = (e : React.ChangeEvent<HTMLInputElement>) =>{
         setNoteDescription(e.target.value)
     }

     const onChangeTitle = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setNoteTitle(e.target.value);
     }


     const addANoteToTheList = (note_title: string, description: string, cId: string) =>{
        console.log(1111,  note_title, description, cId)
         dispatch({type: "Add-A-Note",  note_title, description, cId})
     }

     const onSubmitForm = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(noteTitle?.trim()!=="" && noteDescription?.trim()!=="" && cId?.trim()!==""){
            addANoteToTheList(noteTitle, noteDescription, cId)
            setNoteTitle("")
            setNoteDescription("")
        }
     }


    return(
        <form onSubmit={onSubmitForm}>
          <h2>Add A Note</h2>
          <div className="parent-container0">
         <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" value={noteTitle} onChange={onChangeTitle} className="parent-input0"/>


          
         <label htmlFor="title">Description: </label>
          <input type="text" id="title" name="title" value={noteDescription} onChange={onChangeDescription} className="parent-input0"/>

          <label htmlFor="title">Category: </label>
          <select onChange={onChangeCategory} value={cId} className="parent-input0">
            <option value="select">--Select--</option>
            <option value="General"> General </option>
             <option value="Health And Fitness"> Health And Fitness </option>
              <option value="Motivation General"> Motivation General </option>
              <option value="Motivation Health"> Motivation Health </option>
          </select>
          <button type="submit" style={{marginTop: "8px"}} className="parent-button0">
            Submit
          </button>
          </div>
        </form>
    )

}


export default AddANote