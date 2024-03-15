import useGetProfile from "../custom-hooks/GetProfile"
import { useNavigate } from "react-router-dom"
import useGetUser from "../custom-hooks/GetUser"
import serverCalls from "../api/server"

interface friendProps{
    id: string,
    friend_id: string
}

const Friend = (props: friendProps) => {
    const {userData} = useGetProfile(props.friend_id)
    const {user, getUser} = useGetUser()
    getUser
    const navigate = useNavigate()
    // console.log(userData)

    const view = () =>{
        localStorage.setItem("userID", userData.token)
        localStorage.setItem("friendID", props.friend_id)
        navigate("/users")
    }

    const remove = async () =>{
        const data: Object = {
            id: props.id,
            token: user.uid
        }
        await serverCalls.removeFriend(data)
        location.reload()
    }

  return (
    <div>
        <div className="flex align-middle p-5 bg-slate-300 border border-black">
            <div className="grid grid-cols-4">
                <div className="flex grow items-center">
                    <p className="text-xs lg:text-xl font-bold">Username:</p>
                </div>
                <div className="flex grow items-center">
                    <p className="text-xs lg:text-xl">{userData.username}</p>
                </div>
                <div className="flex grow items-center justify-center">
                    <button onClick={view} className="bg-green-500 rounded-xl p-1">View Profile</button>
                </div>
                <div className="flex grow items-center justify-end">
                    <button onClick={remove} className="bg-red-500 rounded-xl p-1">Remove Friend</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Friend