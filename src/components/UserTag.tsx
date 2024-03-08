import { useNavigate } from "react-router-dom"
import serverCalls from "../api/server"
import useGetUser from "../custom-hooks/GetUser"

interface userProps{
  id: string,
  token: string,
  username: string,
  email: string,
  friend: boolean
}

const UserTag = (props: userProps) => {
  const navigate = useNavigate()
  const {user} = useGetUser()

  const addFriend = async () =>{
    const data: Object = {
      id: props.id,
      token: user.uid
    }
    const friend = await serverCalls.addFriend(data)
    navigate("/profile")
    console.log(friend)
  }

  const view = () =>{
    localStorage.setItem("userID", props.token)
    localStorage.setItem("friendID", props.id)
    navigate("/users")
  }

  return (
    <div className="flex px-2 justify-center">
        <div className="flex p-2 w-96 align-middle bg-slate-300 border border-black">
          <div className="grid grid-cols-4">
            <div className="flex grow items-center">
              <p className="">Username:</p>
            </div>
            <div className="flex grow items-center">
              <p className="overflow-hidden">{props.username}</p>
            </div>
            <div className="flex grow items-center">
              <button onClick={view} className="p-2 mr-2 bg-green-500 rounded-xl">View Profile</button>
            </div>
            <div className="flex grow items-center">
              {props.friend?(
                  <div>Following</div>
              ):(
                <button onClick={addFriend} className="p-2 bg-green-500 rounded-xl">Add Friend</button>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserTag