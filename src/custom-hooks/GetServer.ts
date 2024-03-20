import { useState, useEffect } from "react";
import serverCalls from "../api/server";

const UseGetServer = () =>{
    const [status, setStatus] = useState(false)

    const handleFetch = () =>{
        serverCalls.getServer()
        .then(() => setStatus(true))
        .catch(() => setStatus(false))
    }

    useEffect(() =>{
        handleFetch()
    }, [])

    return {status, getStatus:handleFetch}
}

export default UseGetServer