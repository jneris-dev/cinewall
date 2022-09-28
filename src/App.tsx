import { Navbar } from "./components/Navbar"

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Footer } from "./components/Footer";


function App() {

    return (
        <BrowserRouter>
            <main>
                <Navbar />
                <section className="w-full container h-auto px-3 mx-auto notebook:pt-16 pt-[152px]">
                    <Router />
                </section>
                <Footer />
            </main>
        </BrowserRouter>
    )
}

export default App
