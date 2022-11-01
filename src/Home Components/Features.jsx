import React from 'react'
import './Features.css'

export default function Features() {
  return (
    <div class="features d-grid gap-4 p-5" >
      <div className='card feature d-flex flex-column gap-4 p-4'>
        <img src="features/f1.png" alt="" />
        <p className="fs-6 bg-success bg-opacity-25 text-center rounded p-1 text-success text-capitalize fw-semibold ">
          free shipping
        </p>
      </div>
      <div className='card feature d-flex flex-column gap-4 p-4'>
        <img src="features/f2.png" alt="" />
        <p className="fs-6 bg-secondary bg-opacity-25 text-center rounded p-1 text-success text-capitalize fw-semibold ">
          online order
        </p>
      </div>
      <div className='card feature d-flex flex-column gap-4 p-4'>
        <img src="features/f3.png" alt="" />
        <p className="fs-6 bg-danger bg-opacity-25 text-center rounded p-1 text-success text-capitalize fw-semibold ">
          save money
        </p>
      </div>
      <div className='card feature d-flex flex-column gap-4 p-4'>
        <img src="features/f4.png" alt="" />
        <p className="fs-6 bg-warning bg-opacity-25 text-center rounded p-1 text-success text-capitalize fw-semibold ">
          poromotions
        </p>
      </div>
      <div className='card feature d-flex flex-column gap-4 p-4'>
        <img src="features/f5.png" alt="" />
        <p className="fs-6 bg-primary bg-opacity-25 text-center rounded p-1 text-success text-capitalize fw-semibold ">
          happy sell
        </p>
      </div>
      <div className='card feature d-flex flex-column gap-4 p-4'>
        <img src="features/f6.png" alt="" />
        <p className="fs-6 bg-info  bg-opacity-25 text-center rounded p-1 text-success text-capitalize fw-semibold ">
          24 hour support
        </p>
      </div>
    </div>
  )
}
