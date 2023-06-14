import "./styles/global.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
