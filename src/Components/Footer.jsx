import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <footer className="text-center text-lg-start bg-light text-muted p-5">

        <div className="d-flex justify-content-center align-items-center">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </div>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <div className=" mb-4">
                  <img src="logo.png" alt="" />
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro placeat fugit quo perspiciatis ipsam officiis at recusandae, 
                  provident minima alias aperiam, sit hic explicabo eius blanditiis reiciendis exercitationem. Sed, aperiam.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <Link href="#!" className="text-reset">Angular</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">React</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Vue</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Laravel</Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <Link href="#!" className="text-reset">Pricing</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Settings</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Orders</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Help</Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

      </footer>
      <footer>

        <div className="text-center text-light p-4 bg-dark w-100">
          © 2022 Copyright : <span className='text-info'>El3wamy</span>
        </div>
      </footer>
    </footer>
  )
}
