import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'

import sneakersImg from '../../img/Sneakers.png'

export default function Products({ title, products = [], amount }) {

    const list = products.filter((_, i) => i < amount)

  return (
    <section className='products'>
        {title && <h2>{title}</h2>}

        <div className='list'>
            {list.map(({ id, images, title, category: {name, cat}, price }) => (
                
                
                <Link to={`/products/${id}`} key={id} className='product'>
                    <div 
                    className='image' 
                    style={{backgroundImage: `url(${sneakersImg})` }} 
                    />

                    <div className="wrapper">
                        <h3 className='title'>Nike ZoomX 2023</h3>
                        <div className="subtitle">Sneakers</div>
                        <div className="info">
                            <div className="prices">
                                <div className="price">{price}$</div>
                                <div className="oldPrice">{Math.floor(price * 0.8)}$</div>
                            </div>

                            <div className="purchases">
                                {Math.floor(Math.random() * 20 + 1)} purchased
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </section>
)
}
