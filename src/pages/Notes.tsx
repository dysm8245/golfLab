import { useState } from 'react'
import Note from '../components/Note'
import useGetNotes from '../custom-hooks/GetNotes'
import Modal from "../components/Modal"
import NoteForm from '../components/NoteForm'

interface notes{
    date: string,
    note: string, 
    id: string
}

const Notes = () => {
    const {noteData} = useGetNotes()
    const [open, setOpen] = useState(false)
    const [option, setOption] = useState("Add a new note")

    const handleOpen = () =>{
        setOpen(!open)
        if(option == "Close Form"){
            setOption("Add a new note")
        }
        else{
            setOption("Close Form")
        }
    }

  return (
    <div>
        <div className="flex grow justify-center mt-20">
            <div className="mt-5">
                {open?(
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
        <div className="flex grow justify-center">
            <button className="bg-green-500 p-3 rounded-full" onClick={handleOpen}>{option}</button>
        </div>
    </div>
  )
}

export default Notes