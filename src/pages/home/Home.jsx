import React from 'react'
import { About, Banner, Contact, FAQ, ServicesAndSolutions, Testimonials, WhoAreWe, WhyChooseUs } from '../../components/Index'

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <WhoAreWe />
            <WhyChooseUs />
            <ServicesAndSolutions />
            <FAQ />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home