import React from 'react'
import { Link } from 'react-router-dom'
const ClientForm = () => {
  return (
    <div>
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
          <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
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
      <div className="col-md-7">
        <div className="row row-cols-1 gap-4">
          <div className="col">
            <div className="card p-3">
              <div className="card-body">
                <h4
                  className="card-title"
                  style={{ fontWeight: "500 !important" }}
                >
                  Collecting client information made easy
                </h4>
                <p className="card-text " style={{ fontSize: 14 }}>
                  Forget paper forms, or jugging different platforms. Our
                  pre-made, digital Client forms collect necessary Informatin
                  for you, automatically, ahead of time, and straight from
                  Connect.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3">
              <div className="card-body">
                <div href="#" className="d-flex gap-3" aria-current="true">
                  <i className="fa-solid fa-shield-check fa-2x" />
                  <div>
                    <h5 className="card-title">Covid-19 form</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Collect the information you need to keep your saloon
                        safe, before every appointment.{" "}
                        <a href="#">How it works</a>
                      </small>
                    </p>
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
      <div className="col-md-5">
        <div className="p-3 ">
          <h6 style={{ color: "#808080" }}>Learn more</h6>
          <div>
            <a
              style={{ color: "black", fontSize: 15 }}
              href="https://partners.treatwell.com/hc/lt/articles/360017323040"
            >
              Automated client forms are here
            </a>
          </div>
          <div style={{ paddingTop: "2%" }}>
            <a
              style={{ color: "black", fontSize: 15 }}
              href="https://partners.treatwell.com/hc/lt/articles/360010596960-Daugiau-galimybi%C5%B3-su-Connect-%C4%AFkeliant-visus-savo-klientus"
            >
              Everything you need to know about Covid-19 forms
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</main>

    </div>
  )
}

export default ClientForm
