import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./styles/main.scss"
import Header from "./components/Header.tsx"
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Error from "./components/Error.tsx"
import Footer from "./components/Footer.tsx"
import Lodging from "./pages/Lodging.tsx"
import logements from "./data/logements.json"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/OC_Kasa/"}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/404" element={<Error />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
                {Array.from(logements).map((logement) => {
                    return (
                        <Route
                            key={logement.id}
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
