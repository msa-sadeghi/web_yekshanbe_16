import useCard from "./useCard"

function Header(){
    const {totalItems} = useCard()
    return(
        <header>
            <h1>Shop</h1>
            <span>basket items : {totalItems}</span>
        </header>
    )
}
export default Header