import {useContext} from 'react'
import Context from '../../ContextWrapper';
function TodoCard({setActiveCard, data}) {
  const {dispatch} = useContext(Context);
  return (
    <>
  <div className='w-auto md:mr-8 my-5'>
    <div className='border border-zinc-300 rounded-[5px]'>
      <div className='bg-[#efefef] p-[15px] md:p-[30px]'>
        <h1 className='text-xl truncate  md:text-3xl font-bold'>{data.title}</h1>
        <p className='my-2 text-clip overflow-hidden text-justify font-bold text-[#555] text-sm md:text-base'>
        {data.description}
        </p>
      </div>
      <div className='flex justify-center flex-col sm:flex-row sm:justify-end items-center rounded-b-[7px] p-4 bg-zinc-300 h-auto'>
        <button 
        onClick={()=>{
          setActiveCard(data);
          dispatch({ type: "edit" });
          
        }}
        className='mx-3 sm:mx-1 text-lg w-full sm:w-auto font-bold rounded-[7px] h-3/5 py-2 px-6 bg-[#f6b819] hover:bg-yellow-700'>Edit</button>
        <button 
         onClick={()=>{
          setActiveCard(data)
          dispatch({ type: "delete" });
        }}
        className='mx-3 sm:mx-1 mt-4 sm:mt-0 text-lg w-full sm:w-auto font-bold rounded-[7px] h-3/5 py-2 px-5 bg-[#f6b819] hover:bg-yellow-700'>Delete</button>
      </div>
    </div>
  </div>


    </>
  )
}

export default TodoCard