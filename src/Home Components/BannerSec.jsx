import React from 'react'
import './BannerSec.css'

export default function BannerSec() {
  return (
    <div className="BannerSec container p-5">
      <div className="d-flex gap-3">
        <div className="col col-sm position-relative overflow-hidden">
          <img src="banner/b17.jpg" alt="" className='position-absolute' />
          <div className="text ps-5 d-flex flex-column justify-content-center gap-2">

            <p className="fs-4 text-white-50">crazy deals</p>
            <h2 className='text-light'>buy 1 get 1 free</h2>
            <p className="fs-5 text-white-50">the best classic dress is on sale at cara</p>
            <button type="button" class="btn btn-success">learn more</button>

          </div>

        </div>
        <div className="col col-sm position-relative overflow-hidden">
          <img src="banner/b10.jpg" alt="" className='position-absolute' />
          <div className="text ps-5 d-flex flex-column justify-content-center gap-2">

            <p className="fs-4 text-white-50">spring / summer</p>
            <h2 className='text-light'>upcomming season</h2>
            <p className="fs-5 text-white-50">the best classic dress is on sale at cara</p>
            <button type="button" class="btn btn-outline-success">colection</button>

          </div>
        </div>
      </div>
      <div className="d-flex gap-3 mt-4">
        <div className="col col-sm position-relative overflow-hidden">
          <img src="banner/b7.jpg" alt="" className='position-absolute' />
          <div className="text ps-5 d-flex flex-column justify-content-center gap-2">
            <h2 className='text-light'>season sale</h2>
            <p className="text-danger fs-4 fw-semibold">winter collection 50% off</p>
          </div>
          

        </div>
        <div className="col col-sm position-relative overflow-hidden">
          <img src="banner/b4.jpg" alt="" className='position-absolute' />
          <div className="text ps-5 d-flex flex-column justify-content-center gap-2">
            <h2 className='text-light'>season sale</h2>
            <p className="text-danger fs-4 fw-semibold">winter collection 50% off</p>
          </div>

        </div>
        <div className="col col-sm position-relative overflow-hidden">
          <img src="banner/b18.jpg" alt="" className='position-absolute' />
          <div className="text ps-5 d-flex flex-column justify-content-center gap-2">
            <h2 className='text-light'>season sale</h2>
            <p className="text-danger fs-4 fw-semibold">winter collection 50% off</p>
          </div>

        </div>
      </div>
    </div>
  )
}
