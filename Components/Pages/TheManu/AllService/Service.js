import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom'
const Service = () => {
  return (
    <>
  <main>
  <div className="d-flex align-items-baseline flex-nowrap">
    <div className="d-flex align-items-baseline flex-nowrap">
      <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
      <ul
              className="nav nav-pills flex-column mb-auto"
              style={{ paddingBottom: 124, backgroundColor: "#fff" }}>
              <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
                <Link
                  to="/service"
                  className="nav-link text-dark"
                  aria-current="page">
                  <i className="fa-regular fa-scissors me-2" />
                  <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                    Services
                  </small>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/price_level" className="nav-link text-dark" aria-current="page">
                  <i className="fa-sharp fa-light fa-money-bill me-1" />
                  <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                    Price levels
                  </small>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                 to="/discount"
                  className="nav-link text-dark"
                  aria-current="page">
                  <i className="fa-sharp fa-light fa-badge-percent me-1" />
                  <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                    Discounts
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
                      <Link className="nav-link border-0" to="/service">
                        <small className="fw-bold">All services</small>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link border" to="/depilation">
                        <small className="fw-bold">Depilation</small>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link border" to="/message">
                        <small className="fw-bold">Massage</small>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link border" to="/hair">
                        <small className="fw-bold">Hair</small>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link border" to="/face">
                        <small className="fw-bold">Face</small>
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
            <div className="d-flex flex-row justify-content-between mt-3">
              <div className="p-2">
                <h2 className="mb-0">Services</h2>
              </div>
              <div className="p-2">
                <a
                  className="btn text-light"
                  href="#"
                  role="button"
                  style={{ backgroundColor: "#37824B" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  Add new...
                </a>
              </div>
            </div>
            {/* <div class="my-3 d-flex  justify-content-between ">
                      <div>
                          <h2> Service </h2>
                      </div>
                      <div>
                          <button type="button" class="EnterNew  ">Enter a New...</button>
                      </div>
                  </div> */}
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col" colSpan={3}>
                    <i className="fa-regular fa-bars me-2" />
                    <h6
                      className="d-inline"
                      style={{ fontWeight: 500, letterSpacing: "0.5px" }}
                    >
                      Kirpimas/Haircuts
                    </h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  scope="col"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ cursor: "pointer" }}
                >
                  <td>
                    <i className="fa-regular fa-scissors me-2" />
                    <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                      Barzdos modeleliavimas Pro/Beard Pro
                    </small>
                  </td>
                  <td>
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      45 min
                    </small>
                  </td>
                  <td className="text-end">
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      29,99$
                    </small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-regular fa-scissors me-2" />
                    <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                      Barzdos modeleliavimas / Beard{" "}
                    </small>
                  </td>
                  <td>
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      30 min
                    </small>
                  </td>
                  <td className="text-end">
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      24,99$
                    </small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-regular fa-scissors me-2" />
                    <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                      vaiku kirpimas / kids haircut (1-10 menu)
                    </small>
                  </td>
                  <td>
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      40 min
                    </small>
                  </td>
                  <td className="text-end">
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      19,99$
                    </small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-regular fa-scissors me-2" />
                    <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                      Galvos skutimas / Head Shave{" "}
                    </small>
                  </td>
                  <td>
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      55 min
                    </small>
                  </td>
                  <td className="text-end">
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      39,99$
                    </small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-regular fa-scissors me-2" />
                    <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                      VIP paslauge / legends VIP service
                    </small>
                  </td>
                  <td>
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      45 min
                    </small>
                  </td>
                  <td className="text-end">
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      29,99$
                    </small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-regular fa-scissors me-2" />
                    <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                      Kirpimas pro maxx / Haircut Pro maxx
                    </small>
                  </td>
                  <td>
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      45 min
                    </small>
                  </td>
                  <td className="text-end">
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      29,99$
                    </small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-regular fa-scissors me-2" />
                    <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                      Kirpimas Pro / haircut
                    </small>
                  </td>
                  <td>
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      55 min
                    </small>
                  </td>
                  <td className="text-end">
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      39,99$
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            {/*  second row  */}
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col" colSpan={3}>
                    <i className="fa-regular fa-bars me-2" />
                    <h6
                      className="d-inline"
                      style={{ fontWeight: 500, letterSpacing: "0.5px" }}
                    >
                      Plauku dazymas{" "}
                    </h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr scope="col" style={{ cursor: "pointer" }}>
                  <td>
                    <i className="fa-regular fa-scissors me-2" />
                    <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                      Zilu Plauke tonavimas / Fade the gray{" "}
                    </small>
                  </td>
                  <td>
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      45 min
                    </small>
                  </td>
                  <td className="text-end">
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      29,99$
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            {/*  Three row  */}
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col" colSpan={3}>
                    <i className="fa-regular fa-bars me-2" />
                    <h6
                      className="d-inline"
                      style={{ fontWeight: 500, letterSpacing: "0.5px" }}
                    >
                      Masazai / Massages{" "}
                    </h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr scope="col" style={{ cursor: "pointer" }}>
                  <td>
                    <i className="fa-regular fa-scissors me-2" />
                    <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                      Galvos Masazas / Head Massage
                    </small>
                  </td>
                  <td>
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      45 min
                    </small>
                  </td>
                  <td className="text-end">
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      29,99$
                    </small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-regular fa-scissors me-2" />
                    <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                      Plauke Plovimas su masazu / Mini-body Hair Washing Massage
                    </small>
                  </td>
                  <td>
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      30 min
                    </small>
                  </td>
                  <td className="text-end">
                    <small style={{ fontWeight: 400, letterSpacing: "0.5px" }}>
                      24,99$
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="exampleModal1"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {" "}
            Add New{" "}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-3">
                <div className="row">
                  <div className="col-md-2 ">
                    <div className="d-flex  justify-content-center m-5">
                      <i className="fa-solid fs-4 fa-list" />
                    </div>
                  </div>
                  <div className="col-md-10 ">
                    <div className="card-body ">
                      <p className="card-title p-0 m-0"> Service </p>
                      <p className="card-text p-0 m-0">
                        <small className="text-muted">
                          {" "}
                          A service is one treatment per booking-nice and Simple{" "}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card mb-3">
                <div className="row">
                  <div className="col-md-2 ">
                    <div className="d-flex  justify-content-center m-5">
                      <i className="fa-solid fa-files fs-4" />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-title p-0 m-0"> Package </p>
                      <p className="card-text p-0 m-0">
                        <small className="text-muted">
                          {" "}
                          A few Service that can be booked together, typically
                          provided by diffrent team members{" "}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card mb-3">
                <div className="row">
                  <div className="col-md-2 ">
                    <div className="d-flex  justify-content-center m-5">
                      <i className="fa-solid fa-layer-group fs-4" />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-title p-0 m-0"> Menu Group </p>
                      <p className="card-text p-0 m-0">
                        <small className="text-muted">
                          {" "}
                          Menu group are great fot categorizing service and
                          could make it easier client to find what they are
                          looking for{" "}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
              </div> */}
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-xl">
      <div className="modal-content modal-xl">
        <div className="modal-header shadow-sm">
          <h5 className="modal-title" id="exampleModalLabel">
            Service
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body p-3">
          {/*   modal box top menu start */}
          <ul className="nav nav-underline" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-dark active"
                id=" home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Services and Prices
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-dark"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-dark"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                {" "}
                Fine Print{" "}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-dark"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#address-tab-pane"
                type="button"
                role="tab"
                aria-controls="address-tab-pane"
                aria-selected="false"
              >
                Distribution
              </button>
            </li>
          </ul>
          <div
            className="tab-content"
            id="myTabContent"
            style={{ backgroundColor: "#fafafa" }}
          >
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex={0}
            >
              <div
                className="container shadow-sm my-4 border-0 py-3"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <small
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Service title
                      </small>
                      <input
                        type="text"
                        className="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                        id="exampleFormControlInput1"
                        placeholder="Vaikų kirpimas / Kids Haircut (1-10 metų)"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="mb-3">
                      <small
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Treatment Type
                      </small>
                      <div
                        type=""
                        className=" mt-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-title="Tooltip on bottom"
                      >
                        Vaikų kirpimas
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <small
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Discount
                      </small>
                      <select
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                        aria-label="Default select example"
                      >
                        <option selected="">No discount</option>
                        <option value={1}>aaaa</option>
                        <option value={2}>Create new discount</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="container shadow-sm my-4 border-0  py-3"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="row row-cols-1">
                  <div className="col mb-1">
                    <div className="ps-0 mb-1 form-check">
                      <small
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Team - who is taking online appointments for the service
                      </small>
                    </div>
                    <a className="btn rounded-1 p-1" href="#" role="button">
                      <input
                        className="form-check-input border-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckChecked"
                        defaultChecked=""
                        style={{ backgroundColor: "#3ba150" }}
                      />
                      <label
                        className="form-check-label  "
                        htmlFor="flexCheckChecked"
                      >
                        Select all
                      </label>
                    </a>
                  </div>
                  <div className="col">
                    <div className="row row-cols-4 g-2">
                      <div className="col w-auto">
                        <a
                          className="btn rounded-1"
                          href="#"
                          role="button"
                          style={{ backgroundColor: "#f2f2f2" }}
                        >
                          <input
                            className="form-check-input border-0"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                            style={{ backgroundColor: "#3ba150" }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Diego
                          </label>
                        </a>
                      </div>
                      <div className="col w-auto">
                        <a
                          className="btn rounded-1 "
                          href="#"
                          role="button"
                          style={{ backgroundColor: "#f2f2f2" }}
                        >
                          <input
                            className="form-check-input border-0"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                            style={{ backgroundColor: "#3ba150" }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            David
                          </label>
                        </a>
                      </div>
                      <div className="col w-auto">
                        <a
                          className="btn rounded-1"
                          href="#"
                          role="button"
                          style={{ backgroundColor: "#f2f2f2" }}
                        >
                          <input
                            className="form-check-input border-0"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                            style={{ backgroundColor: "#3ba150" }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Camilo
                          </label>
                        </a>
                      </div>
                      <div className="col w-auto">
                        <a
                          className="btn rounded-1"
                          href="#"
                          role="button"
                          style={{ backgroundColor: "#f2f2f2" }}
                        >
                          <input
                            className="form-check-input border-0"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                            style={{ backgroundColor: "#3ba150" }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Jose Cuesta
                          </label>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="container shadow-sm my-4 border-0 py-3"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="row row-cols-1">
                  <div className="col mb-1">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <div
                            type=""
                            className=" border  border-top-0 border-start-0 border-end-0 border-secondary   mt-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-title="Tooltip on bottom"
                            style={{ paddingTop: 28 }}
                          >
                            Vaikų kirpimas / Kids Haircut (1-10 metų)
                          </div>
                          {/* <input type="text"
                                                      class="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                                                      id="exampleFormControlInput1"
                                                      placeholder="Vaikų kirpimas / Kids Haircut (1-10 metų)"
                                                      style="padding-top: 28px;"> */}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <small
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Duration
                          </small>
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                            aria-label="Default select example"
                          >
                            <option selected="">40 min</option>
                            <option value={1}>aaaa</option>
                            <option value={2}>Create new discount</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div>
                          <small
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Price
                          </small>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                              id="exampleFormControlInput1"
                              placeholder="19,99"
                            />
                            <span className="input-group-text rounded-0 border-top-0 border-start-0 border-end-0 border-dark bg-transparent">
                              $
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div>
                          <small
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                            style={{ fontSize: ".850em" }}
                          >
                            Sale price
                          </small>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                              id="exampleFormControlInput1"
                              placeholder=""
                            />
                            <span className="input-group-text rounded-0 border-top-0 border-start-0 border-end-0 border-dark bg-transparent">
                              $
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-3">
                <a
                  className="btn py-0 px-2 py-1"
                  style={{ backgroundColor: "#4d4d4d" }}
                  href="#"
                  role="button"
                >
                  <i className="fa-regular fa-plus text-white" />
                  <small className="text-white">Add pricing option</small>
                </a>
              </div>
              <div
                className="container shadow-sm my-4 border-0  py-3 "
                style={{ backgroundColor: "#fff" }}
              >
                <div className="row">
                  <div className="col-md-2">
                    <div className="mb-3">
                      <small
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Cleanup time
                      </small>
                      <select
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                        aria-label="Default select example"
                      >
                        <option selected="">None</option>
                        <option value={1}>5 minutes</option>
                        <option value={1}>10 minutes</option>
                        <option value={1}>15 minutes</option>
                        <option value={1}>20 minutes</option>
                        <option value={1}>25 minutes</option>
                        <option value={1}>30 minutes</option>
                        <option value={1}>35 minutes</option>
                        <option value={1}>65 minutes</option>
                        <option value={1}>75 minutes</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex={0}
            >
              <div
                className="container shadow-sm my-4 border"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="format"
                      role="toolbar"
                      aria-label="Text Formatting"
                      aria-controls="textarea1"
                    >
                      <div className="group characteristics">
                        <button
                          type="button"
                          className="item bold popup"
                          aria-pressed="false"
                          value="bold"
                          tabIndex={0}
                        >
                          <span className="fas fa-bold" aria-hidden="true" />
                          <span className="popup-label">Bold</span>
                        </button>
                        <button
                          type="button"
                          className="item italic popup"
                          aria-pressed="false"
                          value="italic"
                          tabIndex={-1}
                        >
                          <span className="fas fa-italic" aria-hidden="true" />
                          <span className="popup-label">Italic</span>
                        </button>
                        <button
                          type="button"
                          className="item underline popup"
                          aria-pressed="false"
                          value="underline"
                          tabIndex={-1}
                        >
                          <span
                            className="fas fa-underline"
                            aria-hidden="true"
                          />
                          <span className="popup-label">Underline</span>
                        </button>
                      </div>
                      <div
                        className="group"
                        role="radiogroup"
                        aria-label="Text Alignment"
                      >
                        <button
                          type="button"
                          role="radio"
                          className="item align-left popup"
                          aria-checked="true"
                          tabIndex={-1}
                        >
                          <span
                            className="fas fa-align-left"
                            aria-hidden="true"
                          />
                          <span className="popup-label">Text Align Left</span>
                        </button>
                        <button
                          type="button"
                          role="radio"
                          className="item align-center popup"
                          aria-checked="false"
                          tabIndex={-1}
                        >
                          <span
                            className="fas fa-align-center"
                            aria-hidden="true"
                          />
                          <span className="popup-label">Text Align Center</span>
                        </button>
                        <button
                          type="button"
                          role="radio"
                          className="item align-right popup"
                          aria-checked="false"
                          tabIndex={-1}
                        >
                          <span
                            className="fas fa-align-right"
                            aria-hidden="true"
                          />
                          <span className="popup-label">Text Align Right</span>
                        </button>
                      </div>
                      <div className="group">
                        <button
                          type="button"
                          className="item copy"
                          aria-disabled="true"
                          tabIndex={-1}
                        >
                          Copy
                        </button>
                        <button
                          type="button"
                          className="item paste"
                          aria-disabled="true"
                          tabIndex={-1}
                        >
                          Paste
                        </button>
                        <button
                          type="button"
                          className="item cut"
                          aria-disabled="true"
                          tabIndex={-1}
                        >
                          Cut
                        </button>
                      </div>
                      <div className="menu-popup group">
                        <button
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-controls="menu1"
                          className="item menu-button"
                          tabIndex={-1}
                          aria-label="Font: Sans-serif"
                          style={{
                            textAlign: "left",
                            width: 140,
                            fontFamily: "sans-serif"
                          }}
                        >
                          SANS-SERIF
                          <span />
                        </button>
                        <ul role="menu" id="menu1" aria-label="Font Family">
                          <li
                            role="menuitemradio"
                            aria-checked="true"
                            style={{ fontFamily: "sans-serif" }}
                          >
                            Sans-serif
                          </li>
                          <li
                            role="menuitemradio"
                            aria-checked="false"
                            style={{ fontFamily: "serif" }}
                          >
                            Serif
                          </li>
                          <li
                            role="menuitemradio"
                            aria-checked="false"
                            style={{ fontFamily: "monospace" }}
                          >
                            Monospace
                          </li>
                          <li
                            role="menuitemradio"
                            aria-checked="false"
                            style={{ fontFamily: "fantasy" }}
                          >
                            Fantasy
                          </li>
                          <li
                            role="menuitemradio"
                            aria-checked="false"
                            style={{ fontFamily: "cursive" }}
                          >
                            Cursive
                          </li>
                        </ul>
                      </div>
                      <div className="group">
                        <div
                          className="item spinbutton"
                          role="spinbutton"
                          tabIndex={-1}
                          aria-valuenow={14}
                          aria-valuetext="14pt"
                          aria-valuemin={8}
                          aria-valuemax={40}
                          aria-label="Font size in points"
                        >
                          <span className="value">14pt</span>
                          <span className="increase">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={12}
                              height={12}
                            >
                              <polygon
                                className="increase"
                                fill="#333"
                                points="0,12 11,12 6,2"
                              />
                            </svg>
                          </span>
                          <span className="decrease">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={12}
                              height={12}
                            >
                              <polygon
                                className="decrease"
                                fill="#333"
                                points="0,2 11,2 6,12"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="group">
                        <label className="input">
                          <input
                            id="checkbox"
                            className="item nightmode"
                            type="checkbox"
                            tabIndex={-1}
                          />{" "}
                          Night Mode
                        </label>
                        <a
                          id="link"
                          className="item link"
                          href=""
                          tabIndex={-1}
                        >
                          Help
                        </a>
                      </div>
                    </div>
                    <label htmlFor="textarea1" className="hidden">
                      Text Sample
                    </label>
                    <br />
                    <textarea
                      id=""
                      rows={20}
                      cols={80}
                      style={{ fontFamily: "sans-serif" }}
                      defaultValue={
                        "                                                Abraham Lincoln's Gettysburg Address\n                                        "
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabIndex={0}
            >
              <div
                className="container shadow-sm my-4 border"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="format"
                      role="toolbar"
                      aria-label="Text Formatting"
                      aria-controls="textarea1"
                    >
                      <div className="group characteristics">
                        <button
                          type="button"
                          className="item bold popup"
                          aria-pressed="false"
                          value="bold"
                          tabIndex={0}
                        >
                          <span className="fas fa-bold" aria-hidden="true" />
                          <span className="popup-label">Bold</span>
                        </button>
                        <button
                          type="button"
                          className="item italic popup"
                          aria-pressed="false"
                          value="italic"
                          tabIndex={-1}
                        >
                          <span className="fas fa-italic" aria-hidden="true" />
                          <span className="popup-label">Italic</span>
                        </button>
                        <button
                          type="button"
                          className="item underline popup"
                          aria-pressed="false"
                          value="underline"
                          tabIndex={-1}
                        >
                          <span
                            className="fas fa-underline"
                            aria-hidden="true"
                          />
                          <span className="popup-label">Underline</span>
                        </button>
                      </div>
                      <div
                        className="group"
                        role="radiogroup"
                        aria-label="Text Alignment"
                      >
                        <button
                          type="button"
                          role="radio"
                          className="item align-left popup"
                          aria-checked="true"
                          tabIndex={-1}
                        >
                          <span
                            className="fas fa-align-left"
                            aria-hidden="true"
                          />
                          <span className="popup-label">Text Align Left</span>
                        </button>
                        <button
                          type="button"
                          role="radio"
                          className="item align-center popup"
                          aria-checked="false"
                          tabIndex={-1}
                        >
                          <span
                            className="fas fa-align-center"
                            aria-hidden="true"
                          />
                          <span className="popup-label">Text Align Center</span>
                        </button>
                        <button
                          type="button"
                          role="radio"
                          className="item align-right popup"
                          aria-checked="false"
                          tabIndex={-1}
                        >
                          <span
                            className="fas fa-align-right"
                            aria-hidden="true"
                          />
                          <span className="popup-label">Text Align Right</span>
                        </button>
                      </div>
                      <div className="group">
                        <button
                          type="button"
                          className="item copy"
                          aria-disabled="true"
                          tabIndex={-1}
                        >
                          Copy
                        </button>
                        <button
                          type="button"
                          className="item paste"
                          aria-disabled="true"
                          tabIndex={-1}
                        >
                          Paste
                        </button>
                        <button
                          type="button"
                          className="item cut"
                          aria-disabled="true"
                          tabIndex={-1}
                        >
                          Cut
                        </button>
                      </div>
                      <div className="menu-popup group">
                        <button
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-controls="menu1"
                          className="item menu-button"
                          tabIndex={-1}
                          aria-label="Font: Sans-serif"
                          style={{
                            textAlign: "left",
                            width: 140,
                            fontFamily: "sans-serif"
                          }}
                        >
                          SANS-SERIF
                          <span />
                        </button>
                        <ul role="menu" id="menu1" aria-label="Font Family">
                          <li
                            role="menuitemradio"
                            aria-checked="true"
                            style={{ fontFamily: "sans-serif" }}
                          >
                            Sans-serif
                          </li>
                          <li
                            role="menuitemradio"
                            aria-checked="false"
                            style={{ fontFamily: "serif" }}
                          >
                            Serif
                          </li>
                          <li
                            role="menuitemradio"
                            aria-checked="false"
                            style={{ fontFamily: "monospace" }}
                          >
                            Monospace
                          </li>
                          <li
                            role="menuitemradio"
                            aria-checked="false"
                            style={{ fontFamily: "fantasy" }}
                          >
                            Fantasy
                          </li>
                          <li
                            role="menuitemradio"
                            aria-checked="false"
                            style={{ fontFamily: "cursive" }}
                          >
                            Cursive
                          </li>
                        </ul>
                      </div>
                      <div className="group">
                        <div
                          className="item spinbutton"
                          role="spinbutton"
                          tabIndex={-1}
                          aria-valuenow={14}
                          aria-valuetext="14pt"
                          aria-valuemin={8}
                          aria-valuemax={40}
                          aria-label="Font size in points"
                        >
                          <span className="value">14pt</span>
                          <span className="increase">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={12}
                              height={12}
                            >
                              <polygon
                                className="increase"
                                fill="#333"
                                points="0,12 11,12 6,2"
                              />
                            </svg>
                          </span>
                          <span className="decrease">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={12}
                              height={12}
                            >
                              <polygon
                                className="decrease"
                                fill="#333"
                                points="0,2 11,2 6,12"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="group">
                        <label className="input">
                          <input
                            id="checkbox"
                            className="item nightmode"
                            type="checkbox"
                            tabIndex={-1}
                          />{" "}
                          Night Mode
                        </label>
                        <a
                          id="link"
                          className="item link"
                          href=""
                          tabIndex={-1}
                        >
                          Help
                        </a>
                      </div>
                    </div>
                    <label htmlFor="textarea1" className="hidden">
                      Text Sample
                    </label>
                    <br />
                    <textarea
                      id=""
                      rows={20}
                      cols={80}
                      style={{ fontFamily: "sans-serif" }}
                      defaultValue={
                        "                                                Abraham Lincoln's Gettysburg Address\n                                        "
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="address-tab-pane"
              role="tabpanel"
              aria-labelledby="address-tab"
              tabIndex={0}
            >
              <div
                className="container shadow-sm my-4 border"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="row p-3">
                      <div className="col-md-12">
                        <p>
                          {" "}
                          <b>
                            {" "}
                            How Would you like to sell this service ?{" "}
                          </b>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Feature service (max 5 per venue )
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Sell service Online
                          </label>
                        </div>
                        <div>
                          <p>
                            {" "}
                            Unticking this checkbox means that your client will
                            not be able to book service online <br />
                            it would still be listed in packages, as their
                            online dustridution setting are not affected by this
                            change{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12 ">
                        <div className="row mb-3">
                          <div className="col-md-2">
                            <label className="form-check-label" htmlFor="">
                              listed online
                            </label>
                          </div>
                          <div className="col-md-4">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected="">Open this select menu</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                          <div className="col-md-6" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="row mb-3">
                          <div className="col-md-2">
                            <label className="form-check-label" htmlFor="">
                              listed online
                            </label>
                          </div>
                          <div className="col-md-4">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected="">Open this select menu</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                          <div className="col-md-6" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="row mb-3">
                          <div className="col-md-2">
                            <label className="form-check-label" htmlFor="">
                              listed online
                            </label>
                          </div>
                          <div className="col-md-4">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected="">Open this select menu</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                          <div className="col-md-6" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="row mb-3">
                          <div className="col-md-2">
                            <label className="form-check-label" htmlFor="">
                              listed online
                            </label>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3 form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Allow Client to select multiple options for this
                                service
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-footer shadow-lg d-flex justify-content-between p-0"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="m-0">
          <a className="btn p-3" href="#" role="button" data-bs-dismiss="modal">
            Cancel
          </a>
          <a
            className="btn p-3 border-start border-end rounded-0"
            href="#"
            role="button"
            data-bs-dismiss="modal"
            style={{ color: "red" }}
          >
            Archive
          </a>
          <a
            className="btn p-3  border-end rounded-0"
            href="#"
            role="button"
            data-bs-dismiss="modal"
          >
            <i
              className="fa-regular fa-ellipsis-vertical"
              style={{ rotate: "90deg" }}
            />
          </a>
        </div>
        <div className="m-0">
          <a
            className="btn p-3 text-white rounded-0"
            href="#"
            role="button"
            data-bs-dismiss="modal"
            style={{ backgroundColor: "#3ba150", borderRadius: "0 0 7px 0" }}
          >
            save
          </a>
        </div>
      </div>
    </div>
  </div>
</main>


  </>
  
  )
}

export default Service
