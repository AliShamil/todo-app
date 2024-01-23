import { createContext, useState } from 'react'

const Context = createContext();

export default Context;

export const ContextWrapper = ({children}) => {

const [authorized, setAuthorized] = useState(false);
const [mail, setMail] = useState("");
 
const contextData = {
    authorized: authorized,
    setAuthorized: setAuthorized,
    mail:mail,
    setMail:setMail,
};


    return (
        <Context.Provider value={contextData}>{children}</Context.Provider>
    )
}

