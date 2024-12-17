import React from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Sidebar() {
  const { list } = useSelector(({ categories }) => categories)

  

  return (
    <section className='sidebar'>
      <div className="title">CATEGORIES</div>
      <nav>
        <ul className='menu'>
            {list.map(({ id, name } ) => (
            <li key={id}>
              <NavLink className={({ isActive }) => `${isActive ? 'active' : ""}`} to={`/categories/${id}`}>{name}</NavLink>
            </li>
            ))}
            
            
        </ul>
      </nav>

      <div className="sidebar_footer">
        <a href="/help" target="_blank" className='link'>Help</a>
        <a href="/terms" target="_blank" className='link' style={{textDecoration: "underline"}}>Terms & Conditions</a>
      </div>
    </section>
  )
}
