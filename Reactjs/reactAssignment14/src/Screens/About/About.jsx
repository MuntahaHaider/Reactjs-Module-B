import React from 'react'
import NewNavbar from '../../Components/NewNavbar/NewNavbar'
import trend from '../../assets/Images/trend.png'
import discount from '../../assets/Images/discount.png'
import styles from './About.module.css'
import TransperentCard from '../../Components/TransperentCard/TransperentCard'
import image1 from '../../assets/Images/image1.jpg';
import image2 from '../../assets/Images/image2.jpg';
import image3 from '../../assets/Images/image3.jpg';
import image4 from '../../assets/Images/image4.jpg';
import image5 from '../../assets/Images/image5.jpg';
import image6 from '../../assets/Images/image6.jpg';
import Button from '../../Components/Button/Button'
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import PinDropSharpIcon from '@mui/icons-material/PinDropSharp';
import DiscountSharpIcon from '@mui/icons-material/DiscountSharp';
import Footer from '../../Components/Footer/Footer'


const About = () => {
  return (
    <>
    <NewNavbar/>
    <br /><br />
    <div className={styles.cards}>
       <div>
        <div><img src={trend} alt="" /></div><br />
        <div><h3>Latest Trends For All</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p></div>
       </div>
       <div>
        <div><img src={discount} alt="" /></div><br />
        <div><h3>Sale on latest fashion</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p></div>
       </div>
    </div>
    <div style={{width:'100%'}}>
            <div className={styles.hr}></div>
    </div>
    <br /><br />
    <div className='container-fliud' >
       <div style={{textAlign:'center',}}><h1>They Love Us!!!</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div>
       <br />
       <div style={{display:'flex', flexWrap:'wrap',rowGap:20,columnGap:30}}>
       <TransperentCard image={image1}/>
       <TransperentCard image={image2}/>
       <TransperentCard image={image3}/>
       <TransperentCard image={image4}/>
       
       <TransperentCard image={image5}/>
       <TransperentCard image={image6}/>
       <br /><br />
      <div >
        <Button icon={<LocalShippingSharpIcon fontSize='50px'/>} h6='Express Delivery'/>
        <Button icon={<PinDropSharpIcon/>} h6='Order Tracking'/>
        <Button icon={<DiscountSharpIcon/>} h6='Regular Discounts'/>
      </div>
       </div>
    </div>
    <Footer/>

    </>
  )
}

export default About