import useGetNotes from "../custom-hooks/GetNotes"
import Note from "../components/Note"

interface notes{
    date: string,
    note: string, 
    id: string
}

const OtherProfiles = () => {
    const id = localStorage.getItem("userID")

    const {noteData} = useGetNotes(id)

  return (
    <div>
        <div className="flex grow justify-center mt-20">
            <div className="mt-5">
                {noteData.map((note: notes) =>{
                    // console.log(note)
                    return(<Note date={note.date} body={note.note} />)
                })}
            </div>
        </div>
    </div>
  )
}

export default OtherProfiles