import { useDispatch } from 'react-redux'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AppRoutes from './components/Routes/Routes'
import Sidebar from './components/Sidebar/Sidebar'
import { useEffect } from 'react'
import { getCategories } from './features/categories/categoriesSlice'
import { filterByPrice, getProducts } from './features/products/productsSlice'
import { useSelector } from 'react-redux'
import Products from './components/Products/Products'
import Categories from './components/Categories/Categories'
import Banner from './components/Banner/Banner'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  const {list} = useSelector(( {products} ) => products)

  const { products, categories} = useSelector((state) => state)


  useEffect(() => {
    if(!list.length) return

    dispatch(filterByPrice(100))
  }, [dispatch, list.length])
 

  return (
    <div className='App'>

      
        <Header />
        
        <div className="container">
          <Sidebar/>
          <AppRoutes/>  
        </div>

        <Products products={list} amount={5} title="trending"/>

        <Categories products={list} amount={5} title="Worth seeing"/>

        <Banner />

        <Products products={list} amount={5} title="Less than 100$"/>

        <Footer />

    </div>
  )
}

export default App
