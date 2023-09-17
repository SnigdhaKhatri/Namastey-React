import React from "react"
import ReactDOM from "react-dom/client"
// Two types to import/export
// This comes from export default Header
import Header from "./components/Header";
import Body from "./components/Body";
// This comes from export const Footer
import { Footer } from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";

const AppLayout = () => (
    <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <ResMenu/>,
                errorElement: <Error/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);