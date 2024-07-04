import Layout from "./components/Layout/Layout";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Education from "./pages/Education/Education.js";
import Projects from "./pages/Projects/Projects.js";
import Techstack from "./pages/Techstack/Techstack.js";
import WorkExp from "./pages/WorkExp/WorkExp.js";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext.js";
import Tada from 'react-reveal/Tada';
import MobileNav from "./components/MobileNav/MobileNav.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
      <ToastContainer />
        <MobileNav/>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <div className="text-center">
            <Tada>
            <h4> Made By😍Hafiz Abdul Rahman &copy; 2024</h4>
            </Tada>
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
