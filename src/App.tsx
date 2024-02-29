import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Search from "./pages/Search"
import OtherProfiles from './pages/OtherProfiles'

function App(){

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Provider store={store}>
          <Routes>
            <Route path={'/'} key={0} element={<Home/>}/>
            <Route path={'/profile'} key={2} element={<Profile/>}/>
            <Route path={'/search'} key={3} element={<Search/>}/>
            <Route path={'/users'} key={4} element={<OtherProfiles/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
