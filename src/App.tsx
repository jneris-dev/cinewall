import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import { Navbar } from "./components/Navbar"
import { Sidebar } from "./components/Sidebar";
import { Router } from "./router/Router";
import { Footer } from "./components/Footer";


function App() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <BrowserRouter>
            <main>
                <Navbar toggleMenu={setOpenMenu} stateMenu={openMenu} />
                <Sidebar toggleMenu={setOpenMenu} stateMenu={openMenu} />
                <section className="w-full container h-auto px-3 mx-auto notebook:pt-16 pt-[152px] min-h-[calc(100vh-204px)]">
                    <Router />
                </section>
                <Footer />
            </main>
        </BrowserRouter>
    )
}

export default App
