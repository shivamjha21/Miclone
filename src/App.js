import React from 'react';
import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from './component/Slider';
import data from './data/data.json';
import Offers from './component/Offers';
import Heading from './component/Heading';
import StarProduct from './component/StarProduct';
import HotAccesoriesMenu from './component/HotAccesoriesMenu';
import HotAccessories from './component/HotAccessories';
import ProductReview from './component/ProductReview';
import Videos from "./component/Videos"
import Banner from "./component/Banner"
import Footer from "./component/Footer"
import NavOptions from "./component/NavOptions"
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
  MiPhones={data.miPhones}
  redmiPhones={data.redmiPhones}
  tv={data.tv}
  laptop={data.laptop}
  fitnessAndLifeStyle={data.fitnessAndLifeStyle}
  home={data.home}
  audio={data.audio}
  accessories={data.accessories}
/>

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="Hot Accessories" />
      <HotAccesoriesMenu />
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route exact path="/SmartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route exact path="/Home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route exact path="/Lifestyle" element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route exact path="/MobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReview productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos  videos={data.videos}/>
      <Heading text="In The Press" />
      <Banner banner={data.banner}/>
      <Footer  footer={data.footer}/> 
    </Router>
  );
}

export default App;
