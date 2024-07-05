import './App.css'
import Navebar from './assets/Navebar'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import WhatsAppButton from './assets/WhatsAppButton'
import Footer from './assets/Footer'
import MainHome from './assets/MainHome'
import AboutUs from './component/AboutUs'
import Product from './component/Product'
import ContactUs from './component/ContactUs'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpecificProduct from './component/SpecificProduct'
import Infrastructure from './component/Infrastructure'

function App() {


  return (
    <> 
     <BrowserRouter>
     <Navebar />
     <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/products/:productId" element={<SpecificProduct />} />
      </Routes>
     
     <Footer />
     <WhatsAppButton />
     <ToastContainer />
    </BrowserRouter>
    </>
  )
}

export default App
