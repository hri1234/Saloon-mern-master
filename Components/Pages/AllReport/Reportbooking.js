import { Link } from 'react-router-dom'
import React from 'react'

const Reportbooking = () => {
  return (
    <div>
   <main className="d-flex align-items-baseline flex-nowrap">
  <div className="container-fluid   shadow">
    <div className="row  border">
      <div className="col-md-2 border">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type=""
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            All bookings
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Appointment bookings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Dated bookings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                eVoucher bookings
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-2 border">
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            All types{" "}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                All types
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Unconfirmed
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Cancelled
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Rejected
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Schrduled in the future
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-2 border">
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Last 30 days{" "}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-md-12">
        <h5 className="card-title">
          <Link
            style={{ textDecoration: "none" }}
            className="text-secondary-emphasis"
           to="/report"
          >
            <i className="fa-solid fa-angle-left" />
            Reports
          </Link>
        </h5>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 mt-3 ">
        <div className="table-responsive ">
          <table className="table  table-hover  table-bordered">
            <thead className="table-secondary">
              <tr className="">
                <th scope="col"></th>
                <th scope="col">Order ref#</th>
                <th scope="col">Order date</th>
                <th scope="col">Appointment date</th>
                <th scope="col">Employee</th>
                <th scope="col">Customer</th>
                <th scope="col">Service</th>
                <th scope="col">Value</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CANCELLED
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <i className="fa-regular fa-clock" />
                </td>
                <td>T1443568761</td>
                <td>2024-02-02 12:22</td>
                <td>2024-02-02 14:30</td>
                <td>David</td>
                <td>Kajus</td>
                <td>Parprastas kirpimas / Haircut</td>
                <td>24,99$</td>
                <td>
                  <p
                    type="button"
                    className="btn btn-success p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    CONFIRMED
                  </p>
                  <br />
                  <p
                    type="button"
                    className="btn btn-danger p-0 px-2 py-1 rounded-pill "
                    style={{ fontSize: 11 }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    UNPAID
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>


    </div>
  )
}

export default Reportbooking
