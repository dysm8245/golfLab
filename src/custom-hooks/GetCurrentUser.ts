import { useState, useEffect } from 'react'
import serverCalls from "../api/server.ts"
import {auth} from "../config/firebase.ts"
import { onAuthStateChanged } from 'firebase/auth'

const useGetCurrent = () =>{
    const[current, setCurrent] = useState<any>([])
    
    const handleGetData = async () =>{
        onAuthStateChanged(auth, async (user) =>{
            if(user){
                const data = await serverCalls.getProfile(user.uid)
                setCurrent(data)
            }
            else{
                console.log("Not logged in")
            }
        })
    }

    useEffect(() =>{
        handleGetData()
    },[])

    return {current, getCurrent:handleGetData}
}

export default useGetCurrent