import { useState, useEffect } from 'react'
import serverCalls from "../api/server.ts"
import useGetUser from './GetUser.ts'

const useGetCurrent = () =>{
    const[current, setCurrent] = useState<any>([])
    const {user} = useGetUser()
    
    const handleGetData = async () =>{
        const data = await serverCalls.getProfile(user.uid)
        // console.log(data)
        setCurrent(data)
    }

    useEffect(() =>{
        handleGetData()
    },[user])

    return {current, getCurrent:handleGetData}
}

export default useGetCurrent