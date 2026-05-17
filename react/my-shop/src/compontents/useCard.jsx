import { useContext } from "react"
import { cardContext } from "./CardProvider"
export default function useCard(){
    const context = useContext(cardContext)
    return context
}
