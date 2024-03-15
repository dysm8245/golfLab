import { useEffect, useState } from "react"
import apiCalls from "../api/api"

const UseGetTourneys = () =>{
    const [schedule, setSched] = useState<[{TournamentID: number, StartDate: string, EndDate: string}]>([{TournamentID: 0, StartDate: "", EndDate:""}])

    const handleFetch = async () =>{
        const data = await apiCalls.getSchedules()
        setSched(data)
    }

    useEffect(() =>{
        handleFetch()
    }, [])
    
    return{schedule, getSchedule:handleFetch}
}

export default UseGetTourneys