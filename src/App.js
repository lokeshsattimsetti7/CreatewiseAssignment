import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from "./Components/Navbar/Navbar";
import Expertise from "./Components/Expertise/Expertise";
import Work from "./Components/Works/Work";
import Experience from './Components/Experience/Experience';
import Blog from './Components/Blog/Blog';
import What from './Components/WhatTheySay/What';
import Faq from './Components/Faq/Faq';
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Expertise />
      <Work />
      <Experience />
      <Blog />
      <What />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
