import { useEffect } from "react";
import {useForm} from 'react-hook-form'
import Input from "./Input";
import UserTag from "./UserTag";
import serverCalls from "../api/server";
import { useDispatch, useStore} from "react-redux"
import { chooseList } from "../redux/slices/UserSlice";

const SearchForm = () => {
    const dispatch = useDispatch()
    const store: any = useStore()

    type FormValues = {
        Username: string
    }

    const { register, handleSubmit, watch, formState, formState: { isValidating }} = useForm<FormValues>({ mode: "onChange" });
    const onSubmit = (data: FormValues) => {
        console.log(data);
    }
    const data = watch();

    const handleFetch = async () =>{
        if (formState.isValid && !isValidating) {
            if(data.Username != ""){
                const user = await serverCalls.searchUser(data)
                // console.log(user)
                dispatch(chooseList(user))
                // console.log(store.getState().user.userList)
            }
        }
    }

    useEffect(() => {
        handleFetch()
    }, [formState, data, isValidating]);

  return (
    <div>
        <form className="bg-green-500 p-2 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
            <div className="inline-flex align-middle">
                <p className="mt-6">Search Users here: </p>
                <Input {...register("Username")} name="Username" placeholder="Username"></Input>
            </div>
        </form>
        {store.getState().user.userList.map((user: any) =>(
            <div>
                <UserTag id={user.id} token={user.token} username={user.username} email={user.email}/>
            </div>
        ))}
    </div>
  )
}

export default SearchForm
