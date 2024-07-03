// React imports
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from 'react-router'

// Bootstrap imports
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js'

// Personal imports
import './sass/styles.css';
import Home from "./components/Home"

import ServicesYard from "./components/ServicesYard"
import ServicesDog from "./components/ServicesDog"
import ServicesCar from "./components/ServicesCar"

import AboutUsOurMission from "./components/AboutUsOurMission"
import AboutUsOurTeam from "./components/AboutUsOurTeam"

import Careers from "./components/Careers"

import LearnMore from "./components/LearnMore"

import ContactUs from "./components/ContactUs"

import BookNow from "./components/BookNow"

import AccountOpt1 from "./components/AccountOpt1"
import AccountOpt2 from "./components/AccountOpt2"

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/services/yardWork" element={<ServicesYard/>}/> 
      <Route path="/services/carWashing" element={<ServicesDog/>}/> 
      <Route path="/services/dogWalking" element={<ServicesCar/>}/> 

      <Route path="/aboutUs/ourMission" element={<AboutUsOurMission/>}/> 
      <Route path="/aboutUs/ourTeam" element={<AboutUsOurTeam/>}/> 

      <Route path="/careers" element={<Careers/>}/> 

      <Route path="/learnMore" element={<LearnMore/>}/>

      <Route path="/contactUs" element={<ContactUs/>}/>

      <Route path="/bookNow" element={<BookNow/>}/>

      <Route path="/account/opt1" element={<AccountOpt1/>}/> 
      <Route path="/account/opt2" element={<AccountOpt2/>}/> 
    </Routes>
  </BrowserRouter>
);