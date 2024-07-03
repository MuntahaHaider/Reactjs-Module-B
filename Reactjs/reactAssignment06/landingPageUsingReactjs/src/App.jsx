import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Carosil from './Carosil/Carosil.jsx'
import AcadmicCard from './AcadmicCard/AcadmicCard.jsx'
import Page from './Page/Page.jsx'
import Button from './Button/Button.jsx'
import Page2 from './Page2/Page2.jsx'
import Courses from './Courses/Courses.jsx'
import Redcard from './Redcard/Redcard.jsx'
import Card2 from './Card2/Card2.jsx'
import Profile from './Profile/Profile.jsx'
import Echoolingcard from './Echoolingcard/Echoolingcard.jsx'
import Footer from './Footer/Footer.jsx'


function App() {
  return (   <>
<Navbar/>
<Carosil/><br /><br />
<h1 style={{color:"#00306E",textAlign:"center"}}> <b>Academics</b></h1><br /><br />
<AcadmicCard  src="./landingPageImages/1.045ce5893b04f4bde993.png"   Cardtitle = "Let’s Talk Science"/>
<AcadmicCard  src="./landingPageImages/2.ec9d013b7d4f44fa4112.png" Cardtitle="Innovative Courses"/>
<AcadmicCard src="./landingPageImages/3.0cf44447da5e6fb16e49.png"  Cardtitle="Cloud Storage"/>
<AcadmicCard  src="./landingPageImages/4.3d31b426e478a4d304b8.png" Cardtitle="Online Education"/>
<br /><br /><br /><br />
<Page/>
<br /><br />
<h1 style={{color:"#00306E",textAlign:"center"}}> <b>Campus Life</b></h1>
<Page2/>
<h1 style={{color:"#00306E",textAlign:"center"}}> <b>Popular Courses</b></h1><br />
<Courses src="./landingPageImages/1.2b718c64abf3cba58c0a.png"/>
<Courses src="./landingPageImages/2.0f4fbbe4e32c8eec212e.png"/>
<Courses src="./landingPageImages/3.2f7b3c10359c070cae98.png"/>
<Courses src="./landingPageImages/4.1e8ed20eff0c42a15afb.png"/>
<br /><br />
<center> <Button btn="View All Courses "/></center> <br /><br /><br />
<Redcard/>
<Redcard/>
<Redcard/>
<Redcard/>
<br /><br /><br /><br />
<h1 style={{color:"#00306E",textAlign:"center"}}> <b>Upcoming Events</b></h1><br />
<Card2 num="10"  p="January, 2022" time="10:30AM - 12:00PM" tit="A Better Alternative To Grading Student Writing"/>
<Card2 num="14" p="April, 2022" time="12:00PM - 01:30PM" tit="12 Things Successful Mompreneurs"/>
<Card2 num="26" p=" March, 2022" time="01:30PM - 02:30PM" tit="Ethics In AI Live Event Machines Judging."/>
<Card2 num="16" p="May 2022" time="02:30PM - 03:30PM" tit="The importance of Intrinsic Motivation."/>
<br /><br /><br />
<h1 style={{color:"#00306E",textAlign:"center"}}> <b>What our student saying</b></h1><br />
<hr />
<Profile/>
<hr />
<br /><br />
<h1 style={{color:"#00306E",textAlign:"center"}}> <b>Echooling News and Blogs</b></h1><br />
<Echoolingcard src="./landingPageImages/1.987e87b22a8f90492eb4.jpg" titlee="Kids Future Schools & Corona Prevent To Growth"/>
<Echoolingcard src="./landingPageImages/2.8f0076f5a86838542c39.jpg" titlee="Echooling Future Schools & Social Innovation"/>
<Echoolingcard src="./landingPageImages/3.356c9579b8137ed75a03.jpg" titlee="7 Learning System Design Tips For Better ELearning"/>
<Echoolingcard src="./landingPageImages/1.987e87b22a8f90492eb4.jpg" titlee="Why Schools Should Continue Remote Study"/>
<br /><br /><br />
<Footer/>

    </>
  )
}
export default App
