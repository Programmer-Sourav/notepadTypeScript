import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import type React from "react";
import type { NotePadActions } from "../reducer/NotePadReducer";
import { useState } from "react";
import type { Note } from "../context/NotePadContext";


const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache()
})


export async function getNotes(dispatch : React.Dispatch<NotePadActions>){
    try{
    const query = gql `{getNotes{
    cId
    description
    note_title
    id
  }}`
  const {data} = await client.query({query})
  for(let i = 0; i<data.getNotes.length; i++){
  const note_title: string = data.getNotes[i].note_title;
  const description: string = data.getNotes[i].description;
  const cId : string = data.getNotes[i].cId;

  dispatch({type: "Add-A-Note",  note_title, description, cId})
  }
  
  //return data.getNotes;
    }

    catch(error){
        console.log("Error Occured "+error)
    }

}