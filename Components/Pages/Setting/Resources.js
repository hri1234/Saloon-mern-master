import React from 'react'
import { Link } from 'react-router-dom'

const Resources = () => {
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
          <div className="row m-5">
            <div className="col-md-5 mx-auto">
              <div className="d-flex justify-content-between">
                <div>
                  <img
                    src="/img/chair.jpg"
                    style={{ width: 120, borderRadius: "50%" }}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="ms-3">
                  <p style={{ fontSize: 13 }}>
                    Resources help you to manage availabilty of your room,
                    chairs, beds or equipment. Add your resources here.
                  </p>
                  <button
                    type="button"
                    className="btn btn-success p-0 px-1 py-1"
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa-solid fa-plus" />
                    Add New
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Add resources
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <p style={{ fontSize: 15 }}>
                            By adding resources you will have a clear overview
                            of the availabilty of Specify resources for
                            different type of treatments.
                          </p>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              Resources name
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              Quantity
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                          <div className="mb-1">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              Assigned services
                            </label>
                          </div>
                          <div
                            className="border"
                            style={{
                              height: 200,
                              overflow: "scroll",
                              overflowX: "hidden"
                            }}
                          >
                            <p style={{ fontWeight: 600, paddingLeft: 10 }}>
                              Kirpimas / Haircut
                            </p>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Barzods modellavimas Pro / Beard Pro
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Barzods modellavimas / Beard
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Barzods koregavimas / Clean-Up
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Vaiku kipimas / Kids Haircut (1-10 metu)
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Galvos skutimas / Head Shave
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                VIP paslauga / Legends VIP Service
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Kipimas Pro Maxx / Haircut Pro Maxx
                              </div>
                            </div>
                            <div>
                              <p style={{ fontWeight: 600, padding: 10 }}>
                                Plauku dazymas
                              </p>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Zillu plauku tonavimas / Fada The Gray
                              </div>
                            </div>
                            <div>
                              <p style={{ fontWeight: 600, padding: 10 }}>
                                Masazal / Massages
                              </p>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Galvos massazas / Head Massage
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Plauku plovimas su masazu / Mini-Body Hair
                                Washing Massage
                              </div>
                            </div>
                            <div>
                              <p style={{ fontWeight: 600, padding: 10 }}>
                                Depiliacija / Waxing
                              </p>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">Ear Candle Wax</div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Mini-Body Hair Washing Massage
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Jaunikis / Groomamsmaid
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Klasikins Jaunikis / Groom Classic
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Jaunikis Pllus / Groom Plus
                              </div>
                            </div>
                            <div>
                              <p style={{ fontWeight: 600, padding: 10 }}>
                                Vedio Proceduros
                              </p>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Drekinamoji vedio procedura
                              </div>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Veido procedura vyrams / Men Facial
                              </div>
                            </div>
                            <div>
                              <p style={{ fontWeight: 600, padding: 10 }}>
                                Kirpimas
                              </p>
                            </div>
                            <div className="container d-flex p-2 border">
                              <div className="col-md-2">
                                <input type="checkbox" />
                              </div>
                              <div className="col-md-10">
                                Barzdos kipimas ir modeliavimas
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-success">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
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

export default Resources
