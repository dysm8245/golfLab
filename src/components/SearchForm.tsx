import { useEffect } from "react";
import {useForm} from 'react-hook-form'
import Input from "./Input";
import UserTag from "./UserTag";
import serverCalls from "../api/server";
import { useDispatch, useStore} from "react-redux"
import { chooseList } from "../redux/slices/UserSlice";
import useGetFriends from "../custom-hooks/GetFriends";

const SearchForm = () => {
    const {friendData} = useGetFriends()
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

    console.log(friendData)
    console.log(store.getState().user.userList)

  return (
    <div>
        <form className="p-2 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
            <div className="inline-flex align-middle">
                <p className="mt-6">Search Users here: </p>
                <Input {...register("Username")} name="Username" placeholder="Username"></Input>
            </div>
        </form>
        {store.getState().user.userList.map((user: any) =>{
            if(friendData.some((friend: any) => friend.friend_id === user.id)){
                return(
                    <div>
                        <UserTag friend={true} token={user.token} username={user.username} id={user.id} email={user.email}></UserTag>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <UserTag friend={false} token={user.token} username={user.username} id={user.id} email={user.email}></UserTag>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default SearchForm
