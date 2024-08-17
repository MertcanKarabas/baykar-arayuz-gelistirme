import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { MasterCSS } from "../assets/css/masterCSS"

const MasterLayout = ({ children }) => {
    return (
        <div className={`flex flex-col justify-between min-h-screen ${MasterCSS.colors}`}>
            <Header />
            <div className="min-h-full">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MasterLayout