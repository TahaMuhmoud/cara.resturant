import React from 'react'
import './SignUpSec.css'

export default function SignUpSec() {
  return (
    <div className='HomeBanner d-flex align-items-center justify-content-center p-5'>
      <div className="text col d-flex flex-column gap-3">
        <h2 className="text-light">sign up for newsletters</h2>
        <p className="fs-4 text-white-50">
          get email updates about our latest shop and <span className='text-warning'>special offer</span>
        </p>

      </div>
      <div className="input-group col mb-3">
        <input type="email" className="form-control" placeholder="yor email adress" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-success" type="button" id="button-addon2">sign up</button>
      </div>

    </div>
  )
}
