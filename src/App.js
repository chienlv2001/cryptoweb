import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import PageOne from "./components/PageOne/PageOne";
import PageTwo from "./components/PageTwo/PageTwo";
import PageThree from "./components/PageThree/PageThree";
import PageFour from "./components/PageFour/PageFour";
import PageIntro from "./components/PageIntro/PageIntro";
import NavbarApp from "./components/Navbar/NavbarApp";
import Banner from "./components/Banner/Banner";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }}
    >
      {/* <Navbar /> */}
      <NavbarApp darkMode={darkMode} />
      <PageIntro />
      {/* <Banner /> */}

      <PageOne />

      <PageTwo />
      <PageThree />
      <PageFour />

      <Footer />
      {/* <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact /> */}
    </div>
  );
}

export default App;
