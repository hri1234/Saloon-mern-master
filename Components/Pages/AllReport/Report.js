import React from 'react'
import { Link } from 'react-router-dom'
const Report = () => {
  return (
    <div>
      <main>
  <div className="container">
    <div className="row mt-3">
      <div className="col-md-12">
        <h4>Reports</h4>
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-md-6">
        <div className="card shadow-sm p-0 mb-5 bg-white  mb-0 border-0">
          <div
            className="card-body"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
          >
            <h5 className="card-title">Lists</h5>
            <p className="card-text">
              From bookings to transaction, we've got all the details to improve{" "}
              <br/> your understanding of data.
            </p>
            <ul className="list-group">
              <li className="list-group-item pe-0 border-bottom-0 ">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/report_booking">
                  <div className="d-flex justify-content-between border-bottom py-1">
                    <span>Bookings</span>
                    <i className="fa-solid fa-chevron-right px-3"/>
                  </div>
                </Link>
              </li>
              <li className="list-group-item pe-0  pt-0">
                <div className="d-flex justify-content-between  py-1 ">
                  <span>COVID-19 cancellation</span>
                  <i className="fa-solid fa-chevron-right px-3" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="card shadow-sm p-0 mb-5 bg-white  mb-0 border-0">
          <div
            className="card-body"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
          >
            <h5 className="card-title">Clients</h5>
            <p className="card-text">
              Know how your salon is performig client-wise with insghts into{" "}
              <br />
              how many first-time vistors, returning clients and total customers{" "}
              <br /> you get over a selected period of time.
            </p>
            <ul className="list-group">
              <li className="list-group-item pe-0 border-bottom-0 ">
                <div className="d-flex justify-content-between border-bottom py-1 ">
                  <span>Client acquisition</span>
                  <i className="fa-solid fa-chevron-right px-3" />
                </div>
              </li>
              <li className="list-group-item pe-0  pt-0">
                <div className="d-flex justify-content-between  py-1 ">
                  <span>Client retention</span>
                  <i className="fa-solid fa-chevron-right px-3" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card shadow-sm p-0 mb-5 bg-white  mb-0 border-0">
          <div
            className="card-body"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
          >
            <h5 className="card-title">Sales</h5>
            <p className="card-text">
              Analyse your salon's sales performance across channels <br />{" "}
              employees and more from checked out appointments to sold hair{" "}
              <br /> and beauty products ,know your busness sales back to front
            </p>
            <ul className="list-group">
              <li className="list-group-item pe-0 border-bottom-0 ">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                 to="/sales_overview"
                >
                  <div className="d-flex justify-content-between border-bottom py-1 ">
                    <span>Sales overview</span>
                    <i className="fa-solid fa-chevron-right px-3" />
                  </div>
                </Link>
              </li>
              <li className="list-group-item pe-0 border-bottom-0 ">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                 to="/service_sales"
                >
                  <div className="d-flex justify-content-between border-bottom py-1 ">
                    <span>Service sales</span>
                    <i className="fa-solid fa-chevron-right px-3" />
                  </div>
                </Link>
              </li>
              <li className="list-group-item pe-0 border-bottom-0 ">
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="Product-Sales.html"
                >
                  <div className="d-flex justify-content-between border-bottom py-1 ">
                    <span>Product sales</span>
                    <i className="fa-solid fa-chevron-right px-3" />
                  </div>
                </a>
              </li>
              <li className="list-group-item pe-0 border-bottom-0 ">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/sale_by_employee"
                >
                  <div className="d-flex justify-content-between border-bottom py-1 ">
                    <span>Sales by employee</span>
                    <i className="fa-solid fa-chevron-right px-3" />
                  </div>
                </Link>
              </li>
              <li className="list-group-item pe-0 border-bottom-0 ">
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="Daily-Sales.html"
                >
                  <div className="d-flex justify-content-between border-bottom py-1 ">
                    <span>Daily sales</span>
                    <i className="fa-solid fa-chevron-right px-3" />
                  </div>
                </a>
              </li>
              <li className="list-group-item pe-0 border-bottom-0 ">
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="Monthly-Sales.html"
                >
                  <div className="d-flex justify-content-between border-bottom py-1 ">
                    <span>Monthly sales</span>
                    <i className="fa-solid fa-chevron-right px-3" />
                  </div>
                </a>
              </li>
              <li className="list-group-item pe-0 border-bottom-0 ">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                 to="/sales_report_otd"
                >
                  <div className="d-flex justify-content-between border-bottom py-1 ">
                    <span> Sales reports OLD</span>
                    <i className="fa-solid fa-chevron-right px-3" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default Report
