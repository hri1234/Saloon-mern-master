import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../../Assets/cosmetic (1).png'
const Products = () => {


  return (
    <main className="d-flex flex-nowrap">
    <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
    <ul
        className="nav nav-pills flex-column mb-auto"
        style={{  paddingBottom: 124, backgroundColor: "#fff" }}
      >
        <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
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
        <li className="nav-item">
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
            <i className="fa-light f a-chart-simple me-2" />
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
      <div className="row">
        <div className="text-center">
          <img src={pic1} alt="" />
        </div>
        <h5 className="text-center">Empty shelf</h5>
        <p className="text-center">
          This is where you can list all the hair and beauty products your
          <br /> salon uses and sells Get Started by adding your fist product new
        </p>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
        >
            Add New
          </button>
        </div>
      </div>
      <div className="row mt-2">
        <div className=" col-md-6">
          <div>
            <h4>Products</h4>
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
                      <th>Product</th>
                      <th>Supplier</th>
                      <th>Price</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Blade</td>
                      <td>----</td>
                      <td>€112.00</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <td>Gel</td>
                      <td>----</td>
                      <td>€200.00</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>Shampoo</td>
                      <td>----</td>
                      <td>€320.00</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>Hair Color</td>
                      <td>----</td>
                      <td>€120.00</td>
                      <td>300</td>
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
            <h4 className="modal-title">Add Product</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <p>
              {" "}
              You will be able to use the described products during checkout.
              Enter standard product prices including VAT.{" "}
            </p>
            <div className="row mt-3">
              <div className="col-md-10 offset-md-1">
                <div>
                  <label className="me-1"> Product name </label>
                  <input className="" type="text" />
                </div>
                <br />
                <div>
                  <label className="me-3"> Unit price, € </label>
                  <input className="" type="text" />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label className="me-2">Track quantity in stock</label>{" "}
              <input type="checkbox" />
            </div>
            <div className="mt-3 ms-1">
              <label className="me-2">Available quantity</label>{" "}
              <input type="type" />
            </div>
          </div>
          {/* Modal footer */}
          <div className="modal-footer shadow">
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

export default Products
