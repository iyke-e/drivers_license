import React from 'react'
import CounterDisplay from './components/CounterDisplay'
import { Hero } from "./components/Hero"
import LicenseProcess from './components/LicenseProcess'
import NewsLetter from './components/NewsLetter'
import Services from './components/Services'



const HomePage = () => {
    return (
        <div className='relative'>
            <Hero />
            <LicenseProcess />
            <Services />
            <CounterDisplay />
            <NewsLetter />
            {/* <Testimonials /> */}

        </div>
    )
}

export default HomePage


