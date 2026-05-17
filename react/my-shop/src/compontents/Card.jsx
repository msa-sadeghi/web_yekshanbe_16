import useCard from "./useCard"
function Card(){
    const {card} = useCard()
    return(
        <div>
            {card.map(product=>(
                <div key={product.id}>
                    <span>{product.name}</span>
                    <button>remove</button>
                </div>

            ))}
        </div>
    )
}

export default Card