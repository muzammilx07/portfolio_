import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Project from "./Pages/Project";
import TechCard from "./Pages/TechCard";

function App() {
  return (
    <div className="bg-white dark:bg-darkBg min-h-screen flex justify-center items-start pt-6 ">
      <div className="w-screen max-w-3xl flex flex-col gap-3 mx-auto overflow-hidden ">
        <Navbar />
        <Hero />
        <About />
        <Project/>
        <TechCard/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
