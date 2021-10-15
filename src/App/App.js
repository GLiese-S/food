
import '../CSS/App.css';
import Header from        '../01 Header/Header';
import LunchBox from      '../02 LunchBox/LunchBox';
import AboutUs from       '../03 AboutUs/AboutUs';
import LunchOptions from  '../04 LunchOptions/LunchOptions';
import PopularLunch from  '../05 PopularLunch/PopularLunch';
import AllMenu from       '../06 AllMenu/AllMenu';
import YourOrder from     '../07 YourOrder/YourOrder';
import OurTeam from       '../08 OurTeam/OurTeam';
import Kitchen from       '../09 Kitchen/Kitchen';
import Footer from        '../10 Footer/Footer';

function App() {
  return (
    <>
      <div className="container">
        <Header/> 
        <LunchBox/>
        <AboutUs/>
        <LunchOptions/>
        <PopularLunch/>
        <AllMenu/>
        <YourOrder/>
        <OurTeam/>
        <Kitchen/>
        <Footer/>
      </div>
    </>        
  );
}

export default App;