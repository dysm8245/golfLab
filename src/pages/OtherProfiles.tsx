import useGetNotes from "../custom-hooks/GetNotes"
import Note from "../components/Note"
import useGetProfile from "../custom-hooks/GetProfile"
import Default from "../assets/default.jpg"
import UseGetOtherFriends from "../custom-hooks/GetOtherFriends"
// import Friend from "../components/Friend"

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
    const {friends} = UseGetOtherFriends(id)
    console.log(friends)

  return (
    <div>
        <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="col-span-1 p-3">
                <div className="flex grow justify-center">
                    <div className="grid grid-cols-1">
                        <div className="mt-10">
                            <div className="flex grow">
                                <h1 className="text-2xl mt-5"><b>{userData.username}'s</b> Profile</h1>
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
            <div className="col-span-2 mt-5">
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
            {/* <div className="col-span-2 mt-10">
                <div className="flex grow justify-center">
                    <h1 className="font-bold text-xl mt-6">Your Friends</h1>
                </div>
                <div className="flex grow justify-center">
                    <div className="overflow-auto mt-5 sm:w-1/2 xl:w-full max-h-100">
                    {friends.map((friend: any) => (
                        <Friend id={friend.id} friend_id={friend.friend_id} />
                    ))}
                    </div>
                </div>
            </div> */}
        </div>
        
    </div>
  )
}

export default OtherProfiles