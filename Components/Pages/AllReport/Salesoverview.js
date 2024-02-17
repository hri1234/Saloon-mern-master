import { Link } from 'react-router-dom'
import React from 'react'

const Salesoverview = () => {
  return (
    <div>
      <main className="d-flex align-items-baseline flex-nowrap">
  <div className="container-fluid mb-3 mt-3">
    <div className="container-fluid">
      <div className="row">
        <div>
          <h5>
            {" "}
            <Link   to="/report"
              style={{ textDecoration: "none" }}
              className="text-secondary p-1"
           
            >
              <i className="fa-solid fa-angle-left" />
              Reports
            </Link>
          </h5>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-between flex-wrap">
      <div className="dropdown">
        <button
          className="btn    border-bottom dropdown-toggle  rounded-0"
          style={{ fontWeight: 600, fontSize: "larger" }}
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sales overview{" "}
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
      <div>
        <button type="button" className="btn ">
          <i className="fa-solid fa-print" /> Print
        </button>
        <button type="button" className="btn ">
          <i className="fa-solid fa-download" /> Download
        </button>
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
            <div className="col-md-1  ">
              <div className="dropdown ">
                <a
                  className="btn   border-bottom rounded-0 p-0     dropdown-toggle"
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
                  className="btn     border-bottom rounded-0 p-0    dropdown-toggle"
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
                  <tr className="table-active">
                    <th />
                    <td
                      colSpan={3}
                      style={{ textAlign: "center", fontWeight: 700 }}
                    >
                      Sales (incl. VAT)
                    </td>
                  </tr>
                </thead>
                <thead className="" style={{ whiteSpace: "nowrap" }}>
                  <tr className="table-active">
                    <th />
                    <th style={{ textAlign: "center" }}>Pay venueat </th>
                    <th style={{ textAlign: "center" }}>Pre-paid</th>
                    <th style={{ textAlign: "center" }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>469,84 €</td>
                    <td>59,98 €</td>
                    <td>529,82 €</td>
                  </tr>
                  <tr>
                    <td>Products</td>
                    <td>469,84 €</td>
                    <td>59,98 €</td>
                    <td>529,82 €</td>
                  </tr>
                  <tr>
                    <td>Vouchers</td>
                    <td>469,84 €</td>
                    <td>59,98 €</td>
                    <td>529,82 €</td>
                  </tr>
                </tbody>
                <tfoot style={{ borderTop: "2px solid #000" }}>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Grand total</td>
                    <td>300000 €</td>
                    <td>1200.00 €</td>
                    <td>300000 €</td>
                  </tr>
                </tfoot>
              </table>
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

export default Salesoverview
