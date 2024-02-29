import serverCalls from "../api/server"
import useGetUser from "../custom-hooks/GetUser"

interface noteProps{
    date: string,
    body: string, 
    id?: string
}

const Note = (props: noteProps) => {
    const {user, getUser} = useGetUser()
    getUser


    const onClick = async () =>{
        const data = {
            id: props.id,
            token: user.uid
        }
        await serverCalls.deleteNote(data)
        location.reload()
    }

  return (
    <>
        <div className="flex grow justify-center mb-12">
            <div className="w-2/3 min-h-min shadow-xl rounded-lg grid grid-cols-8 border border-black">
                {props.id?(
                    <div>
                        <button className="mx-2" onClick={onClick}>X</button>
                    </div>
                ):(
                    <div></div>
                )}
                <div className="col-span-3 border-r border-black ">
                    <div className="flex grow h-full justify-center items-center">
                        <p className="mr-3 overflow-hidden">
                        {props.date}
                        </p>
                    </div>
                </div>
                <div className="col-span-4 ml-4">
                    <p className="overflow-hidden">
                    {props.body}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Note