import React, { useState } from 'react'
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
//upload the project convert by using terminal command(npm run build)

const App = () => {
 
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <MyWork/>
    <Contact/>
    <Footer/>
    </div>
  )
}
export default App;