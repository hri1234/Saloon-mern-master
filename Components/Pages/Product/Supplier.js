import React from 'react'
import { Link } from 'react-router-dom'
const Supplier = () => {
  return (
    <main className="d-flex flex-nowrap">
    <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
      <ul
        className="nav nav-pills flex-column mb-auto"
        style={{ paddingBottom: 124, backgroundColor: "#fff" }}
      >
        <li className="nav-item">
          <Link
          to="/product"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-regular fa-conveyor-belt-arm me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Products
            </small>
          </Link>
        </li>
        <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
          <Link
           to="/supplier"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-regular fa-conveyor-belt-arm me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Suppliers
            </small>
          </Link>
        </li>
        <li className="nav-item" >
          <Link
           to="/order"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-light fa-truck-field me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Orders
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
    <div className="container mb-3 mt-5">
      <div className="row mt-2">
        <div className=" col-md-6">
          <div>
            <h4>Suppliers</h4>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-end">
            {/* Button trigger modal */}
            <div className=" mb-2">
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Add a new one
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 mx-auto my-3">
          <div className="row mb-4">
            <div className="col-md-12 col-sm-12">
              <div className="table-responsive">
                <table className="table border tab">
                  <thead className="" style={{ whiteSpace: "nowrap" }}>
                    <tr className="table-active">
                      <th>Name of the Supplier</th>
                      <th>Contact Person</th>
                      <th>Telephone Number</th>
                      <th>Email</th>
                      <th>Assigned products</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Aaditay</td>
                      <td>8907896543</td>
                      <td>+98765 43210</td>
                      <td>aa@GMAIL.com</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <td>Aaditay</td>
                      <td>8907896543</td>
                      <td>+98765 43210</td>
                      <td>aa@GMAIL.com</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <td>Aaditay</td>
                      <td>8907896543</td>
                      <td>+98765 43210</td>
                      <td>aa@GMAIL.com</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <td>Aaditay</td>
                      <td>8907896543</td>
                      <td>+98765 43210</td>
                      <td>aa@GMAIL.com</td>
                      <td>1000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* The Modal */}
    <div className="modal" id="myModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header shadow">
            <h4 className="modal-title">Supplier details</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>
          {/* Modal body */}
          <div className="modal-body mt-2">
            <h5> Supplier Information </h5>
            <hr />
            <div className="row">
              <div className="mb-3 col-md-12 col-sm-12">
                <label htmlFor="" className="form-label">
                  <b>Name of the supplier *</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  placeholder="Enter Name of the supplier* Here"
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-12 col-sm-12">
                <label htmlFor="" className="form-label">
                  <b>Contact Person</b>
                </label>
                <input
                  type="type"
                  className="form-control"
                  name=""
                  id=""
                  placeholder="Enter Contact Person Here"
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-12 col-sm-12">
                <label htmlFor="" className="form-label">
                  <b>Telephone Number</b>
                </label>
                <input
                  type="type"
                  className="form-control"
                  name=""
                  id=""
                  placeholder="Enter Telephone Number Here"
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-12 col-sm-12">
                <label htmlFor="" className="form-label">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name=""
                  id=""
                  placeholder="Enter Email Here"
                />
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="modal-footer shadow">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  )
}

export default Supplier
