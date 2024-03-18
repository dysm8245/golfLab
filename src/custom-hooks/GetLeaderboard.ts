import { useState, useEffect } from "react"
import apiCalls from "../api/api"

interface Leaderboard{
    Tournament: {
        Name: string
    },
    Players: Array<any>
}

const UseGetLeaderboard = () =>{
    const initialLead: Leaderboard = {
        Tournament:{
            Name: "Null"
        },
        Players: []
    }

    const [leaderboard, setLeaderboard] = useState<Leaderboard>(initialLead)

    const handleFetch = async () =>{
        const data = await apiCalls.getTourneys(593)
        setLeaderboard(data)
    }

    useEffect(() =>{
        handleFetch()
    },[])

    return {leaderboard, setLeaderboard, getLeaderboard:handleFetch}
}

export default UseGetLeaderboard