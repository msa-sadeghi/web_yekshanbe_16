import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    let isMounted = true
    
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const json = await response.json()
        
        if (isMounted) {
          setData(json)
          setLoading(false)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message)
          setLoading(false)
        }
      }
    }
    
    fetchData()
    
    return () => {
      isMounted = false
    }
  }, [url])
  
  return { data, loading, error }
}

// استفاده
function ProductList() {
  const { data: products, loading, error } = useFetch(
    'https://api.example.com/products'
  )
  
  if (loading) return <p>در حال بارگذاری...</p>
  if (error) return <p>خطا: {error}</p>
  
  return (
    <div>
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}


function useLocalStorage(key, initialValue) {
  // دریافت مقدار اولیه از localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })
  
  // تابع برای تنظیم مقدار
  const setValue = (value) => {
    try {
      // اجازه به value که تابع باشد
      const valueToStore = 
        value instanceof Function ? value(storedValue) : value
      
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }
  
  return [storedValue, setValue]
}

// استفاده
function ShoppingCart() {
  const [cart, setCart] = useLocalStorage('cart', [])
  
  const addToCart = (product) => {
    setCart([...cart, product])
  }
  
  const clearCart = () => {
    setCart([])
  }
  
  return (
    <div>
      <p>تعداد محصولات: {cart.length}</p>
      <button onClick={clearCart}>خالی کردن سبد</button>
    </div>
  )
}