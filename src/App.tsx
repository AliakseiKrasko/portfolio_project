import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Footer} from "./layout/footer/Footer";
import {Projects} from "./layout/section/projects/Projects";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Projects/>
            <Footer />
        </div>
    );
}

export default App;

