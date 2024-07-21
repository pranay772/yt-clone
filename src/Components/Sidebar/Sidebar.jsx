import React from 'react'
import { FaHome, FaGamepad, FaCar, FaFootballBall, FaFilm, FaLaptop, FaMusic, FaBlog, FaNewspaper } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div onClick={() => { setCategory(0) }} className={`side-link ${category === 0 ? "active" : ""}`}>
          <FaHome />
          <p>Home</p>
        </div>
        <div onClick={() => { setCategory(20) }} className={`side-link ${category === 20 ? "active" : ""}`}>
          <FaGamepad />
          <p>Gaming</p>
        </div>
        <div onClick={() => { setCategory(2) }} className={`side-link ${category === 2 ? "active" : ""}`}>
          <FaCar />
          <p>Automobiles</p>
        </div>
        <div onClick={() => { setCategory(17) }} className={`side-link ${category === 17 ? "active" : ""}`}>
          <FaFootballBall />
          <p>Sports</p>
        </div>
        <div onClick={() => { setCategory(24) }} className={`side-link ${category === 24 ? "active" : ""}`}>
          <FaFilm />
          <p>Entertainment</p>
        </div>
        <div onClick={() => { setCategory(28) }} className={`side-link ${category === 28 ? "active" : ""}`}>
          <FaLaptop />
          <p>Technology</p>
        </div>
        <div onClick={() => { setCategory(10) }} className={`side-link ${category === 10 ? "active" : ""}`}>
          <FaMusic />
          <p>Music</p>
        </div>
        <div onClick={() => { setCategory(22) }} className={`side-link ${category === 22 ? "active" : ""}`}>
          <FaBlog />
          <p>Blogs</p>
        </div>
        <div onClick={() => { setCategory(25) }} className={`side-link ${category === 25 ? "active" : ""}`}>
          <FaNewspaper />
          <p>News</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Sidebar
