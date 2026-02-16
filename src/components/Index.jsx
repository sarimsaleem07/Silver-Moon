import { lazy } from "react";

const Navbar = lazy(() => import("./navbar/Navbar"));
const Banner = lazy(() => import("./banner/Banner"));
const Footer = lazy(() => import("./footer/Footer"))

export {
    Navbar,
    Banner,
    Footer,
}