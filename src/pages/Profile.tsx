import useGetFriends from "../custom-hooks/GetFriends"
import Friend from "../components/Friend"
import useGetCurrent from "../custom-hooks/GetCurrentUser"

const Profile = () => {
  // const {user} = useGetUser()
  const {friendData} = useGetFriends()
  const {current} = useGetCurrent()

  return (
    <>
      <div className="grid grid-cols-3">
        <div>
          <div className="flex grow">
            <div className="inline-flex m-5">
              <h1 className="mx-2">Username:</h1>
              <h1 className="text-lg font-bold">{current.username}</h1>
              <button className="mx-2 p-2 bg-green-500 rounded-lg">update</button>
            </div>
          </div>
        </div>
        <div>
          
        </div>
        <div>
          <div className="w-96">
            <div className="flex grow justify-center">
              <h1 className="font-bold text-lg">Friends</h1>
            </div>
          </div>
          <div className="overflow-auto w-96 max-h-40">
            {friendData.map((friend: any) => (
              <Friend id={friend.id} friend_id={friend.friend_id} />
            ))}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Profile