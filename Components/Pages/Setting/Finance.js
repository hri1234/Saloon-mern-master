import React from 'react'
import { Link } from 'react-router-dom'

const Finance = () => {
  return (
    <div>
    <main>
  <div className="d-flex  flex-nowrap">
    <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
    <ul
        className="nav nav-pills flex-column mb-auto"
        style={{  paddingBottom: 124, backgroundColor: "#fff" }}
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
        <div className="container">
          <div
            className="row mt-3 "
            style={{
              backgroundColor: "#d8fdfa",
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <div className="">
              <i className="fa-solid fa-circle-info" />
              Always make sure you check out appointment to get the most out of
              Reports.{" "}
              <a
                href="more_info.html"
                className="learn-more-btn  "
                style={{ color: "black" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-sm-12 mx-auto my-3">
              <div className="row mb-2">
                <div className="col-md-12 col-sm-12">
                  <div className="table-responsive">
                    <table className="table border tab table-bordered">
                      <thead className="" style={{ whiteSpace: "nowrap" }}>
                        <tr className="table-active">
                          <th>Number</th>
                          <th>Invoice period</th>
                          <th>Amount</th>
                          <th>End of period balance</th>
                          <th>Items</th>
                          <th>Status</th>
                          <th>Details report</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
                          </td>
                        </tr>
                        <tr
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <td>LT102747-38</td>
                          <td>2024-01-16 - 2024-01-31</td>
                          <td>-945,39$</td>
                          <td>-945,39</td>
                          <td>202</td>
                          <td>
                            <p
                              type="button"
                              className="btn btn-success p-0 px-2 py-1 "
                              style={{ fontSize: 11 }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-sharp fa-thin fa-circle-info" />
                              PAYMENT MADE
                            </p>
                          </td>
                          <td className="text-primary">
                            <i className="fa-solid fa-download m-2 text-primary" />
                            Download PDF
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
    </div>
  </div>
</main>
  
    </div>
  )
}

export default Finance
