import React from 'react';
import style from './Footer.module.css'; // Adjust the path as necessary

function Footer() {
  return (
    <div className='container-fluid my-5'>
      <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#1c2331', width:'100%'}}>
        <br /><br />
        <section className="">
          <div className=" text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold"><img width={180} src="./landingPageImages/badge.ae149076478c64c7b217.png" alt="" /></h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p>
                There are course and event custom <br />
                post types so you can easily create and <br />
                manage course, events.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">About Us</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p>
                  <a href="#!" className="text-white">About</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Courses</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Events</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Career</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Become a Teacher</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Contact</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p>
                  <a href="#!" className="text-white">Browse Library</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Library</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Partners</a>
                </p>
                <p>
                  <a href="#!" className="text-white">News & Blog</a>
                </p>
                <p>
                  <a href="#!" className="text-white">FAQ</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Tutorials</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Newsletter</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p>
                  <a href="#!" className="text-white">Get the latest Echooling news <br />
                      delivered to you inbox
                    </a>
                </p>
                <h6 className="text-uppercase fw-bold">Contact</h6><br />
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
<hr />
<section className="d-flex justify-content-between p-4" style={{backgroundColor: '#1c2331'}}>
          <div className="me-5">
            <span> © 2022 Echooling. All Rights Reserved</span>
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
      </footer>
    </div>
  );
}

export default Footer;
