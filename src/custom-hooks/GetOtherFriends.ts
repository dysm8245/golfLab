import { useEffect, useState } from "react"
import serverCalls from "../api/server"

const UseGetOtherFriends = (id: string|null|undefined) =>{
    const [friends, setFriends] = useState([])

    const handleFetch = async () =>{
        await serverCalls.getOtherFriends(id)
        .then((data) => setFriends(data))
        .catch((err) => console.log(err))
    }

    useEffect(() =>{
        handleFetch()
    }, [])

    return {friends, getFriends:handleFetch}
}

export default UseGetOtherFriends