import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Page1 from './Components/Page1/Page1'
import Page2 from './Components/Page2/Page2'
import Profile from './Components/Profile/Profile'
import Hrtag from './Components/Hrtag/Hrtag'
import Cards from './Components/Cards/Cards'
import Carddata from './Carddata'
import { Typography , Box , Grid } from '@mui/material'
import Collage from './Components/Collage/Collage'
import Form from './Components/Form/Form'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <Page1 h1="Introduction To Jawan Pakistan" text='The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth.'/>

      <Page2 h2='Mission And Vision Behind Jawan Pakistan' text1=' Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth. ' text2=' Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.'/>
<br />
          <Hrtag/>
        <Profile h2='MUHAMMAD ALI MUGHAL' p='Founder of Jawan Pakistan'/><br />
        <Hrtag/>
        
        <Typography component="div" sx={{ 
            paddingRight: { md: 2 }, 
            padding:"20px",
            fontSize:"20px",
            textAlign:"center",
             }}>
                <h1>IT Trainings Offering In Jawan Pakistan</h1>
        </Typography>

<Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container spacing={2} justifyContent="center">
        {Carddata.map((card, index) => (
          <Grid 
            item 
            xs={12} sm={6} md={4} 
            key={index} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center'
            }}
          >
            <Cards 
              desc={card.desc} 
              imgSrc={card.imgSrc} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>

<br />
<Hrtag/>
<br />
        <Typography component="div" sx={{ 
            paddingRight: { md: 2 }, 
            padding:"20px",
            fontSize:"20px",
            textAlign:"center",
             }}>
                <h1>Glimpses Of Sessions Conducted By Jawan Pakistan
                </h1>
        </Typography>
        <Collage/>
<br />
<Hrtag/>
<br />
        <Form/>
<br />
<Hrtag/>
<br />

<Footer/>
    </>
  )
}

export default App
