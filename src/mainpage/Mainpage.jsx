import { useState, useEffect, useContext, useReducer } from 'react'
import Navbar from './components/Navbar'
import TodoCard from './components/TodoCard'
import CreateCard from './components/CreateCard'
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'
import Context from '../ContextWrapper'

function Mainpage() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "create":
        return { type: state.type = "create" }
      case "edit":
        return { type: state.type = "edit" }
      case "delete":
        return { type: state.type = "delete" }
      case "reset":
        return { type: state.type = "" }
      default:
        return state;
    }
  }
  const { mail } = useContext(Context);
  const [cards, setCards] = useState([]);
  const [filteredCards, setfilteredCards] = useState([]);
  const [activeCard, setActiveCard] = useState();
  const [openModal, setOpenModal] = useState("");
  const [state, dispatch] = useReducer(reducer, { type: "" });
  
  useEffect(() => {
    setfilteredCards(cards.filter((card) => card.author === mail));
  }, [cards])
 
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/cards/${mail}`
        );
        const results = await response.json();
        setCards(results);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [cards])

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
          {filteredCards.length ? (
            filteredCards.map((card) => (
              <TodoCard key={card.id} data={card} dispatch={dispatch} setActiveCard={setActiveCard} />

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
            <DeleteCard activeCard={activeCard} dispatch={dispatch} />
          </div>
        )}

      {
        state.type === "create" &&
        (
          <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
            <CreateCard  dispatch={dispatch} mail={mail} />
          </div>
        )}

      {state.type === "edit" &&
        (
          <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
            <EditCard activeCard={activeCard} dispatch={dispatch}  />
          </div>
        )} 

    </div>
  )
}

export default Mainpage