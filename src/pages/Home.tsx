import Background from "../assets/golfcourse.jpg"
import Golfers from "../components/Golfers"
import Leaderboard from "../components/Leaderboard"
import UseGetTourneys from "../custom-hooks/GetTourneys"

const Home = () => {

  const {schedule} = UseGetTourneys()
  
  return (
    <div>
      <div style={{backgroundImage: `url(${ Background })`}} className="flex flex-row justify-center mx-auto bg-center bg-cover bg-fixed">
        <div className="flex flex-col grow justify-center">
          <div className="flex grow justify-center">
            <div className="w-1/2 mt-20 shadow-xl rounded-lg bg-white">
                <p className="text-center">
                Welcome to the Golf Lab! The gof lab is designed to help you improve
                your game and become the best golfer you can be. You can add notes to keep track
                of your progress and highlight key things to remember. You can also add friends 
                and share your notes with them or talk about any other golf related things. Sign-up 
                and go golfing!
                </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row grow mt-10 lg:mt-72">
            <div className="flex grow justify-center m-8">
              <Golfers />
            </div>
            <div className="flex grow justify-center m-8">
              <Leaderboard schedule={schedule}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home