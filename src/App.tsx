import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {AboutMe} from "./layout/about_me/AboutMe";
import {Projects} from "./layout/projects/Projects";
import {Skills} from "./layout/skills/Skills";
import {Contacts} from "./layout/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

