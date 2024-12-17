import React from 'react'
import './Poster.css'

import PC from '../../img/computer.png'

export default function Poster() {
  return (
    <section className='home'>
        <div className="title">BIG SALE 20%</div>
        <div className="product">
            <div className="text">
                <div className="subtitle">the bestseller of 2022 </div>
                <h1 className='head'>LENNON R2D2 with NVIDIA 5090 TI</h1>
                <button className='btn'>Shop Now</button>
            </div>

            <div className="image">
                <img src={PC} alt="Computer" />
            </div>
        </div>

    </section>
)
}
