import { useState, useEffect } from 'react'
import serverCalls from "../api/server.ts"

const useGetProfile = (id: string|null|undefined) =>{
    const[userData, setUserData] = useState<any>([])
    
    const handleGetData = async () =>{
        const data = await serverCalls.getUser(id)
        // console.log(data)
        setUserData(data)
    }

    useEffect(() =>{
        handleGetData()
    },[])

    return {userData, getInfo:handleGetData}
}

export default useGetProfile