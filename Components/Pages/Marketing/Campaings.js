import React from 'react'
import { Link } from 'react-router-dom'

const Campaings = () => {
  return (
    <main className="d-flex  flex-nowrap">
    <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
    <ul
          className="nav nav-pills flex-column mb-auto"
          style={{ paddingBottom: 124, backgroundColor: "#fff" }}
        >
          <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
            <Link
            to="/campaings"
              className="nav-link text-dark"
              aria-current="page"
            >
              <i className="fa-light fa-chart-simple me-2" />
              <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                Campaigns
              </small>
            </Link>
          </li>
          <li className="nav-item">
            <Link
             to="/automated"
              className="nav-link text-dark"
              aria-current="page"
            >
              <i className="fa-light fa-gauge me-2" />
              <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                Automated messaging
              </small>
            </Link>
          </li>
          <li className="nav-item">
            <Link
            to="/client_form"
              className="nav-link text-dark"
              aria-current="page"
            >
              <i className="fa-light fa-gauge me-2" />
              <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                Client forms
              </small>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/client_app"
              className="nav-link text-dark"
              aria-current="page"
            >
              <i className="fa-light fa-gauge me-2" />
              <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                Your client app
              </small>
            </Link>
          </li>
          <li className="nav-item">
            <Link
           to="/partner_site"
              className="nav-link text-dark"
              aria-current="page"
            >
              <i className="fa-light fa-star me-2" />
              <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                Partner site
              </small>
            </Link>
          </li>
          <li className="nav-item">
            <Link  to="/media" className="nav-link text-dark" aria-current="page">
              <i className="fa-light fa-star me-2" />
              <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                Facebook &amp; Instagram
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
    <div className="container-fluid my-2">
      <div className="row row-cols-1">
        <div className="col-md-12 ">
          <div className="card  border-0" style={{ width: "25rem" }}>
            <div className="card-body">
              <h5 className="card-title">Choose your campaign</h5>
              <p className="card-text">
                Inform customers about the hottest news with the help of our
                marketing tool. You can send already created e-mails to customers
                that advertise your discounts, special offers or urge them to sign
                up with you quickly thanks to the customer app. Regardless of the
                campaign, customers love personal attention.
              </p>
            </div>
          </div>
          <div className="row" style={{ paddingRight: "40%", paddingTop: "3%" }}>
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div
                  className="card-body"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  <h6 className="card-title">Promotional offers</h6>
                  <p className="card-text">
                    Encourage customers to take advantage of your special offers
                    and discounts.
                  </p>
                  <span id="active" href="#" className="btn btn-primary">
                    ACTIVE
                    <div
                      className="modal fade"
                      id="exampleModalToggle"
                      aria-hidden="true"
                      aria-labelledby="exampleModalToggleLabel"
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-6 text-dark"
                              id="exampleModalToggleLabel"
                            >
                              What are you prommoting?
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div style={{ margin: "auto" }}>
                            <div
                              className="modal-body text-dark "
                              data-bs-target="#exampleModalToggle2"
                              data-bs-toggle="modal"
                              style={{ border: "10cap" }}
                            >
                              <div className="card">
                                <div className="card-body">
                                  <div className="icon-and-text-container">
                                    <i className="fa-sharp fa-regular fa-badge-percent fa-4x" />
                                    {/* <h5>Smart discounts</h5> */}
                                    <div>
                                      <h5>Smart discounts</h5>
                                      <p>
                                        Promote your last-minute and/or off-peak
                                        discounts
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style={{ margin: "auto" }}>
                            <div
                              className="modal-body text-dark "
                              data-bs-target="#exampleModalToggle3"
                              data-bs-toggle="modal"
                              style={{ border: "10cap" }}
                            >
                              <div className="card">
                                <div className="card-body">
                                  <div className="icon-and-text-container">
                                    <i className="fa-regular fa-tag fa-4x" />
                                    <div>
                                      <h5>Discounted service</h5>
                                      <p>
                                        Advertise services for which you currently
                                        have discounts
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModalToggle2"
                      aria-hidden="true"
                      aria-labelledby="exampleModalToggleLabel2"
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-6 text-dark"
                              id="exampleModalToggleLabel2"
                            >
                              Promote of smart discounts
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body text-dark">
                            <i
                              className="fa-sharp fa-regular fa-badge-percent fa-4x"
                              style={{ paddingBottom: "10%" }}
                            />
                            <h4>No smart discounts found</h4>
                            Either you have not created smart discounts or they
                            are inactive. Please check the smart discount settings
                            in the Menu section first.
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn btn-primary"
                              data-bs-target="#exampleModalToggle"
                              data-bs-toggle="modal"
                              style={{ backgroundColor: "green" }}
                            >
                              Go to discount
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModalToggle3"
                      aria-hidden="true"
                      aria-labelledby="exampleModalToggleLabel2"
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-6 text-dark"
                              id="exampleModalToggleLabel2"
                            >
                              Promote of discounts service
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body text-dark">
                            <i
                              className="fa-regular fa-tag fa-4x"
                              style={{ paddingBottom: "5%" }}
                            />
                            <h4>The required service type was not found</h4>
                            We recommend advertising only those discounts that can
                            really be relevant to customers. This means that only
                            discounts greater than 10% are included in the
                            campaign. To increase the discounts, you need to
                            change them in the Menu section.
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn btn-primary"
                              data-bs-target="#exampleModalToggle"
                              data-bs-toggle="modal"
                              style={{ backgroundColor: "green" }}
                            >
                              Go to Menu
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button> */}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">Your customer app</h6>
                  <p className="card-text">
                    30 seconds: This is how long customers need to re-order the
                    service via the Treatwell Customer{" "}
                  </p>
                  <span id="active" href="#" className="btn btn-primary">
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </main>
  
  
  )
}

export default Campaings
