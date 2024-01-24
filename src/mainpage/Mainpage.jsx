import { useState, useEffect, useContext } from 'react'
import Navbar from './components/Navbar'
import TodoCard from './components/TodoCard'
import CreateCard from './components/CreateCard'
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'
import Context from '../ContextWrapper'

function Mainpage() {
  
  const {mail,getData,state,dispatch,cards,openModal } = useContext(Context);
  const [activeCard, setActiveCard] = useState();

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className={`${openModal ? 'overflow-hidden' : null} `}>
      
      <Navbar />
      <main className='mx-5 my-5'>

        <button
          onClick={() => {
            dispatch({ type: "create" })

          }}
          className='w-full md:w-fit bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 '>Create card</button>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 px-15'>
          {cards.length ? (
            cards.map((card) => (
              <TodoCard key={card.id} data={card} setActiveCard={setActiveCard} />

            ))
          ) : (
            <p className='text-center col-span-3 mt-10'>No cards found</p>
          )

          }



        </div>
      </main>


      {state.type === "delete" &&
        (
          <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
            <DeleteCard activeCard={activeCard}  />
          </div>
        )}

      {
        state.type === "create" &&
        (
          <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
            <CreateCard   />
          </div>
        )}

      {state.type === "edit" &&
        (
          <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
            <EditCard activeCard={activeCard}   />
          </div>
        )} 

    </div>
  )
}

export default Mainpage