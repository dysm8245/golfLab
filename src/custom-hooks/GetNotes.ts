import { useState, useEffect } from 'react'
import serverCalls from "../api/server.ts"
import {auth} from "../config/firebase.ts"
import { onAuthStateChanged } from 'firebase/auth'

const useGetNotes = (id?: string|null|undefined) =>{
    const[noteData, setNoteData] = useState<[]>([])

    const handleGetData = async () =>{
        onAuthStateChanged(auth, async (user) =>{
            if(user){
                if(id){
                    const data = await serverCalls.getNotes(id)
                    setNoteData(data)
                }
                else{
                    const data = await serverCalls.getNotes(user.uid)
                    setNoteData(data)
                }
            }
            else{
                console.log("Not logged in")
            }
        })
    }

    useEffect(() =>{
        handleGetData()
    },[])

    return {noteData, getNotes:handleGetData}
}

export default useGetNotes