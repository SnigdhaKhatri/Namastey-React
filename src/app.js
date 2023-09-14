import React from "react"
import ReactDOM from "react-dom/client"
// Two types to import/export
// This comes from export default Header
import Header from "./components/Header";
import Body from "./components/Body";
// This comes from export const Footer
import { Footer } from "./components/Footer";

const AppLayout = () => (
    <div className="app">
        <Header/>
        <Body/>
        <Footer/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);