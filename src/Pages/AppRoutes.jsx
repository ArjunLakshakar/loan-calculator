import React from 'react'
import { Navbar } from '../Components/Header/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Components/Home/Home'
import { ExchangeRate } from '../Components/ExchangeRate/ExchangeRate'
import { About } from '../Components/About/About'
import { Footer } from '../Components/Footer/Footer'
import { ErrorPage } from '../Components/ErrorPage/Errorpage'



export const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exchange-rate" element={<ExchangeRate />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/errorpage" element={<ErrorPage />} />
                    {/* 
                    <Route path="/exchange-rate" element={<ExchangeRate />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/errorpage" element={<ErrorPage />} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
