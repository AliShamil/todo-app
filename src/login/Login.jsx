import { useEffect } from 'react'
import LoginCard from './components/LoginCard'
import { useLocation } from 'react-router-dom'
export default function Login() {
  const location = useLocation()
  
  useEffect(() => {
    console.log(location.state)
  }, [])
  return (
    
    <div className='flex justify-center items-center h-screen'>
      <LoginCard />
    </div>
  )
}