import { useContext } from 'react'
import './App.css'
import Mainpage from './mainpage/Mainpage'
import Login from './login/Login'
import Context from './ContextWrapper'


export default function App() {
  const {authorized} = useContext(Context);
  return authorized ? <Mainpage /> : <Login/> 
}