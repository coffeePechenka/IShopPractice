import React, { useState } from 'react'
import './Product.css'

import singleSneakers from '../../../img/singleSneakers.png'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../../features/user/userSlice'

const SIZES = [4, 4.5, 5]

export default function Product(item) {
  // const currentImage = images[0]

  const { images, title, price, description } = item

  const dispatch = useDispatch()

  const [activeSize, setActiveSize] = useState(null);

  const handleClick = (size) => {
    setActiveSize(size);
  };

  const addToCart = () => {
    dispatch(addItemToCart(item))
  }


  return (
    <section className='productSin'>
        <div className="images">
            <div className="current" style={{backgroundImage: `url(${singleSneakers})`}}/>
          <div className="images-list">
            <div className="currentImage" style={{backgroundImage: `url(${singleSneakers})`}}/>
            <div className="currentImage" style={{backgroundImage: `url(${singleSneakers})`}}/>
            <div className="currentImage" style={{backgroundImage: `url(${singleSneakers})`}}/>
            <div className="currentImage" style={{backgroundImage: `url(${singleSneakers})`}}/>
          </div>
        </div>
        <div className="info">
          <h1 className='title'>{title}</h1>
          <div className="price">
            {price} $
          </div>
          <div className="color">
            <span>Color: </span> Green
          </div>
          <div className="sizes">
            <span>Sizes: </span>
            <div className="list">
                {SIZES.map((size) => (
                  <div
                  onClick={() => handleClick(size)}
                  className={activeSize === size ? 'active' : 'size'}
                  key={size}
                >
                  {size}
                </div>
                ))}
            </div>
          </div>

          <p className='description'>{description}</p>

          <div className="actions">
            <button className='add' onClick={addToCart}>Add to cart</button>
            <button className='favourite'>Add to favourite</button>
          </div>

          <div className="bottom">
            <div className="purchase">19 people purchased</div>

            <Link to={ROUTES.HOME}>Return to store</Link>
          </div>
        </div>
    </section>
  )
}
