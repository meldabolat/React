import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Comp from './Comp.jsx'
import './index.css'
import Product from './Product.jsx'
import Hooks from './Hooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Product productName ="Elbise" price ={3200}/>
    <Product productName = "Pantolon" price={500}/> */}
    <App />
  </StrictMode>,
)
