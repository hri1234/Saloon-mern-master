import React from 'react'
import { Link } from 'react-router-dom'

const Onlinebooking = () => {
  return (
    <div>
      <main>
  <div className="d-flex  flex-nowrap">
    <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
    <ul
        className="nav nav-pills flex-column mb-auto"
        style={{ paddingBottom: 124, backgroundColor: "#fff" }}
      >
        <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
          <Link
            to="/vanue_detail"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-regular fa-scissors me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Venue
            </small>
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to="/finance"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-sharp fa-light fa-money-bill me-1" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Finanace
            </small>
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to="/notification"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-sharp fa-light fa-badge-percent me-1" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Notification
            </small>
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to="/online_booking"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-sharp fa-light fa-badge-percent me-1" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Online booking
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
    <div className="container-fluid">
      <div className="row row-cols-1">
        <div className="col">
          <nav className="navbar w-100 navbar-expand-lg navbar-light bg-light pb-0">
            <div className="container-fluid px-0">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse d-flex justify-content-between"
                id="navbarNav"
                style={{ backgroundColor: "#f2f2f2" }}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link border-0"
                     to="/online_booking"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <small className="fw-bold">Booking Widget</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link border"
                     to="/online_booking_setting"
                    >
                      <small className="fw-bold">Settings</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link border"
                     to="/online_booking_intergrations"
                    >
                      <small className="fw-bold">Intergrations</small>
                    </Link>
                  </li>
                </ul>
                <div
                  className="dropdown text-end border"
                  style={{ backgroundColor: "#fff", padding: "8px 45px" }}
                >
                  <a
                    href="#"
                    className="d-block link-body-emphasis text-decoration-none"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Active services</span>
                    <span className="badge bg-secondary rounded-0">22</span>
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete services
                        <span className="badge bg-primary rounded-pill">
                          22
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sold through Treatwell
                        <span className="badge bg-primary rounded-pill">
                          22
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Not for sale
                        <span className="badge bg-primary rounded-pill">
                          22
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-6 card ">
          <div className="row m-3 ">
            <div className="col-md-3">
              <i
                className="fa-solid fa-laptop"
                style={{ color: "green", fontSize: 74 }}
              />
            </div>
            <div className="col-md-9">
              <h4>Take booking from your website &amp; other soures</h4>
              <p>
                Let cllents book directly through your website or by sharing the
                link with <br />
                them. Your booking Widget enables you to take bookings even when
                <br />
                you're sleeping!
                <a href="#" className="learn-more-btn">
                  Learn More
                </a>
              </p>
              <h5>
                There's no set up fee or commission for the online booking
                widget.
              </h5>
              <p>
                Bookings placed via the online booking widget may be subject to
                a
                <br />
                processing fee (plus VAT) dependiing on your pricing plan. This
                fee <br />
                covers a booking button, booking widget on your website,email{" "}
                <br /> notification and SMS reminders to your clients.
              </p>
              <p>
                Take a look at your widget by using the preview button, and
                check out
                <br />
                the various options you have to integrate it below
              </p>
              <button type="button" className="btn btn">
                <i className="fa-solid fa-eye" />
                Show me how it looks
              </button>
            </div>
            <div className="col-md-3 mt-3">
              <i
                className="fa-regular fa-laptop"
                style={{ color: "green", fontSize: 74 }}
              />
            </div>
            <div className="col-md-9 mt-3">
              <h4>Book now button</h4>
              <p>
                Copy the code below to install the book now utton on your
                website. <br />
                Customers can view your menu and bookin a new window.
              </p>
              <div className="accordion" id="accordionExample1">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne1"
                      aria-expanded="true"
                      aria-controls="collapseOne1"
                    >
                      Setup Instructions
                    </button>
                  </h2>
                  <div
                    id="collapseOne1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne1"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      <div className=" d-flex mt-1">
                        <div className="col-md-1">
                          {/* <i class="fa-sharp fa-light fa-circle-1"></i> */}
                          <i
                            className="fa-sharp fa-light fa-circle-1"
                            style={{ color: "green", fontSize: 19 }}
                          />
                        </div>
                        <div className="col-md-11">
                          <p style={{ fontSize: 14 }}>
                            Click the code button to copy the HTML to your
                            clipboard
                          </p>
                        </div>
                      </div>
                      <div className=" d-flex ">
                        <div className="col-md-1">
                          <i
                            className="fa-sharp fa-light fa-circle-2"
                            style={{ color: "green", fontSize: 19 }}
                          />
                        </div>
                        <div className="col-md-11">
                          <p style={{ fontSize: 14 }}>
                            Past the copied code into the HTML of your website
                          </p>
                        </div>
                      </div>
                      <p>
                        Show me how it looks (Click the button to try it out)
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <button
                          style={{ color: "white" }}
                          type="button"
                          className="btn btn-warning"
                        >
                          <i className="fa-solid fa-calendar-days" />
                          REGISTRACIJAI
                        </button>
                      </div>
                      <div className="pt-3 mb-2">
                        <button
                          style={{ color: "white" }}
                          type="button"
                          className="btn btn-success"
                        >
                          <i className="fa-regular fa-copy" />
                          Copy Code
                        </button>
                      </div>
                      <div>
                        <p>
                          To install the Book Now widget on your Facebook and
                          instagram <br />
                          accounts,{" "}
                          <a href="more_info.html" className="learn-more-btn">
                            Click here.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <i
                className="fa-duotone fa-laptop"
                style={{ color: "green", fontSize: 74 }}
              />
            </div>
            <div className="col-md-9 mt-3">
              <h4>Embedded widget</h4>
              <p>
                Copy the code below to install the book now utton on your
                website. <br />
                Customers can view your menu and bookin a new window.
              </p>
              <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Setup Instructions
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <div className=" d-flex mt-1">
                        <div className="col-md-1">
                          <i
                            className="fa-sharp fa-light fa-circle-1"
                            style={{ color: "green", fontSize: 19 }}
                          />
                        </div>
                        <div className="col-md-11">
                          <p style={{ fontSize: 14 }}>
                            Click the code button to copy the HTML to your
                            clipboard
                          </p>
                        </div>
                      </div>
                      <div className=" d-flex ">
                        <div className="col-md-1">
                          <i
                            className="fa-sharp fa-light fa-circle-2"
                            style={{ color: "green", fontSize: 19 }}
                          />
                        </div>
                        <div className="col-md-11">
                          <p style={{ fontSize: 14 }}>
                            Past the copied code into the HTML of your website
                          </p>
                        </div>
                      </div>
                      <div className="pt-3 mb-2">
                        <button
                          style={{ color: "white" }}
                          type="button"
                          className="btn btn-success"
                        >
                          <i className="fa-regular fa-copy" />
                          Copy Code
                        </button>
                      </div>
                      <div>
                        <p>
                          To install the Book Now widget on your Facebook and
                          instagram <br />
                          accounts,{" "}
                          <a href="more_info.html" className="learn-more-btn">
                            Click here.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <i
                className="fa-regular fa-laptop-binary"
                style={{ color: "green", fontSize: 74 }}
              />
            </div>
            <div className="col-md-9 mt-3">
              <h4>Sharing the widget link</h4>
              <p>
                Copy the code below to install the book now utton on your
                website. <br />
                Customers can view your menu and bookin a new window.
              </p>
              <div className="accordion" id="accordionExample3">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne3"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Setup Instructions
                    </button>
                  </h2>
                  <div
                    id="collapseOne3"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample3"
                  >
                    <div className="accordion-body">
                      <div className=" d-flex mt-1">
                        <div className="col-md-1">
                          <i
                            className="fa-sharp fa-light fa-circle-1"
                            style={{ color: "green", fontSize: 19 }}
                          />
                        </div>
                        <div className="col-md-11">
                          <p style={{ fontSize: 14 }}>
                            Click the code button to copy the HTML to your
                            clipboard
                          </p>
                        </div>
                      </div>
                      <div className=" d-flex ">
                        <div className="col-md-1">
                          <i
                            className="fa-sharp fa-light fa-circle-2"
                            style={{ color: "green", fontSize: 19 }}
                          />
                        </div>
                        <div className="col-md-11">
                          <p style={{ fontSize: 14 }}>
                            Past the copied code into the HTML of your website
                          </p>
                        </div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <a href="https://www.booking.com/">http:/booking.com</a>
                      </div>
                      <div className="pt-3 mb-2">
                        <button
                          style={{ color: "white" }}
                          type="button"
                          className="btn btn-success"
                        >
                          <i className="fa-regular fa-copy" />
                          Copy Code
                        </button>
                      </div>
                      <div>
                        <p>
                          To install the Book Now widget on your Facebook and
                          instagram <br />
                          accounts,{" "}
                          <a href="more_info.html" className="learn-more-btn">
                            Click here.
                          </a>
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
    
    </div>
  </div>
</main>

    </div>
  )
}

export default Onlinebooking
