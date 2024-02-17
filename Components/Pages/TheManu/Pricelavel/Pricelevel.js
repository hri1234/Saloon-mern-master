import React from 'react'
import './Pricelevel.css'
import { Link } from 'react-router-dom'

const Pricelevel = () => {
  return (
    <div>
      <main className="d-flex  flex-nowrap">
        <div className="d-flex align-items-baseline flex-nowrap">
          <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
            <ul
              className="nav nav-pills flex-column mb-auto"
              style={{ paddingBottom: 124, backgroundColor: "#fff" }}>
              <li className="nav-item">
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
              <li className="nav-item"  style={{ backgroundColor: "#f2f2f2" }}>
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
            <ul className="nav nav-pills flex-column mb-auto" style={{ "padding-top": "48px" }}>
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

        </div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-4 mx-auto">
              <div className="card text-center border-0">
                <div className="card-body">
                  <h5 className="card-title" style={{ "font-weight": "600" }}>This List is looking a little empty</h5>
                  <p className="card-text">Create Pricing levels here if you have different prices for specific staff groups.</p>
                  <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Pricing Level</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="email" className="form-control" placeholder=" e.g. Junior stylist , senior stylist , art directore" />
                      </div>
                      <div className="shadow p-3">
                        <p style={{ "font-weight": "600" }}>Assigned team members</p><hr />
                        <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />david</p><hr />
                        <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />camilo</p><hr />
                        <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />cristion</p><hr />
                        <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />jon</p><hr />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricelevel
