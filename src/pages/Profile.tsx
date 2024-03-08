import useGetFriends from "../custom-hooks/GetFriends"
import Friend from "../components/Friend"
import useGetCurrent from "../custom-hooks/GetCurrentUser"
import useGetNotes from "../custom-hooks/GetNotes"
import Modal from "../components/Modal"
import NoteForm from "../components/NoteForm"
import Note from "../components/Note"
import ProfileForm from "../components/ProfileForm"
import { storage } from "../config/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useState } from "react"
import serverCalls from "../api/server"
import useGetUser from "../custom-hooks/GetUser"
import Default from "../assets/default.jpg"

interface notes{
  date: string,
  note: string, 
  id: string
}

const Profile = () => {
  const [file, setFile] = useState<any>("")
  const [percent, setPercent] = useState(0) //tracks download speed of profile pic
  const {friendData} = useGetFriends() //gets users friends
  const {current} = useGetCurrent() //for displaying signed in users profile info
  const [open, setOpen] = useState(false) //for opening profile form
  const [upload, setUpload] = useState(false) //for opening file upload buttons
  const {noteData} = useGetNotes() //getting user notes
  const [openNote, setNoteOpen] = useState(false) //for opening form to make a new note
  const [option, setOption] = useState("Add a new note") //for changing button description
  const {user, getUser} = useGetUser()
  getUser

  const handleOpen = () =>{
      setNoteOpen(!openNote)
      if(option == "Close Form"){
          setOption("Add a new note")
      }
      else{
          setOption("Close Form")
      }
  }

  const updatePhoto = () =>{
    setUpload(!upload)
  }

  const onClick = () =>{
    setOpen(!open)
  }
 
    // grabs file input
  function handleChange(event:any) {
      setFile(event.target.files[0]);
  }

  //upload image to firebase
  const handleUpload = () => {
      if (!file) {
          alert("Please upload an image first!");
      }

      const storageRef = ref(storage, `/files/${file.name}`);

      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
          "state_changed",
          (snapshot: any) => {
              const percent = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );

              // update progress
              setPercent(percent);
          },
          (err: any) => console.log(err),
          () => {
              // download url
              getDownloadURL(uploadTask.snapshot.ref).then(async(url) => {
                  const data: any = {
                    token: user.uid,
                    profilePic: url
                  }
                  await serverCalls.addProfilePic(data)
                  location.reload()
              });
          }
      );
  };

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-5">
        <div className="col-span-1">
          <div className="flex grow justify-center">
            <div className="grid grid-cols-1">
              <div className="mt-10">
                <div className="flex grow">
                  <h1 className="text-2xl mt-5">Welcome <b>{current.username}</b></h1>
                </div>
              </div>
              <div>
                {current.profileURL?(
                  <img className="rounded-full mt-5" src={current.profileURL} alt="Profile Pic" width={150} onClick={updatePhoto}/>
                ):(
                  <img className="rounded-full mt-5" src={Default} alt="Profile Pic" width={150} onClick={updatePhoto}/>
                )}
                {upload?(
                  <>
                    <input type="file" onChange={handleChange} accept="/image/*" />
                    <div className="inline-flex items-center">
                      <button className="bg-green-500 rounded-xl p-1" onClick={handleUpload}>Upload Profile Pic</button>
                      <p>{percent}% done</p>
                    </div>
                  </>
                ):(
                  <></>
                )}
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
        <div className="col-span-2">
          {open?(
            <Modal element={<ProfileForm/>}/>
          ):(
            <>
              <div>
                <div className="flex grow justify-center mt-10">
                  <h1 className="font-bold text-xl mt-6">Your Notes</h1>
                </div>
                <div className="flex grow justify-center">
                  <div className="mt-5">
                    {openNote?(
                      <Modal element={<NoteForm/>} />
                    ):(
                      <></>
                    )}
                    {noteData.map((note: notes) =>{
                      // console.log(note)
                      return(<Note id={note.id} date={note.date} body={note.note} />)
                    })}
                
                  </div>
                </div>
                <div className="flex grow justify-center mt-5">
                    <button className="bg-green-500 p-3 rounded-full" onClick={handleOpen}>{option}</button>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="col-span-2 mt-10">
          <div className="flex grow justify-center">
            <h1 className="font-bold text-xl mt-6">Your Friends</h1>
          </div>
          <div className="flex grow justify-center">
            <div className="overflow-auto mt-5 sm:w-1/2 xl:w-full max-h-100">
              {friendData.map((friend: any) => (
                <Friend id={friend.id} friend_id={friend.friend_id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Profile