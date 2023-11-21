import useGetFriends from "../custom-hooks/GetFriends"
import Friend from "../components/Friend"
import useGetCurrent from "../custom-hooks/GetCurrentUser"
import Modal from "../components/Modal"
import ProfileForm from "../components/ProfileForm"
import { useState } from "react"

const Profile = () => {
  // const {user} = useGetUser()
  const {friendData} = useGetFriends()
  const {current} = useGetCurrent()
  const [open, setOpen] = useState(false)

  const onClick = () =>{
    setOpen(!open)
  }

  return (
    <>
      <div className="grid grid-cols-3">
        <div>
          <div className="flex grow">
            <div className="grid grid-cols-1">
              <div className="mt-10">
                <div className="flex grow justify-center">
                  <h1 className="text-2xl">Profile</h1>
                </div>
              </div>
              <div className="mt-5">
                <div className="inline-flex">
                  <h1 className="mx-2">Username:</h1>
                  <h1 className="text-lg font-bold">{current.username}</h1>
                </div>
              </div>
              <div className="my-5">
                <div className="inline-flex">
                  <h1 className="mx-2">Best Score:</h1>
                  <h1 className="text-lg font-bold">{current.bestScore}</h1>
                </div>
              </div>
              <div>
                <div className="inline-flex">
                  <h1 className="mx-2">Favorite Course:</h1>
                  <h1 className="text-lg font-bold">{current.favCourse}</h1>
                </div>
              </div>
              <div className="my-5">
                <div className="inline-flex">
                  <h1 className="mx-2">Handicap:</h1>
                  <h1 className="text-lg font-bold">{current.handicap}</h1>
                </div>
              </div>
              <div>
                <div className="flex grow justify-center">
                  <button onClick={onClick} className="p-2 rounded-xl bg-green-500">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          {open?(
            <Modal element={<ProfileForm/>}/>
          ):(
            <>
              <div className="grid gridcols-1">
                <div>
                  <h1 className="text-3xl font-bold">Welcome</h1>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{current.username}</h1>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="">
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