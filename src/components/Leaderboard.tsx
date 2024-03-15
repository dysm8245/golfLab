import apiCalls from "../api/api"
import { useEffect, useState } from "react"

interface Leaderboard{
    Tournament:{
        Name: String,
        StartDate: String,
        EndDate: String
    },
    Players: []
}
interface props{
    schedule: [{TournamentID: number, StartDate: string, EndDate: String}]
}

const Leaderboard = (props: props) => {
    
    const date = new Date()
    var today: string = "" //setting today's date
    if(date.getMonth()+1 < 10){
        today = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`
    }
    else{
        today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }

    var change: any = [] //used to get this weeks golf tournament by filtering schedule
    if(props.schedule.length > 1){
        change = props.schedule.filter(item => {
            if((item.StartDate.slice(0,7) === today.slice(0,7) && parseInt(item.StartDate.slice(8,10)) <= parseInt(today.slice(8,10))) || (item.EndDate.slice(0,7) === today.slice(0,7) && parseInt(item.EndDate.slice(8,10))-4 <= parseInt(today.slice(8,10)))){
                return true
            }
        })
    }
    
    const initialLead: Leaderboard = {
        Tournament:{
            Name: "Tournament",
            StartDate: "",
            EndDate: ""
        },
        Players: []
    }

    const [leaderboard, setLeaderboard] = useState<Leaderboard>(initialLead)

    const handleFetch = async () =>{
        if(change[0] != undefined){
            const response = await apiCalls.getTourneys(change[0].TournamentID)
            setLeaderboard(response)
        }
    }

    useEffect(() =>{
        handleFetch()
    }, [props.schedule])

    console.log(leaderboard)

  return (
    <div className="overflow-auto h-80 bg-white">
        <div className="flex grow">
            <div className="flex grow justify-center">
                <h1 className="text-xl font-bold text-green-500 text-center">Leaderboard at the {leaderboard.Tournament.Name}</h1>
            </div>
        </div>
        <div className="flex grow justify-center">
            <p className="font-bold">{leaderboard.Tournament.StartDate.slice(0,10)} to {leaderboard.Tournament.EndDate.slice(0,10)}</p>
        </div>
        <div className="grid grid-cols-2 divide-x-2 divide-y-2">
            <div>
                <div className="flex grow justify-center">
                    <h1 className="font-bold">Position</h1>
                </div>
            </div>
            <div>
                <div className="flex grow justify-center">
                    <h1 className="font-bold">Name</h1>
                </div>
            </div>
            {leaderboard.Players.map((golfer: any, index: any) =>{
                if(golfer.Win > 0){
                    return(
                        <>
                            <div>
                                <div className="flex grow justify-center">
                                    <p className="text-green-500 font-bold">Winner</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex grow justify-center">
                                    <p>{golfer.Name}</p>
                                </div>
                            </div>
                        </>
                    )
                }
                else if(golfer.MadeCut > 0){
                    return(
                        <>
                            <div>
                                <div className="flex grow justify-center">
                                    <p>{index+1}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex grow justify-center">
                                    <p>{golfer.Name}</p>
                                </div>
                            </div>
                        </>
                    )
                }
                else{
                    return(
                        <>
                            <div>
                                <div className="flex grow justify-center">
                                    <p className="font-bold">Cut</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex grow justify-center">
                                    <p>{golfer.Name}</p>
                                </div>
                            </div>
                        </>
                    )
                }
            })}
        </div>
    </div>
  )
}

export default Leaderboard