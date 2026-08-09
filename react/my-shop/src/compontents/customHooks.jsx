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


function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  
  const toggle = () => setValue(prev => !prev)
  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)
  
  return [value, { toggle, setTrue, setFalse }]
}

// استفاده
function Modal() {
  const [isOpen, { toggle, setFalse }] = useToggle(false)
  
  return (
    <>
      <button onClick={toggle}>باز کردن مودال</button>
      
      {isOpen && (
        <div className="modal">
          <h2>مودال</h2>
          <button onClick={setFalse}>بستن</button>
        </div>
      )}
    </>
  )
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  
  return debouncedValue
}

// استفاده برای جستجو
function SearchProducts() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      // فقط بعد از 500ms توقف تایپ، جستجو انجام شود
      searchProducts(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])
  
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="جستجوی محصولات..."
    />
  )
}


function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return windowSize
}

// استفاده
function ResponsiveComponent() {
  const { width } = useWindowSize()
  
  return (
    <div>
      {width < 768 ? (
        <MobileMenu />
      ) : (
        <DesktopMenu />
      )}
    </div>
  )
}

function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
    // پاک کردن خطای فیلد
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      })
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await onSubmit(values)
      setValues(initialValues) // ریست فرم
    } catch (error) {
      setErrors({ submit: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const reset = () => {
    setValues(initialValues)
    setErrors({})
  }
  
  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setErrors,
    reset
  }
}

// استفاده
function ContactForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    { name: '', email: '', message: '' },
    async (data) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      if (!response.ok) throw new Error('خطا در ارسال')
    }
  )
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="نام"
      />
      
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="ایمیل"
      />
      
      <textarea
        name="message"
        value={values.message}
        onChange={handleChange}
        placeholder="پیام"
      />
      
      {errors.submit && <p>{errors.submit}</p>}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'در حال ارسال...' : 'ارسال'}
      </button>
    </form>
  )
}