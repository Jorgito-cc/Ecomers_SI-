import { useState } from 'react'

import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'

/* rutasss y lo componentes a lo que llega  */
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Cart } from './pages/Cart'
import { Shop } from './pages/Shop'
import { Sliders } from './components/SliderCart/Sliders'
import { Banner } from './components/Banner/Banner'
import { Loader } from './components/Loader/Loader'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Product } from './pages/Product'
import { FormLogin } from './components/Login/FormLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='login' element={<FormLogin/>}/>
        <Route path='/shop' element={ <Shop/>}/>
        <Route path='/shop/:id' element={ <Product/>}/>
        <Route path='/cart' element={ <Cart/>}/>
        <Route path='/contact' element={ <Contact/>}/>
      </Routes>
    </BrowserRouter>
   
   
     <Footer/>
    </>
  )
}

export default App
