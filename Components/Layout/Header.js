import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand text-white">
      DELegent barbarshop
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{ backgroundColor: "rgb(133, 141, 141)" }}
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link
           to="/"
            className="nav-link active text-white"
            aria-current="page"
          >
            Calender
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/static"
            className="nav-link active text-white"
            aria-current="page"
          >
          Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/service" className="nav-link text-white">
            The menu
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/work_sedule"  className="nav-link text-white">
            Team
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link text-white">
            Product
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/client" className="nav-link text-white">
            Clients
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/campaings" className="nav-link text-white">
            Marketing
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/report" className="nav-link text-white">
            Report
          </Link>
        </li>
      </ul>
      <form className="d-flex px-5">
        <input
          className="form-control me-2 search"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ backgroundColor: "black", borderColor: "black" }}/>
       <Link to="/vanue_detail"> <i className="fa-regular fa-gear text-light ml-3 mt-2 px-1" /></Link>
        <i className="fa-sharp fa-solid fa-bell text-light mt-2 px-1" />
      </form>
    </div>
  </div>
</nav>

   </>
  )
}

export default Header
