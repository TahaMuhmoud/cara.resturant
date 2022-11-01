import React from 'react'
import './NewArrivals.css'
import $ from 'jquery'
import './FeaturedProducts.css'

export default function NewArrivals() {
  // Handle Card OnHover
  let handlOnHover = (e)=>{
    $(e.target).find('.pro-name').addClass('text-success');
    $(e.target).on('mouseleave', (e)=>{
      $(e.target).find('.pro-name').removeClass('text-success');
    })
  }
  return (
    <div className='FeaturedProducts p-5 d-flex flex-column align-items-center'>
      <h1 className='fw-bolder pb-3'>new arrivals</h1>
      <p className="fs-6 small-txt ">summer collection new modern design</p>
      <div className="products d-grid gap-5 p-5 mt-3">
        <div onMouseOver={handlOnHover} className="card shadow p-3 rounded-4">
          <div className="pro-img rounded-4 overflow-hidden mb-3">
            <img src="products/n1.jpg " alt="" className='rounded-4 w-100'/>
          </div>
          <div className="pro-brand small-txt">adidas</div>
          <div className="pro-name fs-5 fw-semibold">cartoon astronaut t-Shirt</div>
          <div className="add-to-card mt-3 container d-flex align-items-center justify-content-between">
            <div className="price fs-4 fw-semibold text-success">25$</div>
            <i class="fa-solid fa-cart-shopping fs-4 d-grid rounded-circle bg-success bg-opacity-25 text-success"></i>
          </div>
        </div>
        <div onMouseOver={handlOnHover} className="card shadow p-3 rounded-4">
          <div className="pro-img rounded-4 overflow-hidden mb-3">
            <img src="products/n2.jpg " alt="" className='rounded-4 w-100'/>
          </div>
          <div className="pro-brand small-txt">adidas</div>
          <div className="pro-name fs-5 fw-semibold">cartoon astronaut t-shirt</div>
          <div className="add-to-card mt-3 container d-flex align-items-center justify-content-between">
            <div className="price fs-4 fw-semibold text-success">25$</div>
            <i class="fa-solid fa-cart-shopping fs-4 d-grid rounded-circle bg-success bg-opacity-25 text-success"></i>
          </div>
        </div>
        <div onMouseOver={handlOnHover} className="card shadow p-3 rounded-4">
          <div className="pro-img rounded-4 overflow-hidden mb-3">
            <img src="products/n3.jpg " alt="" className='rounded-4 w-100'/>
          </div>
          <div className="pro-brand small-txt">adidas</div>
          <div className="pro-name fs-5 fw-semibold">cartoon astronaut t-shirt</div>
          <div className="add-to-card mt-3 container d-flex align-items-center justify-content-between">
            <div className="price fs-4 fw-semibold text-success">25$</div>
            <i class="fa-solid fa-cart-shopping fs-4 d-grid rounded-circle bg-success bg-opacity-25 text-success"></i>
          </div>
        </div>
        <div onMouseOver={handlOnHover} className="card shadow p-3 rounded-4">
          <div className="pro-img rounded-4 overflow-hidden mb-3">
            <img src="products/n4.jpg " alt="" className='rounded-4 w-100'/>
          </div>
          <div className="pro-brand small-txt">adidas</div>
          <div className="pro-name fs-5 fw-semibold">cartoon astronaut t-shirt</div>
          <div className="add-to-card mt-3 container d-flex align-items-center justify-content-between">
            <div className="price fs-4 fw-semibold text-success">25$</div>
            <i class="fa-solid fa-cart-shopping fs-4 d-grid rounded-circle bg-success bg-opacity-25 text-success"></i>
          </div>
        </div>
        <div onMouseOver={handlOnHover} className="card shadow p-3 rounded-4">
          <div className="pro-img rounded-4 overflow-hidden mb-3">
            <img src="products/n5.jpg " alt="" className='rounded-4 w-100'/>
          </div>
          <div className="pro-brand small-txt">adidas</div>
          <div className="pro-name fs-5 fw-semibold">cartoon astronaut t-shirt</div>
          <div className="add-to-card mt-3 container d-flex align-items-center justify-content-between">
            <div className="price fs-4 fw-semibold text-success">25$</div>
            <i class="fa-solid fa-cart-shopping fs-4 d-grid rounded-circle bg-success bg-opacity-25 text-success"></i>
          </div>
        </div>
        <div onMouseOver={handlOnHover} className="card shadow p-3 rounded-4">
          <div className="pro-img rounded-4 overflow-hidden mb-3">
            <img src="products/n6.jpg " alt="" className='rounded-4 w-100'/>
          </div>
          <div className="pro-brand small-txt">adidas</div>
          <div className="pro-name fs-5 fw-semibold">cartoon astronaut t-shirt</div>
          <div className="add-to-card mt-3 container d-flex align-items-center justify-content-between">
            <div className="price fs-4 fw-semibold text-success">25$</div>
            <i class="fa-solid fa-cart-shopping fs-4 d-grid rounded-circle bg-success bg-opacity-25 text-success"></i>
          </div>
        </div>
        <div onMouseOver={handlOnHover} className="card shadow p-3 rounded-4">
          <div className="pro-img rounded-4 overflow-hidden mb-3">
            <img src="products/n7.jpg " alt="" className='rounded-4 w-100'/>
          </div>
          <div className="pro-brand small-txt">adidas</div>
          <div className="pro-name fs-5 fw-semibold">cartoon astronaut t-shirt</div>
          <div className="add-to-card mt-3 container d-flex align-items-center justify-content-between">
            <div className="price fs-4 fw-semibold text-success">25$</div>
            <i class="fa-solid fa-cart-shopping fs-4 d-grid rounded-circle bg-success bg-opacity-25 text-success"></i>
          </div>
        </div>
        <div onMouseOver={handlOnHover} className="card shadow p-3 rounded-4">
          <div className="pro-img rounded-4 overflow-hidden mb-3">
            <img src="products/n8.jpg " alt="" className='rounded-4 w-100'/>
          </div>
          <div className="pro-brand small-txt">adidas</div>
          <div className="pro-name fs-5 fw-semibold">cartoon astronaut t-shirt</div>
          <div className="add-to-card mt-3 container d-flex align-items-center justify-content-between">
            <div className="price fs-4 fw-semibold text-success">25$</div>
            <i class="fa-solid fa-cart-shopping fs-4 d-grid rounded-circle bg-success bg-opacity-25 text-success"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
