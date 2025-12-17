
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import HomeLayout from './components/HomeLayout.jsx'
import ProductList from './components/ProductsList.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import BlogsList from './components/BlogsList.jsx'
import BlogDetails from './components/BlogDetails.jsx'
import BlogsDetails from './components/BlogDetails.jsx'
import LoginForm from './components/LoginForm.jsx'
import { ToastContainer } from 'react-toastify'
// import ProtectedRoute from './components/ProtectedRoute.jsx'
// import AdminPage from './components/AdminPage.jsx'    


createRoot(document.getElementById('root')).render(
  <>
  <ToastContainer/>
  <BrowserRouter>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<App />} />
        <Route path='/Products'>
          <Route index element={<ProductList />} />
          <Route path='details' element={<div>Product Details</div>} />
        </Route>
        <Route path='/blogs' element={<BlogsList/>} />
        <Route path='/blogs/:id' element={<BlogDetails/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<div>Admin</div>} />
        {/* <Route path='/adminPage' element={<ProtectedRoute> <AdminPage/></ProtectedRoute>}/> */}
      </Route>
    </Routes>
  </BrowserRouter>
</>
)
