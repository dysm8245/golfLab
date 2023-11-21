import { useForm } from 'react-hook-form'
import Input from './Input'
// import { useStore } from 'react-redux'
// import { chooseCaption } from "../redux/slices/MemeSlice"
// import serverCalls from '../api/server'
import useGetUser from '../custom-hooks/GetUser'
import serverCalls from '../api/server'
// import { useNavigate } from 'react-router-dom'

const NoteForm = () => {
    const {register, handleSubmit} = useForm({})
    const {user, getUser} = useGetUser()
    // const navigate = useNavigate()
    // const store: any = useStore()

    const onSubmit = async (data: any) =>{
        getUser
        const info: Object = {
            message: data.Note,
            token: user.uid
        }
        serverCalls.addNotes(info)
        location.reload()
    }

  return (
    <div>
        <form className="bg-green-500 p-5 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("Note")} name="Note" placeholder="Note"></Input>
            <div className="flex grow mt-5 justify-center">
                <button className="bg-white p-3 rounded-full">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default NoteForm