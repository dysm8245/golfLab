import { useState, useEffect } from 'react'
import serverCalls from "../api/server.ts"
import {auth} from "../config/firebase.ts"
import { onAuthStateChanged } from 'firebase/auth'

const useGetFriends = () =>{
    const[friendData, setFriendData] = useState<[]>([])

    const handleGetData = async () =>{
        onAuthStateChanged(auth, async (user) =>{
            if(user){
                const data = await serverCalls.getFriends(user.uid)
                setFriendData(data)
            }
            else{
                console.log("Not logged in")
            }
        })
    }

    useEffect(() =>{
        handleGetData()
    },[])

    return {friendData, getFriends:handleGetData}
}

export default useGetFriends