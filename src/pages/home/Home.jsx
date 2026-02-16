import React from 'react'
import { About, Banner, Contact, FAQ, ServicesAndSolutions, Testimonials, WhoAreWe } from '../../components/Index'

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <WhoAreWe />
            <FAQ />
            <ServicesAndSolutions />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home