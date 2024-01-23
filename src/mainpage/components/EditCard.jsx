import { useState } from 'react'

function EditCard({ dispatch,activeCard }) {
  const [formData, setFormData] = useState({
    title: activeCard.title,
    description: activeCard.description,
});
const updateCard = async (cardId, updatedData) => {
  try {
    const response = await fetch(`http://localhost:3000/cards/${cardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    console.log("Updated Card:", data);
  } catch (error) {
    console.error("Error updating card:", error);
  }
};

const handleSave = (e) => {
    e.preventDefault()
    const updatedCard = { ...activeCard, ...formData };
    updateCard(activeCard._id,updatedCard);
    dispatch({ type: "reset" });
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevData => ({
      ...prevData,
      [name]: value,
  }));
};
  return (
    <form action="" className='flex flex-col text-center sm:text-left items-center w-screen h-screen md:w-[700px] md:h-[350px] justify-center md:rounded-[13px] bg-white relative'>
      <div className='w-[100%]'>
        <button className='w-4 h-4 bg-red-600 rounded-full absolute top-[10px] right-[10px]'
          onClick={() => {
            dispatch({ type: "reset" });
          }}></button>
      </div>
      <h1 className='text-3xl font-bold mb-5'>EDIT CARD</h1>
      <div className='flex flex-col w-[80%]'>
        <label htmlFor="" className='text-zinc-600 text-lg'>Title:</label>
        <input  onChange={(e) => handleChange(e)} value={formData.title} required className='border border-zinc-300 my-2 h-[40px] p-1 rounded-[6px]'  type="text" name="title"  />
        <label  htmlFor="" className='text-zinc-600 text-lg'>Description:</label>
        <input onChange={(e) => handleChange(e)} value={formData.description} required className='border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1' type="text" name="description" id=""/>
        <div className='flex md:justify-end  justify-center  h-[20%] items-center mt-[10px]'>
          <button className='border border-zinc-300 py-2 px-5 rounded-[5px] font-bold hover:bg-[#DFDFDF]'
            onClick={() => {
              dispatch({ type: "reset" });
            }}>Close</button>

          <button onClick={(e) => handleSave(e)} className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-3 hover:bg-[#F6AB1A]'>Save</button>
        </div>
      </div>
    </form>
  )
}

export default EditCard