import React from 'react'
import './Banner.css'

import bannerImg from '../../img/banner.png'
import bannerSneakers from '../../img/bannerSneakers (1).png'
import bannerDesk from '../../img/bannerDesk (2).png'

export default function Banner() {
  return (
    <section className='banner'>
        <div className="left">
            <img className='img sneakers' src={bannerSneakers} alt="" />
            <img className='img desk' src={bannerDesk} alt="" />
            <p className='content'>
                NEW YEAR
                <span>SALE</span>
            </p>
            <button className='moreBtn'>See more</button>
        </div>

        <div className="right" style={{backgroundImage: `url(${bannerImg})`}}>
            <p className='discount'>save up to <span>50%</span> off</p>
        </div>
    </section>
  )
}
