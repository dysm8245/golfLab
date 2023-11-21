import useGetFriends from "../custom-hooks/GetFriends"
import Friend from "../components/Friend"
import useGetUser from "../custom-hooks/GetUser"
import useGetProfile from "../custom-hooks/GetProfile"

const Profile = () => {
  // const {user} = useGetUser()
  const {friendData} = useGetFriends()
  const {user, getUser} = useGetUser()
  getUser
  console.log(user)

  return (
    <>
      <div className="grid grid-cols-3">
        <div>

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