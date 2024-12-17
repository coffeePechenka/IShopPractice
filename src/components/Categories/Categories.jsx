import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'

import worthImg from '../../img/Worth seeing.png'

export default function Categories({ title, products = [], amount }) {

    const list = products.filter((_, i) => i < amount)

  return (
    <section className='categories'>
        <h2>{title}</h2>
        <div className="list">
            {list.map(({ id, name, image }) => (
                <Link to={`/categories/${id}`} key={id} className='item'>
                    <div 
                        className='image'
                        style={{ backgroundImage: `url(${worthImg})`}}
                    />
                    <h3 className='title'>Sneakers</h3>
                </Link>
            ))}
        </div>
    </section>
  )
}
