import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Footer} from "./layout/footer/Footer";
import {Projects} from "./layout/section/projects/Projects";
import {About} from "./layout/section/about/About";
import {Contact} from "./layout/section/contact/Contact";
import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";
import React from "react";



function App() {
    return (
        <div className="App">
            <Particle />
            <Header />
            <Main />
            <Skills />
            <Projects/>
            <About />
            <Contact/>
            <Footer />
            <GoTopBtn />
        </div>
    );
}

export default App;

