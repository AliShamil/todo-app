import {useContext} from 'react'
import Context from '../../ContextWrapper';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const {mail,setAuthorized} = useContext(Context);
    const navigate = useNavigate();
    return (
        <nav className=" md:px-8 lg:px-16 text-lg md:text-xl lg:text-2xl font-bold text-black flex flex-col md:flex-row justify-between items-center bg-[#E7E7E7] w-full md:w-screen h-[auto] md:h-32">
            <label className="mb-2 md:mb-0" htmlFor="">
            {mail}
            </label>
            <button 
            onClick={() =>{
                setAuthorized(false)
                navigate("/login",{state:"Logout finsihed!"})
              }}
             className='w-screen  md:max-w-[202px] max-h-[61px] md:ml-4 bg-yellow-500 py-2 px-4 md:rounded-[8px] hover:bg-yellow-700 focus:outline-none focus:ring focus:border-yellow-700 transition-all duration-300' type='submit'>
                Log Out
            </button>
        </nav>


    )
}

export default Navbar