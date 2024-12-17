import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'; 
import { ROUTES } from '../../utils/routes'

import LOGO from "../../img/LOGO 1.svg"
import avatar from "../../img/AVATAR.png"
import searchIcon from "../../img/search.svg"
import { BiHeart, BiHeartCircle, BiSolidHeart } from 'react-icons/bi';
import { GiCardboardBox } from 'react-icons/gi';
import { MdShoppingCart } from 'react-icons/md';


export default function Header() {
  return (
    <div className='header'>

      <div className="header_logo">
          <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="Stuff" />
          </Link>
      </div>

      <div className="header_info">
        <div className="header_info_user">
        <div 
        className="header_info_avatar" 
        style={{backgroundImage: `url(${avatar})` }}
        />
        <div className="header_info_username">Guest</div>
        
        </div>

        <form className='header_info_form'>
          <div className="header_info_icon">
            <img src={searchIcon} alt="" />
          </div>
          <div className="header_info_input">
            <input type="search" 
            name='search'
            placeholder='Search for anything...'
            autoComplete='off'
            onChange={() => {}}
            value=''
            />
          </div>

          {false && <div className="box"></div>}
        </form>

        <div className="header_info_account">
          <Link to={ROUTES.HOME} className='favorites'>
              <BiSolidHeart className='favorites_fav'/>
          </Link>

          <Link to={ROUTES.CART} className='favorites'>
              <MdShoppingCart className='favorites_cart' />
              <span className='count'>2</span>
          </Link>
        </div>
        
      </div>

    </div>
  )
}
