import UseGetLeaderboard from "../custom-hooks/GetLeaderboard"


const Leaderboard = () => {
    const {leaderboard} = UseGetLeaderboard()
    console.log(leaderboard)

  return (
    <div className="overflow-auto h-80 bg-white">
        <div className="flex grow justify-center">
        {/* leaderboard.Tournament.Name */}
            <h1 className="text-xl font-bold text-green-500 text-center">Leaderboard at the {leaderboard.Tournament.Name}</h1>
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
                return(
                <>
                    <div>
                        <div className="flex grow justify-center">
                            {golfer.Rank?(
                                <p>{index+1}</p>
                            ):(
                                <p className="font-bold">Cut</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="flex grow justify-center">
                            <p>{golfer.Name}</p>
                        </div>
                    </div>
                </>
                )
            })}
        </div>
    </div>
  )
}

export default Leaderboard