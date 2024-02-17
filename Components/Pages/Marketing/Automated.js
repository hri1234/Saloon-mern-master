import React from 'react'
import { Link } from 'react-router-dom'

const Automated = () => {
  return (
    <>
    <main className="d-flex  flex-nowrap">
      <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
        <ul
          className="nav nav-pills flex-column mb-auto"
          style={{ paddingBottom: 124, backgroundColor: "#fff" }}
        >
          <li className="nav-item">
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
          <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
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
              aria-current="page">
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
              aria-current="page">
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
          <div style={{ paddingLeft: "5%", paddingTop: "2%" }}>
            <div className="row">
              <div className="col-sm-7">
                <div className="card">
                  <div className="card-body">
                    <h4 style={{ fontWeight: "500 !important" }}>
                      Win back your time with Automated messaging
                    </h4>
                    <p>
                      Automate client communication and we'll send them
                      perfectly-timed, professionaly-designed emails and
                      messages-without you having to lift a finger. Just enter
                      their details in Connect, and we'll do the rest.
                    </p>
                    <p className="mb-1">
                      More time on your team's hands, better salon experience for
                      your clients.
                    </p>
                  </div>
                </div>
                <div className="py-4">
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
                        Marketing
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
                        Transactional
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active py-3"
                      id="home-tab-pane"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                      tabIndex={0}
                    >
                      <div className="container">
                        <div className="row row-cols-1">
                          <div className="col px-0">
                            <div className="card mb-4 rounded-3">
                              <div className="card-body">
                                <div
                                  href="#"
                                  className="d-flex gap-3"
                                  aria-current="true"
                                >
                                  <i className="fa-regular fa-heart fa-2x" />
                                  <div>
                                    <h5 className="card-title">
                                      Send them a "Thank you" note
                                    </h5>
                                    <small className="text-body-secondary">
                                      Make your clients want to come back with a
                                      "Thank you" email sent after their
                                      appointment (a small gesture that can go a
                                      long way).
                                    </small>
                                  </div>
                                  <div>
                                    <a
                                      href="#"
                                      className="btn border-dark rounded-2"
                                      style={{ fontWeight: 500, borderWidth: 2 }}
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      Enabled
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col px-0">
                            <div className="card mb-4 rounded-3">
                              <div className="card-body">
                                <div
                                  href="#"
                                  className="d-flex gap-3"
                                  aria-current="true"
                                >
                                  <i className="fa-regular fa-rotate-right fa-2x" />
                                  <div>
                                    <h5 className="card-title">
                                      Invite clients to book again
                                    </h5>
                                    <small className="text-body-secondary">
                                      When the time is right, Connect will send
                                      them a email or SMS inviting them to rebook,
                                      helping you get more repeats.{" "}
                                      <a href="#">How it works</a>
                                    </small>
                                  </div>
                                  <div>
                                    <a
                                      href="#"
                                      className="btn border-dark rounded-2"
                                      style={{ fontWeight: 500, borderWidth: 2 }}
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      Enabled
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade py-3"
                      id="profile-tab-pane"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                      tabIndex={0}
                    >
                      <div className="container">
                        <div className="row row-cols-1">
                          <div className="col px-0">
                            <div className="card mb-4 rounded-3">
                              <div className="card-body">
                                <div
                                  href="#"
                                  className="d-flex gap-3"
                                  aria-current="true"
                                >
                                  <i className="fa-regular fa-users fa-xl mt-3"></i>
                                  <div>
                                    <h5 className="card-title">
                                      Keep clients up to date
                                    </h5>
                                    <small className="text-body-secondary">
                                      Connect will email your clients booking
                                      confirmations and about any important
                                      changes to their booking (like if it's been
                                      rescheduled or cancelled).{" "}
                                      <a href="#">How it works</a>
                                    </small>
                                  </div>
                                  <div>
                                    <a
                                      href="#"
                                      className="btn border-dark rounded-2"
                                      style={{ fontWeight: 500, borderWidth: 2 }}
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      Enabled
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col px-0">
                            <div className="card mb-4 rounded-3">
                              <div className="card-body">
                                <div
                                  href="#"
                                  className="d-flex gap-3"
                                  aria-current="true"
                                >
                                  <i
                                    className="fa-solid fa-circle-envelope fa-2xl mt-3"
                                    style={{ color: "#237e01" }}
                                  />
                                  <div>
                                    <h5 className="card-title">
                                      Send helpful appointment remainders
                                    </h5>
                                    <small className="text-body-secondary">
                                      Connect will remind clients about an
                                      upcoming visit with an email, SMS or push
                                      notification (a proven way to reduce
                                      no-shows). <a href="#">How it works</a>
                                    </small>
                                  </div>
                                  <div
                                    className="mt-2"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <i
                                      className="fa-solid fa-list-ul"
                                      style={{ color: "#0c0c0e" }}
                                      data-bs-toggle="modal"
                                      data-bs-target="#appointmentModal"
                                    />
                                  </div>
                                  <div>
                                    <a
                                      href="#"
                                      className="btn border-dark rounded-2"
                                      style={{ fontWeight: 500, borderWidth: 2 }}
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      Enabled
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col px-0">
                            <div className="card mb-4 rounded-3">
                              <div className="card-body">
                                <div
                                  href="#"
                                  className="d-flex gap-3"
                                  aria-current="true"
                                >
                                  <i
                                    className="fa-regular fa-circle-star fa-2xl mt-3"
                                    style={{ color: "#fcd600" }}
                                  />
                                  <div>
                                    <h5 className="card-title">
                                      Ask for verified reviews
                                    </h5>
                                    <small className="text-body-secondary">
                                      Connect will send a review request email
                                      after every appointment, helping you build
                                      your online reputation.{" "}
                                      <a href="#">How it works</a>
                                    </small>
                                  </div>
                                  <div>
                                    <a
                                      href="#"
                                      className="btn border-dark rounded-2"
                                      style={{ fontWeight: 500, borderWidth: 2 }}
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      Enabled
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div style={{ paddingLeft: "5%" }}>
                  <div className="card-body">
                    <p>Questions you may have</p>
                    <div>
                      <a
                        style={{ color: "black" }}
                        href="https://partners.treatwell.com/hc/lt/articles/360017323040"
                      >
                        How do Automated Messages?
                      </a>
                    </div>
                    <div style={{ paddingTop: "2%" }}>
                      <a
                        style={{ color: "black" }}
                        href="https://partners.treatwell.com/hc/lt/articles/360010596960-Daugiau-galimybi%C5%B3-su-Connect-%C4%AFkeliant-visus-savo-klientus"
                      >
                        How to get the most out of Automated Messages?
                      </a>
                    </div>
                    <div style={{ paddingTop: "2%" }}>
                      <a
                        style={{ color: "black" }}
                        href="https://partners.treatwell.com/hc/lt/articles/360000684909-Kaip-Treatwell-gali-pad%C4%97ti-tau-laikytis-GDPR"
                      >
                        Are Automated Messages GDPR compliant?{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    {/* Modal */}
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Are you sure you want to disable COVID-19 forms ?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            You will no longer automatically collect important information from
            the client before their appointment.
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn border-dark"
              style={{ fontWeight: 500, borderWidth: 2 }}
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "orange" }}
            >
              Disable
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Send Helpful Appointment modal */}
    <div
      className="modal fade"
      id="appointmentModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Change Settings
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div>
                <input type="checkbox" />
                <span>Send email reminder before the appointment.</span> <br />
                <div className="ms-4">
                  <span style={{ fontSize: 12 }}>
                    Time before the appointment{" "}
                  </span>{" "}
                  <br />
                  <span style={{ fontSize: 12 }}>(hours) </span> <br />
                  <input type="text" />
                </div>
                <div className="mt-2">
                  <input type="checkbox" />
                  <span>Send SMS reminder before the appointment.</span> <br />
                  <div className="ms-4">
                    <span style={{ fontSize: 12 }}>
                      Time before the appointment{" "}
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>(hours) </span> <br />
                    <input type="text" />
                  </div>
                  <div className="ms-4">
                    <span style={{ fontSize: 15 }}>Sender name</span> <br />
                    <span style={{ fontSize: 12 }}>
                      Displayed every time your clients receive a SMS
                    </span>{" "}
                    <br />
                    <input type="text" /> <br />
                    <span>
                      Sender name must be 3-11 Character and contain at least one
                      letter
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between mt-3 border-0">
              <button
                type="button"
                className="btn border-dark"
                style={{ fontWeight: 500, borderWidth: 2 }}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  
  )
}

export default Automated
