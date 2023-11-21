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
    console.log(user)
    const navigate = useNavigate()
    // console.log(userData)

    const view = () =>{
        localStorage.setItem("userID", userData.token)
        localStorage.setItem("friendID", props.friend_id)
        navigate("/users")
    }

    const remove = () =>{
        const data: Object = {
            id: props.id,
            token: user.uid
        }
        serverCalls.removeFriend(data)
        location.reload()
    }

  return (
    <div>
        <div className="flex px-2 justify-center">
            <div className="flex p-2 w-96 align-middle bg-slate-300 border border-black">
                <div className="grid grid-cols-3">
                    <div>
                        <button onClick={remove} className="hover:text-white">X</button>
                        <p className="">Username:</p>
                    </div>
                    <div className="overflow-hidden">
                        <p className="mt-6">{userData.username}</p>
                    </div>
                    <div className="justify-end">
                        <button onClick={view} className="p-2 mr-2 bg-green-500 rounded-xl">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Friend