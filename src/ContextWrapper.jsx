import { createContext, useReducer, useState } from 'react'

const Context = createContext();

export default Context;

export const ContextWrapper = ({ children }) => {
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
    const [authorized, setAuthorized] = useState(false);
    const [mail, setMail] = useState("");
    const [state, dispatch] = useReducer(reducer, { type: "" });
    const [cards, setCards] = useState([]);
    const [openModal, setOpenModal] = useState("");

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

    const contextData = {
        authorized: authorized,
        setAuthorized: setAuthorized,
        mail: mail,
        setMail: setMail,
        state: state,
        dispatch: dispatch,
        getData: getData,
        cards: cards,
        openModal, openModal,
        setOpenModal, setOpenModal,
    };


    return (
        <Context.Provider value={contextData}>{children}</Context.Provider>
    )
}

