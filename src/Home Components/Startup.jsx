import React from 'react'
import './Startup.css'

export default function Startup() {
  return (
    <div className='Startup-page w-100 d-flex align-items-center'>
      <div className="text">
        <p className="fs-4 text-capitalize">trade-in-offer</p>
        <h1 className='text-capitalize'>
          super value deals <br/> <span className='text-success'>on all products</span>
        </h1>
        <p className="small-txt fs-5">
          save more with coupons & up to 70% off!
        </p>
        <button className='text-uppercase border-0 text-success fw-bold'>shop now</button>
      </div>
    </div>
  )
}
