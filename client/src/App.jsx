import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './App.css'

const navItems = [
  {
    name: 'Home',
    path: '/home',
    order: 0,
  },
  {
    name: 'Assignments',
    path: '/assignments',
    order: 0,
  },
  {
    name: 'Syllabus',
    path: '/syllabus',
    order: 0,
  }
]

export default function App() {
  return (
    <>
      <div className="sidebar">
      { navItems ? <ul>
          { navItems.map(item => {
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
          }) }
        </ul> : null }
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}