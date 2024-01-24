import React from 'react'
import { useState, useContext } from 'react'
import Context from '../../ContextWrapper';
import { useNavigate } from 'react-router-dom';
export default function LoginCard() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false)
  const { mail, setAuthorized, setMail } = useContext(Context);
  return (
    <form className='flex flex-col items-center justify-center w-screen sm:w-[700px] h-screen sm:h-[310px] shadow-md shadow-zinc-300 md:rounded-[13px]'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-center'>LOGIN FORM</h1>
      <div className='mb-4'>

        <label htmlFor="email" className={`${isValid ? 'text-zinc-400 ' : 'text-red-400 '} md:text-base lg:text-lg`}>Email:</label>
        <input
          id="email"
          onChange={(e) => {
            setMail(e.target.value);
            setIsValid(e.target.checkValidity());
          }}
          required={true}
          value={mail}
          placeholder='example@example.com'

          className={`${isValid ? 'border-zinc-300' : 'bg-red-200 text-red-400 placeholder-red-400'} w-full border rounded-[5px] my-2 p-2 md:text-lg`}
          type="email"
        />
      </div>
      <button
        disabled={!isValid}
        onClick={() => {
          setAuthorized(isValid);
          navigate("/mainpage");
        }}
        className={` ${isValid ? "bg-[#f6b819] hover:bg-yellow-700" : "bg-[#d7d7d7] text-[#A4A4A4] pointer-events-none"} py-2 px-4 rounded-[10px] text-base md:text-lg`}
        type='submit'
      >
        Submit
      </button>
    </form>

  )
}

