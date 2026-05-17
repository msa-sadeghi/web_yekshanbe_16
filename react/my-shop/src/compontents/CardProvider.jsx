import { createContext, useContext, useState } from "react";

export const cardContext = createContext()

export default function CardProvider({children}){
    const [card, setCard] = useState([
        {id:1, name:'product1'},
        {id:2, name:'product2'},
        {id:3, name:'product3'},
    ])
    const totalItems = card.length
    const value = {
        card,
        totalItems
    }
    return(
        <cardContext.Provider value={value}>
            {children}
        </cardContext.Provider>
    )
}


