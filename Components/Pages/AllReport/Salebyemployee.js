import React from 'react'
import { Link } from 'react-router-dom'

const Salebyemployee = () => {
  return (
    <div>
      <main className="d-flex align-items-baseline flex-nowrap">
  <div className="container-fluid mb-3 mt-3">
    <div className="container-fluid">
      <div className="row">
        <div>
          <h5>
            {" "}
            <Link
              style={{ textDecoration: "none" }}
              className="text-secondary-emphasis p-1 "
            to="/report"
            >
              <i className="fa-solid fa-angle-left" />
              Reports
            </Link>
          </h5>
        </div>
      </div>
    </div>
    <div className="row mt-2">
      <div className=" col-md-9 pt-2">
        <div className="dropdown">
          <button
            className="btn border-bottom dropdown-toggle "
            style={{ fontWeight: 600, fontSize: "larger" }}
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sales by employee
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Service sales
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Product sales
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sales by employee
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Sales by channel
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Daily sales
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Monthly sales
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        {/* Button trigger modal */}
        <div className="row mt-2">
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              <i className="fa-solid fa-print" /> Print
            </button>
          </div>
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              <i className="fa-solid fa-download" />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="  row  ">
            <div className="col-md-1  ">
              <div className="input-group mb-3">
                <input
                  type="date"
                  className=" "
                  placeholder="1/2/24"
                  style={{
                    border: "0cap",
                    borderBottom: "1px solid rgb(210, 210, 219)"
                  }}
                />
              </div>
            </div>
            <div className="col-md-1">
              <div className="input-group mb-3">
                <input
                  type="date"
                  className=""
                  placeholder="1/2/24"
                  style={{
                    border: "0cap",
                    borderBottom: "1px solid rgb(210, 210, 219)"
                  }}
                />
              </div>
            </div>
            <div className="col-md-1">
              <div className="dropdown ">
                <a
                  className="btn     dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All channels
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All channels
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Connect
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Widget
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Treatwell
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-1">
              <div className="dropdown ">
                <a
                  className="btn     dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All team members
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Categories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      All team members
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Employed
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Self-employed
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Team members
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Airel Pabol
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Austeja
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Camilo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Crisian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      David
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Diego
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      John
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Jose
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cuesta
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Karolina lvasko
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      TESTING
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vilija Butkute
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 ">
              <div className="float-end">
                {/* <span style="color:  rgb(35, 35, 182) ;">Go to this week</span> */}
                Generated Friday,Feburary 2,2024 11:36 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row mt-3 " style={{ backgroundColor: "#d8fdfa" }}>
        <div className="">
          <i className="fa-solid fa-circle-info" />
          Always make sure you check out appointment to get the most out of
          Reports.{" "}
          <a
            href="more_info.html"
            className="learn-more-btn "
            style={{ color: "black" }}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 col-sm-12 mx-auto my-3">
        <div className="row mb-4">
          <div className="col-md-12 col-sm-12">
            <div className="table-responsive">
              <table className="table table table-bordered tab">
                <thead className="" style={{ whiteSpace: "nowrap" }}>
                  <tr className="table-active"></tr>
                  <tr className="table-active">
                    <th>Employee</th>
                    <td></td>
                    <td
                      colSpan={2}
                      style={{ textAlign: "center", fontWeight: 700 }}
                    >
                      Services
                    </td>
                    <td
                      colSpan={2}
                      style={{ textAlign: "center", fontWeight: 700 }}
                    >
                      Products
                    </td>
                    <td
                      colSpan={2}
                      style={{ textAlign: "center", fontWeight: 700 }}
                    >
                      Vouchers
                    </td>
                    <th>Total sales(incl VAT)</th>
                  </tr>
                  <tr className="table-active">
                    <td></td>
                    <th style={{ textAlign: "center" }}>Qty</th>
                    <th style={{ textAlign: "center" }}>Sales (incl. VAT)</th>
                    <th style={{ textAlign: "center" }}>Qty</th>
                    <th style={{ textAlign: "center" }}>Sales (incl. VAT)</th>
                    <th style={{ textAlign: "center" }}>Qty</th>
                    <th style={{ textAlign: "center" }}>Sales (incl. VAT)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Plaukai</td>
                    <td>30</td>
                    <td>599,98 €</td>
                    <td>0</td>
                    <td>0,000 €</td>
                    <td>20</td>
                    <td>599,98 €</td>
                  </tr>
                  <tr>
                    <td>Plaukai</td>
                    <td>30</td>
                    <td>599,98 €</td>
                    <td>0</td>
                    <td>0,000 €</td>
                    <td>20</td>
                    <td>599,98 €</td>
                  </tr>
                  <tr>
                    <td>Plaukai</td>
                    <td>30</td>
                    <td>599,98 €</td>
                    <td>0</td>
                    <td>0,000 €</td>
                    <td>20</td>
                    <td>599,98 €</td>
                  </tr>
                  <tr>
                    <td>Plaukai</td>
                    <td>30</td>
                    <td>599,98 €</td>
                    <td>0</td>
                    <td>0,000 €</td>
                    <td>20</td>
                    <td>599,98 €</td>
                  </tr>
                  <tr>
                    <td>Plaukai</td>
                    <td>30</td>
                    <td>599,98 €</td>
                    <td>0</td>
                    <td>0,000 €</td>
                    <td>20</td>
                    <td>599,98 €</td>
                  </tr>
                </tbody>
                <tfoot style={{ borderTop: "2px solid #000" }}>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Grand total</td>
                    <td>30</td>
                    <td>1200.00 €</td>
                    <td>0</td>
                    <td>0,00 €</td>
                    <td>20</td>
                    <td>599,98 €</td>
                  </tr>
                </tfoot>
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
                <label className="me-1"> Product name</label>
                <input className="" type="text" />
              </div>
              <br />
              <div>
                <label className="me-3"> Unit price, €</label>
                <input className="" type="text" />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <label className="me-2">Track quantity in stock</label>{" "}
            <input type="checkbox" />
          </div>
          <div className="mt-3 ms-1">
            <label className="me-2">Available quantity</label>
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

    </div>
  )
}

export default Salebyemployee
