
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { LogoCloud } from "./components/LogoCloud"
import { Challenges } from "./components/Challenges"
import { Research } from "./components/Research"
import { Handbooks } from "./components/Handbooks"
import { Audits } from "./components/Audits"
import { About } from "./components/About"
import { Footer } from "./components/Footer"

function App() {
    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-500/30">
            <Header />
            <main>
                <Hero />
                <LogoCloud />
                <Challenges />
                <Research />
                <Handbooks />
                <Audits />
                <About />
            </main>
            <Footer />
        </div>
    )
}

export default App
