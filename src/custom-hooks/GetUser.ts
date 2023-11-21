import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase.ts'

const useGetUser = () =>{
    const[user, setUser] = useState<any|null>(null)

    const handleGetUser = () =>{
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }
            else{
                setUser(null)
            }
        })
    }

    useEffect(() =>{
        handleGetUser()
    },[])

    return {user, getUser:handleGetUser}
}

export default useGetUser