import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../../Assets/Facebook_icon_light.png'
import pic2 from '../../Assets/Twitter.png'
import pic3 from '../../Assets/mail.png'
const Clientapp = () => {
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
          <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
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
      <div className="col-md-8">
        <div className="card p-3">
          <div className="card-body">
            <h4 className="card-title" style={{ fontWeight: "500 !important" }}>
              Get rebooked in 30 seconds with the Treatwell client app
            </h4>
            <p className="card-text mb-1" style={{ fontSize: 14 }}>
              Link Connect with your social networks and Lets your clients book
              you anytime, anywhere with the easiest rebooking experience ever
              commission free.
            </p>
            <ul className="list-group">
              <li className="list-group-item border-0 px-0">
                <i className="fa-duotone fa-check me-1" />
                <span>
                  Be in their pocket, 24/7 right on the app home screen
                </span>
              </li>
              <li className="list-group-item border-0 px-0">
                <i className="fa-duotone fa-check me-1" />
                <span>
                  Grow your online reputation faster than ever with up to 100%
                  more customer reviews.
                </span>
              </li>
              <li className="list-group-item border-0 px-0">
                <i className="fa-duotone fa-check me-1" />
                <span>
                  Dail up customer loyalty and dail down no-shows with push
                  notification reminders
                </span>
              </li>
            </ul>
            <p className="card-text" style={{ fontSize: 14 }}>
              All bookings made via your referral link will be priced as repeat
              customers, even if it's the first time they've booked via the
              Treatwell platform. <a href="#">Learn More</a>
            </p>
            <h5 className="card-title" style={{ fontWeight: "500 !important" }}>
              Sound good ?
            </h5>
            <p className="card-text" style={{ fontSize: 14 }}>
              Share your referral link with your followers and up your rebooking
              game now.<a href="#">Learn More</a>
            </p>
            <div className="mb-1">
              <button
                type="button"
                className="btn mt-2"
                style={{ backgroundColor: "#1877f2" }}
              >
                <img
                  src={pic1}
                  alt="Facebook"
                  style={{ height: 24 }}
                />
                <span className="ms-1 text-light">Facebook</span>
              </button>
              <button
                type="button"
                className="btn ms-2 mt-2"
                style={{ backgroundColor: "#1d9bf0" }}
              >
                <img
                  src={pic2}
                  alt="Twitter"
                  style={{ height: 24 }}
                />
                <span className="ms-1 text-light">Twitter</span>
              </button>
              <button
                type="button"
                className="btn ms-2 mt-2"
                style={{ backgroundColor: "#3f9f54" }}
              >
                <img
                  src={pic3}
                  alt="Facebook"
                  style={{ height: 24 }}
                />
                <span className="ms-1 text-light">Launch a campaign</span>
              </button>
            </div>
            <h6 className="mt-2">Or copy and post anywhere</h6>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="https://trw.page.linkjxEB"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <a
                href="#"
                className="btn btn-success border rounded-0"
                id="basic-addon2"
              >
                Copy link
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12">
            <div className="card mb-4 rounded-3">
              <div className="card-body">
                <div href="#" className="d-flex gap-3" aria-current="true">
                  <i className="fa-solid fa-mobile-screen-button fa-2x" />
                  <div>
                    <h5 className="card-title">
                      Automatically refer clients to download the app
                    </h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Your client will be encouraged to download the app via
                        your partner site, widget and transactional emails.{" "}
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
      <div className="col-md-4">A</div>
    </div>
  </div>
</main>

    </div>
  )
}

export default Clientapp
