import { useState } from 'react'
import '../assets/style.css'
function CheckoutForm(){
    const [formData, setFormData] = useState({
        fullName:'',
        email:'',
        address:'',
        city:'',
        postalCode:'',
        paymentMethod:'online'
    })
    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleClick = (e)=>{
        e.preventDefault()
        console.log(formData)
    }
    return(
        <form action="">
            <input type="text"
            name='fullName'
            onChange={(e)=>handleChange(e)}
            placeholder="name ..."
            />
            <input type="email"
            name='email'
            onChange={(e)=>handleChange(e)}
            placeholder="email ..."
            />
            <textarea name="address" id="" onChange={(e)=>handleChange(e)} placeholder="address"/>
            <input type="text" placeholder="city" name='city' onChange={(e)=>handleChange(e)}/>
            <input type="text" placeholder="postalCode"name='postalCode' onChange={(e)=>handleChange(e)} />
            <select name="paymentMethod" id="" onChange={(e)=>handleChange(e)}>
                <option value="online">online</option>
                <option value="cash">cash</option>
            </select>
                <button type="submit" onClick={handleClick}>pay</button>
        </form>
    )
}

export default CheckoutForm