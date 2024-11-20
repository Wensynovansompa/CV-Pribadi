import "./assets/css/styles.css";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Educations from "./components/Educations/educations";
import Interests from "./components/Interests/interests";
import Skills from "./components/Skills/skills";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Educations />
      <Interests />
      <Skills />
    </div>
  );
};

export default App;
