import Background from "../assets/golfcourse.jpg"
import SearchForm from "../components/SearchForm"

const Search = () => {
  
  return (
    <div style={{backgroundImage: `url(${ Background })`}} className="h-screen bg-cover bg-fixed">
      <div className="flex flex-col grow justify-center h-full">
        <div className="flex grow justify-center mt-24">
            <SearchForm/>
        </div>
      </div>
    </div>
  )
}

export default Search