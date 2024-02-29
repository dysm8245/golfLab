import useGetNotes from "../custom-hooks/GetNotes"
import Note from "../components/Note"
import useGetProfile from "../custom-hooks/GetProfile"
import Default from "../assets/default.jpg"

interface notes{
    date: string,
    note: string, 
    id: string
}

const OtherProfiles = () => {
    const id = localStorage.getItem("userID")
    const friend_id = localStorage.getItem("friendID")

    const {noteData} = useGetNotes(id)
    const {userData} = useGetProfile(friend_id)

  return (
    <div>
        <div className="grid grid-cols-3">
            <div>
                <div className="flex grow justify-center">
                    <div className="grid grid-cols-1">
                    <div className="mt-10">
                        <div className="flex grow">
                            <h1 className="text-2xl"><b>{userData.username}'s</b> Profile</h1>
                        </div>
                    </div>
                    <div>
                    {userData.profileURL?(
                        <img className="rounded-full mt-5" src={userData.profileURL} alt="Profile Pic" width={150}/>
                    ):(
                        <img className="rounded-full mt-5" src={Default} alt="Profile Pic" width={150}/>
                    )}
                    </div>
                    <div className="my-5">
                        <div className="inline-flex">
                            <h1 className="mx-2">Best Score:</h1>
                            <h1 className="text-lg font-bold">{userData.bestScore}</h1>
                        </div>
                    </div>
                    <div>
                        <div className="inline-flex">
                            <h1 className="mx-2">Favorite Course:</h1>
                            <h1 className="text-lg font-bold">{userData.favCourse}</h1>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="inline-flex">
                            <h1 className="mx-2">Handicap:</h1>
                            <h1 className="text-lg font-bold">{userData.handicap}</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="flex grow justify-center mt-10">
                    <h1 className="text-2xl font-bold">Notes</h1>
                </div>
                <div className="flex grow justify-center">
                    <div className="mt-5">
                        {noteData.map((note: notes) =>{
                            // console.log(note)
                            return(<Note date={note.date} body={note.note} />)
                        })}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default OtherProfiles