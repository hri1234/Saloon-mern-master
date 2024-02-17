import React from 'react'
import { Link } from 'react-router-dom'

const Bank_detail = () => {
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
                    to="/finance"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <small className="fw-bold">Invoicing</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link border" to="/bussiness_detail">
                      <small className="fw-bold">Business Details</small>
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link className="nav-link border" to="/bank_detail">
                      <small className="fw-bold">Bank Details</small>
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
            <div className="col-md-1 mt-3">
              <i
                className="fa-solid fa-circle-info"
                style={{ color: "green", fontSize: 64 }}
              />
            </div>
            <div className="col-md-11 mt-3">
              <h4>Why do ask for this ?</h4>
              <p>
                We need your bank details to send your money for appointments
                paid for through Treatwell. <br />
                If we owe you money, we'll transfer It to this account on the
                1st and 16th of every month.
              </p>
            </div>
            <div className="col-md-2 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Account holder name
              </label>
            </div>
            <div className="col-md-10 mt-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-md-2 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Account number
              </label>
            </div>
            <div className="col-md-10 mt-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-md-2 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Bank sort code
              </label>
            </div>
            <div className="col-md-10 mt-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-md-2 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Bank name
              </label>
            </div>
            <div className="col-md-10 mt-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-md-2 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Invoice Notification email
              </label>
            </div>
            <div className="col-md-10 mt-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
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

export default Bank_detail
