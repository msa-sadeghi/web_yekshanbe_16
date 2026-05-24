import { createContext, useContext, useEffect, useState } from "react";

export const cardContext = createContext()

export default function CardProvider({children}){
    const [card, setCard] = useState([])
    useEffect(()=>{
            async function getData() {
                try{
                    const response = await fetch(`http://127.0.0.1:5000/products`)
                    const data =  await response.json()
                    setCard(data.items)
                }
                catch(err){
                    console.log(err)
                }
            }
            getData()        
    }, [])
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


