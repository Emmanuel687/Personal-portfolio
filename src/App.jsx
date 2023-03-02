import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"


function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
