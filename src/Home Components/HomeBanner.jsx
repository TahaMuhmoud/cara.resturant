import React from 'react'
import './HomeBanner.css'

export default function HomeBanner() {
  return (
    <div className='HomeBanner d-flex align-items-center justify-content-center p-5'>
      <div className="text text-center d-flex flex-column align-items-center gap-3">
        <p className="fs-3 text-light">
          repair services
        </p>
        <h2 className="text-light">up to <span className="text-danger">70% off -</span> all t-Shirts & accessories</h2>
        <button type="button" class="btn btn-light p-2 px-4 w-10">explore more</button>
      </div>
    </div>
  )
}
