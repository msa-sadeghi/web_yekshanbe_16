import { useState } from "react"
import Product from "./Product"
function ProductList(){
    const products = [
        {id:1, name:'asus laptop', price:20000, details:"this is laptop"},
        {id:2, name:'lenovo laptop', price:20000, details:"this is laptop"},
        {id:3, name:'Apple laptop', price:20000, details:"this is laptop"},
    ]
    const [searchTerm, setSearchTerm] = useState('')
    const filteredProducts = products.filter(
        p => p.name.includes(searchTerm)
    )
    return(
        <div>
            <input 
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            type="text" placeholder="product name..."/>
            {
                filteredProducts.map(p=>(
                    <Product key={p.id} name={p.name} price={p.price} details={p.details}/>
                )
            )
            }
        </div>
    )
}

export default ProductList