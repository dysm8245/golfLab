import { useForm } from 'react-hook-form'
import Input from './Input'
import useGetUser from '../custom-hooks/GetUser'
import serverCalls from '../api/server'

const ProfileForm = () => {
    const {register, handleSubmit} = useForm({})
    const {user, getUser} = useGetUser()
    getUser

    const onSubmit = async (data: any) =>{
        const info: Object = {
            username: data.Username,
            best: data.bestScore,
            favorite: data.favCourse,
            handicap: data.Handicap,
            token: user.uid
        }
        await serverCalls.updateProfile(info)
        location.reload()
    }

  return (
    <div>
        <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("Username")} name="Username" placeholder="Username"></Input>
            <Input {...register("bestScore")} name="bestScore" placeholder="Best Score"></Input>
            <Input {...register("favCourse")} name="favCourse" placeholder="Favorite Course"></Input>
            <Input {...register("Handicap")} name="Handicap" placeholder="Handicap"></Input>
            <div className="flex grow mt-5 justify-center">
                <button className="bg-white p-3 rounded-full">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ProfileForm