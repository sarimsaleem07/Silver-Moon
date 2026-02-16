import { lazy } from "react";
import Banner from "../components/banner/Banner"
const Navbar = lazy(() => import("./navbar/Navbar"));
const Footer = lazy(() => import("./footer/Footer"))
const About = lazy(() => import("./about/About"))
const FAQ = lazy(() => import("./faqs/FAQS"))

export {
    Navbar,
    Banner,
    About,
    FAQ,
    Footer,
}