import React from 'react'
import { Link } from 'react-router-dom'
const Onlinebookingsetting = () => {
  return (
    <div>
      <main>
  <div className="d-flex  flex-nowrap">
    <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
    <ul
        className="nav nav-pills flex-column mb-auto"
        style={{ paddingBottom: 124, backgroundColor: "#fff" }}
      >
        <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
          <Link
            to="/vanue_detail"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-regular fa-scissors me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Venue
            </small>
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to="/finance"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-sharp fa-light fa-money-bill me-1" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Finanace
            </small>
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to="/notification"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-sharp fa-light fa-badge-percent me-1" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Notification
            </small>
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to="/online_booking"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-sharp fa-light fa-badge-percent me-1" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Online booking
            </small>
          </Link>
        </li>
      </ul>
      <ul
        className="nav nav-pills flex-column mb-auto"
        style={{ paddingTop: 48 }}
      >
        <li className="nav-item">
          <a href="#" className="nav-link text-dark" aria-current="page">
            <i className="fa-light fa-chart-simple me-2" />
            <small>Recommend the salon</small>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark" aria-current="page">
            <i className="fa-light fa-chart-simple me-2" />
            <small>Help articles</small>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark" aria-current="page">
            <i className="fa-light fa-chart-simple me-2" />
            <small>What's new</small>
          </a>
        </li>
      </ul>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link text-dark" aria-current="page">
            <i className="fa-light fa-phone" />
            +370 5 214 1572
          </a>
        </li>
      </ul>
    </div>
    <div className="container-fluid">
      <div className="row row-cols-1">
        <div className="col">
          <nav className="navbar w-100 navbar-expand-lg navbar-light bg-light pb-0">
            <div className="container-fluid px-0">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse d-flex justify-content-between"
                id="navbarNav"
                style={{ backgroundColor: "#f2f2f2" }}
              >
                 <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link border-0"
                     to="/online_booking"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <small className="fw-bold">Booking Widget</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link border"
                     to="/online_booking_setting"
                    >
                      <small className="fw-bold">Settings</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link border"
                     to="/online_booking_intergrations"
                    >
                      <small className="fw-bold">Intergrations</small>
                    </Link>
                  </li>
                </ul>
                <div
                  className="dropdown text-end border"
                  style={{ backgroundColor: "#fff", padding: "8px 45px" }}
                >
                  <a
                    href="#"
                    className="d-block link-body-emphasis text-decoration-none"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Active services</span>
                    <span className="badge bg-secondary rounded-0">22</span>
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete services
                        <span className="badge bg-primary rounded-pill">
                          22
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sold through Treatwell
                        <span className="badge bg-primary rounded-pill">
                          22
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Not for sale
                        <span className="badge bg-primary rounded-pill">
                          22
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-9 ">
          <div className="row m-3">
            <div className="col-md-1">
              <i
                className="fa-solid fa-circle-info"
                style={{ color: "green", fontSize: 54 }}
              />
            </div>
            <div className="col-md-11">
              <p>
                Here you can set how clients can book in through Treatwell
                website and Online
                <br />
                booking widget.
              </p>
            </div>
            <div className="col-md-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Calendar time scale
              </label>
            </div>
            <div className="col-md-9 mt-3">
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  15 mlnuclu
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      5 mlnuclu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      10 mlnuclu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      20 mlnuclu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      25 mlnuclu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      30 mlnuclu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Online booking time interval
              </label>
            </div>
            <div className="col-md-9 mt-3 mb-3">
              <div className="col-md-9">
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Same as Calendar time scale
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        15 min
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        30 min
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        45 min
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Full hours
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        60 min
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        1h:15 min
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        1h:30 min
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        1h:45 min
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        2 hour
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="pt-3" />
            <h5>Appointment policies</h5>
            <div className="col-md-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Cancellation policy
              </label>
            </div>
            <div className="col-md-9 mt-3 mb-3">
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  24 Hours
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      1 Hour
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      2 Hour
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      3 Hour
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="col-md-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Allow multi-employee bookings
              </label>
            </div>
            <div className="col-md-9 mt-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckChecked"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckChecked"
                ></label>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Lead time
              </label>
            </div>
            <div className="col-md-9 mt-3">
              <div className="form-check">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  30 minutes
                </label>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Online booking limit
              </label>
            </div>
            <div className="col-md-9 mt-3 mb-3">
              <div className="form-check">
                <div className="col-md-12 col-lg-10">
                  <div className="col-md-9">
                    <div className="dropdown">
                      <button
                        className="btn btn-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        30
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            60
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            1:30 h
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2 h
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h5>Off-peak discounting settings</h5>
            <div className="col-md-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Afternoon starts at
              </label>
            </div>
            <div className="col-md-9 mt-3 mb-3">
              <div className="form-check">
                <div className="col-md-12 col-lg-10">
                  <div className="col-md-9">
                    <div className="dropdown">
                      <button
                        className="btn btn-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        12:00
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            12:00
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            13:00
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            14:00
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Evening starts at
              </label>
            </div>
            <div className="col-md-9 mt-3 mb-3">
              <div className="form-check">
                <div className="col-md-12 col-lg-10">
                  <div className="col-md-9">
                    <div className="dropdown">
                      <button
                        className="btn btn-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        17:00
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            12:00
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            13:00
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            14:00
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col mt-3">
          <div className="row">
            <div className="col-md-12" style={{ backgroundColor: "#f3f3f3" }}>
              <div className="shadow d-flex ms-1">
                <button
                  type="button"
                  className="btn btn-success mt-3 border-0"
                  style={{ width: 80, height: 40 }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default Onlinebookingsetting
