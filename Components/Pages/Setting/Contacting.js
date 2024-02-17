
import React from 'react'
import { Link } from 'react-router-dom'
const Contacting = () => {
  return (
    <div>
      <main>
  <div className="d-flex align-items-baseline flex-nowrap">
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
                style={{ backgroundColor: "#f2f2f2" }}
              >
               <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link border-0"
                    to="/notification"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <small className="fw-bold">Client notification</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link border" to="/contacting">
                      <small className="fw-bold">contacting you</small>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col"></div>
      </div>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            <i className="fa-solid fa-info" style={{ color: "#74C0FC" }} /> when
            a customer book throught Treatwell or the booking witget we'll email
            you let us <br />
            know where to send a email
          </p>
          <h6 className="card-title">Email settings</h6>
          <p className="card-text">
            Primary email address <input type="" />
          </p>
          <p className="card-text">
            Secondary email address <input type="" />
          </p>
          <hr />
          <h6 className="card-title">Online booking text (sms) confirmation</h6>
          <p className="card-text">
            <input type="checkbox" /> Recieve a text message(sms) when a someone
            makes a booking on <br />
            Treatwell or via the widget. if you have the app installed. you
            we'll send a push
            <br />
            notification insted.
          </p>
          <hr />
          <h6 className="card-title">Team member app push notification</h6>
          <p className="card-text">
            <input type="checkbox" /> Send notification about new bookings and
            changes in team members <br />
            calender
          </p>
          <p className="card-text">
            <input type="checkbox" /> Send owner a copy too
          </p>
          <p className="card-text">
            <input type="checkbox" /> Send notification when new revies are
            posted
          </p>
          <hr />
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-success mt-2">
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

export default Contacting
