import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import Login from './Components/Login/Login';
import Signup from './Components/Sigunp/Signup';
import IconButtons from './Components/IconButtons/IconButtons';
import Selects from './Components/Selects/Selects';
import MultipleSelect from './Components/MultipleSelect/MultipleSelect';
import MultipleSelectChip from './Components/ChipSelect/ChipSelect';
import MultipleSelectCheckmarks from './Components/CheckmarkSelect/CheckmarkSelect';

function App() {

  return (
    <>
      <Navbar/>

      <Input/>

      <IconButtons/>

      <Selects/>
      <MultipleSelect/>
      <MultipleSelectChip/>
      <MultipleSelectCheckmarks/>

      <Login />
      <Signup/>
      <Button/>
      <Footer/>
    </>
  )
}

export default App
