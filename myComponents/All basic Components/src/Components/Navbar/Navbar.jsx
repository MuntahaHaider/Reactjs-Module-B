
// import React, { useState } from 'react';
// import style from './Navbar.module.css';
// import { NavLink } from 'react-router-dom';


// const Navbar = () => {
//   return (
//     <>
//       <div className={style.div}>
//         <div className={style.dflex}>
//           <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojclzzRsQKY9EiIzhdDfH1Bb4M2KRFXWKXQ&s" alt="" /></div>
//            <div>
//             <ul className={style.ul}>
//               <li><NavLink style={{color:'white', textDecoration:'none'}}>Home</NavLink></li>
//               <li><NavLink style={{color:'white', textDecoration:'none'}}>About</NavLink></li>
//               <li><NavLink style={{color:'white', textDecoration:'none'}}>Products</NavLink></li>
//               <li><NavLink style={{color:'white', textDecoration:'none'}}>Contact</NavLink></li>
//               <li><NavLink style={{color:'white', textDecoration:'none'}}>Category</NavLink></li>
//             </ul>
//           </div>
          
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import style from './Navbar.module.css';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className={style.div}>
//         <div className={style.dflex}>
//           <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojclzzRsQKY9EiIzhdDfH1Bb4M2KRFXWKXQ&s" alt="" /></div>
//           <div  className={style.hamburger} onClick={toggleMenu}>
//             &#9776;
//           </div>
//           <div className={`${style.menu} ${isOpen ? style.open : ''}`}>
//             <ul className={style.ul}>
//               <li><NavLink style={{color:'white', textDecoration:'none'}}>Home</NavLink></li>
//               <li><NavLink style={{color:'white', textDecoration:'none'}}>About</NavLink></li>
//               <li><NavLink style={{color:'white', textDecoration:'none'}}>Products</NavLink></li>
//               <li><NavLink style={{color:'white', textDecoration:'none'}}>Contact</NavLink></li>
//               <li><NavLink style={{color:'white', textDecoration:'none'}}>Category</NavLink></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;






















// good
// import React, { useState } from 'react';
// import style from './Navbar.module.css';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className={style.div}>
//         <div className={style.dflex}>
//           <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojclzzRsQKY9EiIzhdDfH1Bb4M2KRFXWKXQ&s" alt="" /></div>
//           <div className={style.hamburger} onClick={toggleMenu}>
//             &#9776;
//           </div>
//           <div className={`${style.menu} ${isOpen ? style.open : ''}`}>
//             <ul className={style.ul}>
//               <li><NavLink style={{color:'black', textDecoration:'none'}}>Home</NavLink></li>
//               <li><NavLink style={{color:'black', textDecoration:'none'}}>About</NavLink></li>
//               <li><NavLink style={{color:'black', textDecoration:'none'}}>Products</NavLink></li>
//               <li><NavLink style={{color:'black', textDecoration:'none'}}>Contact</NavLink></li>
//               <li><NavLink style={{color:'black', textDecoration:'none'}}>Category</NavLink></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
















import React, { useState } from "react";
import styles from "./Navbar.module.css"; // Importing CSS Module
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojclzzRsQKY9EiIzhdDfH1Bb4M2KRFXWKXQ&s' alt="Logo" /> {/* Replace with your logo */}
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li><NavLink >Home</NavLink></li>
        <li><NavLink >About</NavLink></li>
        <li><NavLink >Services</NavLink></li>
        <li><NavLink >Contact</NavLink></li>
      </ul>
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
