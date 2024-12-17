import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom'; 
import { ROUTES } from '../../utils/routes'

import LOGO from "../../img/LOGO 1.svg"
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <section className='footer'>

      <div className="footer_logo">
          <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="Stuff" />
          </Link>
      </div>

      <div className="rights">
          Developed by 
          <a 
          href="https://t.me/coffeePechenka"
          target="_blank"
          rel="noreferrer"
          >
            Arman
          </a>
      </div>

      <div className="socials">
          <a 
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          >
              <FaYoutube className='socials_icon youtube'/>            
          </a>

          <a 
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          >
              <FaFacebook className='socials_icon facebook'/>            
          </a>

          <a 
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          >
              <FaInstagram className='socials_icon insta'/>            
          </a>
      </div>

    </section>
  )
}
