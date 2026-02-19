import { lazy } from "react";
import Banner from "../components/banner/Banner"
const Navbar = lazy(() => import("./navbar/Navbar"));
const Footer = lazy(() => import("./footer/Footer"))
const About = lazy(() => import("./about/About"))
const FAQ = lazy(() => import("./faqs/FAQS"))
const Contact = lazy(() => import("./contactUs/ContactUs"))
const Testimonials = lazy(() => import("./testimonials/Testimonials"))
const ServicesAndSolutions = lazy(() => import("./servicesAndSolutions/ServicesAndSolutions"))
const WhoAreWe = lazy(() => import("./whoAreWe/WhoAreWe"))
const WhyChooseUs = lazy(() => import("./whyChooseUs/WhyChooseUs"))

export {
    Navbar,
    Banner,
    About,
    WhoAreWe,
    WhyChooseUs,
    FAQ,
    ServicesAndSolutions,
    Contact,
    Testimonials,
    Footer,
}