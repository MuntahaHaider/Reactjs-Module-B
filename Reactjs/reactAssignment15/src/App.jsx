
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home/Home'
import NewUser from './Screens/NewUser/NewUser'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='createuser' element={<NewUser />}/>
      </Routes>
    </>
  )
}

export default App
