import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './page/Home.jsx'
import Menu from './page/Menu.jsx'
import "./page/css/Home.css"
import PageCart from './page/PageCart.jsx'
import ProductDetail from './page/ProductDetail.jsx'
function App() {

  return (
    
    <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product/:id" element={<ProductDetail/>}></Route>
      <Route path="/cart" element={<PageCart/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
