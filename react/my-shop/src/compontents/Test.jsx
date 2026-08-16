const ProductCard = React.memo(({ product, onAddToCart }) => {
  console.log('ProductCard rendered:', product.id)
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString('fa-IR')} تومان</p>
      <button onClick={() => onAddToCart(product)}>
        افزودن به سبد
      </button>
    </div>
  )
})

// لیست محصولات
function ProductList() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState('all')
  
  // دریافت محصولات
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts)
  }, [])
  
  // فیلتر با useMemo
  const filteredProducts = useMemo(() => {
    if (filter === 'all') return products
    return products.filter(p => p.category === filter)
  }, [products, filter])
  
  // تابع افزودن با useCallback
  const handleAddToCart = useCallback((product) => {
    setCart(prev => [...prev, product])
    alert(`${product.name} به سبد اضافه شد`)
  }, [])
  
  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">همه محصولات</option>
        <option value="laptop">لپ‌تاپ</option>
        <option value="phone">گوشی</option>
      </select>
      
      <p>تعداد در سبد: {cart.length}</p>
      
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}