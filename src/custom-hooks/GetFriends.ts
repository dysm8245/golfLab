import { useState, useEffect } from 'react'
import serverCalls from "../api/server.ts"
import useGetUser from './GetUser.ts'

const useGetFriends = () =>{
    const[friendData, setFriendData] = useState<[]>([])
    const {user} = useGetUser()
    const userInfo: any = user

    const handleGetData = async () =>{
        const data = await serverCalls.getFriends(userInfo.uid)
        setFriendData(data)
    }

    useEffect(() =>{
        handleGetData()
    },[user])

    return {user, friendData, getFriends:handleGetData}
}

export default useGetFriends