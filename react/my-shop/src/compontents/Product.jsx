import { useState } from "react"

function Product({ name, price,  details}){
    const [showOrHide, setShowOrHide] = useState(false)

    const handleToggle = ()=>{
        setShowOrHide(!showOrHide)
    }

    const Toman = (value)=>{
        return value.toLocaleString('fa-IR')
    }
    return(
        <div>
            <h1>{name}</h1>
            <p>{Toman(price)}</p>
            <button onClick={handleToggle}>

            {showOrHide ? "Hide Details" : "Show Details"}
            </button>
            {showOrHide && <p>{details}</p>}
        </div>
    )
}

export default Product