import { useState, useEffect } from 'react'
import serverCalls from "../api/server.ts"
import useGetUser from './GetUser.ts'

const useGetNotes = (id?: string|null|undefined) =>{
    const[noteData, setNoteData] = useState<[]>([])
    const {user} = useGetUser()
    const userInfo: any = user

    const handleGetData = async () =>{
        if(id){
            const data = await serverCalls.getNotes(id)
            setNoteData(data)
        }
        else{
            const data = await serverCalls.getNotes(userInfo.uid)
            setNoteData(data)
        }
    }

    useEffect(() =>{
        handleGetData()
    },[user])

    return {noteData, getNotes:handleGetData}
}

export default useGetNotes