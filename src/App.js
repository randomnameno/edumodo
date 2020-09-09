import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/slider/Slider';
import './App.css'
import Department from './components/departments/Department';
import Footer from './components/Footer/Footer';
import Around from './components/Around/Around'
import Siteinfo from './components/Siteinfo/Siteinfo';
import About from './components/About/About';
class App extends React.Component {
  
 
  render() {
    return(
      <div>
        <div className="mainpage-wrapper">
          {/* the slider is the top section of the website which contains the navigation bar <Navi> and the 
          slider main-section of the site. */}
          <Slider/>
          {/* section 2 is the secondary section of the webpage which has the department about and around section
          1.about- tells about the college and has a video link 
          2.around- tells about the varius courses and has cards made using bootstrap*
          3. Department - tels about the departments of the college and cards have been implemented using bootstrap*/}
          <div className="section2">
            <Department/>
            <About/>
            <Around/>
         </div>
         {/* the footer contains 2 sections.
         1. siteinfo- tells more about the site and  */}
          <div className="Footer">
            <Siteinfo/>
            <Footer/>
          </div>
        </div>
     </div>
    )
  }
}

export default App;