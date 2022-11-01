import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios'

export default function ProductDetails() {
  let { id } = useParams();

  const [Product, setProduct] = useState({});

  async function dd(Callback) {
    let { data } = await axios.get('https://mocki.io/v1/472b938a-9fcf-4fde-bc59-e58cc9b18766');
    Callback(data[id - 1]);
  }
  dd(setProduct)
  return (
    <div className='ProductDetails container p-5 d-flex gap-5'>
      <div className="img d-grid gap-2 ">
        <div className="row-1">
          <img src={`/${Product["pro_img"]}`} alt="" className='w-100' />
        </div>
        <div className="row-2 d-flex gap-2">
          {
            Product["images"] ? Product["images"].map((img , index)=><><img src={`/${img}`} alt="" className='col' /></>)
            :""
          }
        </div>
      </div>
      <div className="text d-flex flex-column gap-3 justify-content-center">
        <p className="fs-5 text-black-50">{Product["pro_brand"]}</p>
        <h2>{Product["pro_name"]}</h2>
        <h2 className='text-success'><span className='text-dark fs-4'>price : </span>{Product["pro_price"]}</h2>
        <div className="size d-flex gap-2">
          <span className='text-dark fs-4'>size : </span>
          {
            Product["sizes"] ? Product["sizes"].map((size , index)=><><button key={index} type="button" class="btn btn-outline-success">{size}</button></>):""
          }
        </div>
        <div className="colors d-flex align-items-center gap-2">
          <p className='text-dark fs-4'>color : </p>
          {
            Product["colors"] ? Product["colors"].map((color , index)=><><span key={index} data-color={`${color}`} style={{ background: `${color}` }} className='rounded-circle'></span></>)
            :""
          }
        </div>
        <button type="button" class="btn btn-success">add to card</button>
        <div className="details">
          <h5>details :</h5>
          <p>{Product["pro_details"]}</p>
        </div>
      </div>
    </div>
  )
}
