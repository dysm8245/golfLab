import { useEffect, useState } from "react"
import apiCalls from "../api/api"

const UseGetGolfers = () => {
    const [golfers, setGolfers] = useState([])

    const handleFetch = async () =>{
        const data = await apiCalls.getGolfers()
        setGolfers(data)
    }

    useEffect(() =>{
        handleFetch()
    }, [])

    return {golfers, getGolfers:handleFetch}
}

export default UseGetGolfers