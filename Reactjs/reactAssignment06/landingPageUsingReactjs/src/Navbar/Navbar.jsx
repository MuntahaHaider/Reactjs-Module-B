import React from 'react';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <div>
      <header>
        <div className={style.headOne}>
          <div className={style.container}>
            <ul className={style.leftNav}>
              <li><a href="#"><i className="fa-solid fa-phone"></i> 0123456789</a></li>
              <li><a href="#"><i className="fa-regular fa-envelope"></i> abcdefghij@gmail.com</a></li>
            </ul>
            <ul className={style.rightNav}>
              <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </header>
      <div className="mainNav">
        <div className="cont">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img height={70} src="./landingPageImages/badge.ae149076478c64c7b217.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item " aria-current="page" href="#">Home One</a></li>
            <li><a className="dropdown-item " aria-current="page" href="#">Home Two</a></li>
            <li><a className="hrdropdown-divider"></a></li>
            <li><a className="dropdown-item" href="#">Home Three</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item " aria-current="page" href="#">Action</a></li>
            <li><a className="dropdown-item " aria-current="page" href="#">Another action</a></li>
            <li><a className="hrdropdown-divider"></a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item " aria-current="page" href="#">Action</a></li>
            <li><a className="dropdown-item " aria-current="page" href="#">Another action</a></li>
            <li><a className="hrdropdown-divider"></a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item " aria-current="page" href="#">Blog </a></li>
            <li><a className="dropdown-item " aria-current="page" href="#">Blog Single</a></li>
            <li><a className="hrdropdown-divider"></a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>        
        </div>
      </div>
    </div>
  );
}

export default Navbar;
