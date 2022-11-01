import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import './Products.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Products() {
  // Handle Card OnHover
  let handlOnHover = (e) => {
    $(e.target).find('.pro-name').addClass('text-success');
    $(e.target).on('mouseleave', (e) => {
      $(e.target).find('.pro-name').removeClass('text-success');
    })
  }


  const [Products, setProducts] = useState([]);

  async function ss(callback){
    
    let {data} = await axios.get('https://mocki.io/v1/472b938a-9fcf-4fde-bc59-e58cc9b18766');
    callback(data)
    console.log(data)
  }
  useEffect(() => {
    ss(setProducts);
  }, [])
  
  return (
    <div className='FeaturedProducts p-5 d-flex flex-column align-items-center'>
      <div className="products d-grid gap-5 p-5 mt-3">
        {
          Products.map((ele, index) => 
            <Link to={`/productdetails/${ele["pro_id"]}`}>
              <div onMouseOver={handlOnHover} className="card shadow p-3 rounded-4">
                <div className="pro-img rounded-4 overflow-hidden mb-3">
                  <img src={ele["pro_img"]} alt="" className='rounded-4 w-100' />
                </div>
                <div className="pro-brand small-txt">{ele["pro_brand"]}</div>
                <div className="pro-name fs-5 fw-semibold">{ele["pro_name"]}</div>
                <div className="add-to-card mt-3 container d-flex align-items-center justify-content-between">
                  <div className="price fs-4 fw-semibold text-success">{ele["pro_price"]}</div>
                  <i class="fa-solid fa-cart-shopping fs-4 d-grid rounded-circle bg-success bg-opacity-25 text-success"></i>
                </div>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  )
}
