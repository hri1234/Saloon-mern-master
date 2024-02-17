import React from 'react'
import { Link } from 'react-router-dom'

const Opening_hour = () => {
  return (
    <div>
      <main>
  <div className="d-flex flex-nowrap">
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
                    to="/vanue_detail"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <small className="fw-bold">Venue details</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link border" to="/opening_hour">
                      <small className="fw-bold">Opening hours</small>
                    </Link>
                  </li>
                
                  <li className="nav-item">
                    <Link className="nav-link border" to="/resources">
                      <small className="fw-bold">Resources</small>
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
        <div className="col">
          <div className="row mt-2">
            <div className="col-md-6 offset-md-1">
              <div className="row">
                <div className="d-flex">
                  <div className="col-md-3">Opening hours</div>
                  <div className="col-md-9">
                    <div className="table-responsive">
                      <table className="table mt-2 table-borderless">
                        <tbody>
                          <tr className="">
                            <td style={{ borderLeft: "5px solid #3ba150" }}>
                              <input type="checkbox" />
                            </td>
                            <td>Monday</td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">10:00</option>
                                <option value={1}>11:00</option>
                                <option value={2}>09:00</option>
                                <option value={3}>01:00</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">19:45</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderLeft: "5px solid #3ba150" }}>
                              <input type="checkbox" />
                            </td>
                            <td>Tuesday</td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">09:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">20:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderLeft: "5px solid #3ba150" }}>
                              <input type="checkbox" />
                            </td>
                            <td>Wednesday</td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">10:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">20:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderLeft: "5px solid #3ba150" }}>
                              <input type="checkbox" />
                            </td>
                            <td>Thursday</td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">10:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">21:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderLeft: "5px solid #3ba150" }}>
                              <input type="checkbox" />
                            </td>
                            <td>Friday</td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">10:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">23:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderLeft: "5px solid #3ba150" }}>
                              <input type="checkbox" />
                            </td>
                            <td>Saturday</td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">10:30</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">20:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderLeft: "5px solid #3ba150" }}>
                              <input type="checkbox" />
                            </td>
                            <td>Sunday</td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">10:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">18:00</option>
                                <option value={1}>20:00</option>
                                <option value={2}>12:00</option>
                                <option value={3}>21:0</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <h6 style={{ padding: 20, color: "rgb(8, 8, 49)", marginTop: 5 }}>
                Preview on Treatwell
              </h6>
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

export default Opening_hour
