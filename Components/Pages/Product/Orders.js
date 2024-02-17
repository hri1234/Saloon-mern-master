import React from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <main className="d-flex flex-nowrap">
    <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
      <ul
        className="nav nav-pills flex-column mb-auto"
        style={{ paddingBottom: 124, backgroundColor: "#fff" }}>
        <li className="nav-item">
          <Link
          to="/product"
            className="nav-link text-dark"
            aria-current="page">
            <i className="fa-regular fa-conveyor-belt-arm me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Products
            </small>
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to="/supplier"
            className="nav-link text-dark"
            aria-current="page">
            <i className="fa-regular fa-conveyor-belt-arm me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Suppliers
            </small>
          </Link>
        </li>
        <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
          <Link
           to="/order"
            className="nav-link text-dark"
            aria-current="page">
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
            <h4>Product Orders</h4>
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
                Ordering a new product
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
                      <th>Supplier</th>
                      <th>Date of order</th>
                      <th>Units ordered</th>
                      <th>Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Aaditay</td>
                      <td>12/01/2024</td>
                      <td>50</td>
                      <td>ORDERED</td>
                    </tr>
                    <tr>
                      <td>Kuldeep</td>
                      <td>12/01/2024</td>
                      <td>60</td>
                      <td>ORDERED</td>
                    </tr>
                    <tr>
                      <td>Raj</td>
                      <td>12/01/2024</td>
                      <td>70</td>
                      <td>ORDERED</td>
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
            <h4 className="modal-title">Choose a supplier</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>
          {/* Modal body */}
          <div className="modal-body mt-2">
            <h5> Supplier Information </h5>
            <hr />
            <div
              className="row"
              data-bs-toggle="modal"
              data-bs-target="#myModal1"
            >
              <div className="col-md-12 col-sm-12">
                <label htmlFor="" className="form-label">
                  <b>Aaditay</b>
                  <br /> 1 supplier
                </label>
              </div>
            </div>
            <hr />
            <div
              className="row"
              data-bs-toggle="modal"
              data-bs-target="#myModal1"
            >
              <div className="mb-3 col-md-12 col-sm-12">
                <label htmlFor="" className="form-label">
                  <b>Kuldeep</b>
                  <br /> 1 supplier
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* myModal1 Aaditay Click*/}
    <div
      className="modal fade"
      id="myModal1"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header shadow">
            <h5 className="modal-title" id="exampleModalLabel">
              Supplier Name
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row mb-4">
              <div className="col-md-12 col-sm-12">
                <div className="table-responsive">
                  <table className="table border tab">
                    <thead className="" style={{ whiteSpace: "nowrap" }}>
                      <tr className="table-active">
                        <th>Products</th>
                        <th>Available Quantity</th>
                        <th>Order Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Shampoo</td>
                        <td className="align-items-center">
                          <input
                            className="form-control ms-4 text-center"
                            type="text"
                            placeholder={100}
                            aria-label="default input example"
                            style={{ width: "40%" }}
                          />
                        </td>
                        <td className="d-flex">
                          <a
                            href="#"
                            className="nav-link link-body-emphasis px-2 active align-items-center d-flex gap-2"
                            aria-current="page"
                          >
                            <i
                              className="fa-regular fa-plus p-2"
                              style={{ backgroundColor: "#eee" }}
                            />
                          </a>
                          <input
                            className="form-control"
                            type="text"
                            placeholder={10}
                            aria-label="default input example"
                            style={{ width: "30%" }}
                          />
                          <a
                            href="#"
                            className="nav-link link-body-emphasis px-2  align-items-center d-flex gap-2"
                            aria-current="page"
                          >
                            <i
                              className="fa-regular fa-minus  p-2"
                              style={{ backgroundColor: "#eee" }}
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Hair Color</td>
                        <td className="align-items-center">
                          <input
                            className="form-control ms-4 text-center"
                            type="text"
                            placeholder={100}
                            aria-label="default input example"
                            style={{ width: "40%" }}
                          />
                        </td>
                        <td className="d-flex">
                          <a
                            href="#"
                            className="nav-link link-body-emphasis px-2 active align-items-center d-flex gap-2"
                            aria-current="page"
                          >
                            <i
                              className="fa-regular fa-plus p-2"
                              style={{ backgroundColor: "#eee" }}
                            />
                          </a>
                          <input
                            className="form-control"
                            type="text"
                            placeholder={10}
                            aria-label="default input example"
                            style={{ width: "30%" }}
                          />
                          <a
                            href="#"
                            className="nav-link link-body-emphasis px-2  align-items-center d-flex gap-2"
                            aria-current="page"
                          >
                            <i
                              className="fa-regular fa-minus  p-2"
                              style={{ backgroundColor: "#eee" }}
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer shadow">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Create an order
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  )
}

export default Orders
