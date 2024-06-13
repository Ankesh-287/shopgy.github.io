import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from '../pages/Home.js';
import Login from '../pages/Login.js';
import Singup from '../pages/Signup.js';
import Contact from '../pages/Contact.js';
import Shop from '../pages/Shop.js';
import About from '../pages/About.js';
import Counter from '../pages/Counter.js';
import '../style/Shop.css'

export default function Router() {
    const Layout = () => {
        return (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        )
      }
      const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/signup" element={<Singup/>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/Counter" element={<Counter />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
      }
    return (
        <BrowserRoutes />
      );
    }