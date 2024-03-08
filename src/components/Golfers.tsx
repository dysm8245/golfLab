import UseGetGolfers from "../custom-hooks/GetGolfers"

const Golfers = () => {
    const {golfers} = UseGetGolfers()
    console.log(golfers)

  return (
    <div className="overflow-auto h-80 bg-white">
        <div className="flex grow justify-center">
            <h1 className="text-xl font-bold text-green-500">Top 100 World Golf Rankings</h1>
        </div>
        <div className="grid grid-cols-3 divide-x-2 divide-y-2">
            <div>
                <div className="flex grow justify-center">
                    <h1 className="font-bold">Rank</h1>
                </div>
            </div>
            <div>
                <div className="flex grow justify-center">
                    <h1 className="font-bold">Name</h1>
                </div>
            </div>
            <div>
                <div className="flex grow justify-center">
                    <h1 className="font-bold">Points</h1>
                </div>
            </div>
            {golfers.slice(0,100).map((golfer: any, index) =>{
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
                    <div>
                        <div className="flex grow justify-center">
                            <p>{golfer.TotalPoints}</p>
                        </div>
                    </div>
                </>
                
                )
            })}
        </div>
    </div>
    
  )
}

export default Golfers