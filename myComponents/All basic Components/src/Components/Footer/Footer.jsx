import React from 'react';
// import logo from '../../assets/Images/logo.png'
function Footer() {
  return (
    <div className='container-fluid my-5'>
      <footer className="text-center text-lg-start text-white" style={{backgroundColor: 'black', width:'100%'}}>
        <br /><br />
        <section className="">
          <div className=" text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold"><img width={180} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojclzzRsQKY9EiIzhdDfH1Bb4M2KRFXWKXQ&s' alt="" /></h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p>
                Transform your style with OnlineWardrobe - where fashion meets elegance. Discover the latest trends and timeless classics to elevate your wardrobe every day.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Quik links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p>
                  <a href="#!" className="text-white">Home</a>
                </p>
                <p>
                  <a href="#!" className="text-white">All Products</a>
                </p>
                <p>
                  <a href="#!" className="text-white">About us</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Shop Collections</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p>Men's Jeans</p>
                <p>Women's Tops</p>
                <p>Hoodies</p>
               <p>Jackets</p>
                <p>Shoes</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Shop Collections</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p>Men's Jeans</p>
                <p>Women's Tops</p>
                <p>Hoodies</p>
               <p>Jackets</p>
                <p>Shoes</p>
              </div>
               <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Shop Collections</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p>Men's Jeans</p>
                <p>Women's Tops</p>
                <p>Hoodies</p>
               <p>Jackets</p>
                <p>Shoes</p>
              </div>
            </div>
          </div>
        </section>
<hr />
 </footer>
      <section className="d-flex justify-content-between p-4" >
          <div className="me-5">
            <span>Copyright © 2024 OnlineWardrobe</span>
          </div>
          <div>
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
    </div>
  );
}

export default Footer;