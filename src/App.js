import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import MainPage from "./MainPage";
// import Services from './Services';
import AboutUs from './AboutUs';
import Contacts from './Contacts';
import Footer from './Footer';


function App() {
  
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        {/* <Route path="/services" element={<Services/>}/> */}
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
