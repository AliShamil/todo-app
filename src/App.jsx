import { useContext } from 'react'
import './App.css'
import Mainpage from './mainpage/Mainpage'
import Login from './login/Login'
import Details from './details/Details'
import Context from './ContextWrapper'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'


export default function App() {
  const {authorized} = useContext(Context);

  return(
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace/>}></Route>
      {authorized ? 
      (<Route path="/mainpage" element={<Mainpage/>}/>):
      (<Route path="/login" element={<Login/>}/>)}

      <Route path='/details/:message' element={<Details/>} />

      <Route path='*' element={<NotFound/>}/>
    </Routes>

  );
}