import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/main.scss"
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Error from "./components/Error.jsx"
import Footer from "./components/Footer.jsx"
import Lodging from "./pages/Lodging.jsx"
import logements from "./data/logements.json"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* Cette partie sert à détecter si l'URL sera utilisée par GitHub Pages ou pour le mode dev */}
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/OC_Kasa/"}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Mettre le path en * permet de cibler toutes les routes inexistantes directement afin de créer une page 404 globale */}
                <Route path="*" element={<Error />} />
                {Array.from(logements).map((logement) => {
                    return (
                        <Route
                            key={logement.id}
                            // On génèrera les routes avec un quelques manœuvres sur le titre et l'id de la propriété. De cette manière, il n'y a pas d'url de logement en trop
                            path={`${logement.id}-${logement.title
                                .toLowerCase()
                                .replace(/ /g, "-")
                                .replace("---", "-")}`}
                            element={<Lodging logement={logement} />}
                        />
                    )
                })}
            </Routes>
            <Footer />
        </BrowserRouter>
    </StrictMode>
)
