import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../../Assets/Facebook_icon.png'
const Media = () => {
  return (
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
          <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
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
          <div className="card">
            <div className="card-body p-0">
              <div className="px-4 pb-2 pt-4">
                <h4 className="card-title"
                  style={{ fontWeight: "500 !important" }}>
                  Turn your Facebook and Instagram followers into customers.
                  Without any commission.
                </h4>
                <p className="card-text" style={{ fontSize: 14 }}>
                  Link Connect with your social networks and let customers sign up
                  with you in seconds on Facebook and Instagram without paying a
                  commission.
                </p>
                <div className="card">
                  <div className="card-body d-flex justify-content-between">
                    <div className="d-flex justify-content-between">
                      <div>
                        <i className="fa-brands fa-facebook fs-3  text-primary" />
                        <i className="fa-brands fa-instagram  fs-3 ms-1 text-danger" />
                        <i className="fa-brands fa-facebook-messenger ms-1 fs-3 text-primary">
                          {" "}
                        </i>
                      </div>
                      <div className="">
                        <p className="text-start ms-3 p-0 m-0 pt-1 ">
                          Your salon profiles
                        </p>
                      </div>
                    </div>
                    <button type="button" className="btn btn-success">
                      Link now
                    </button>
                  </div>
                </div>
                <p className="m-0 p-0 mt-2" style={{ fontSize: 13 }}>
                  Treatwell will ask for Facebook's consent to administer your
                  profile so that your customers enjoy a flawless ordering
                  experience.
                </p>
              </div>
              <hr />
              <div className="px-4 py-2">
                <h4 className="card-title" style={{ fontWeight: "500 !important" }}>
                  Get booked through:
                </h4>
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center gap-3 px-0 border-0">
                    <img
                      src={pic1}
                      alt="twbs"
                      width={32}
                      height={32}
                      className="rounded-circle flex-shrink-0"/>
                    <div>
                      <h6 className="mb-0 text-start">Facebook</h6>
                      <p className="mb-0 opacity-75 text-start">
                        With a Book Now Button on your business page and posts
                      </p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center gap-3 px-0 border-0">
                    <img
                      src={pic1}
                      alt="twbs"
                      width={32}
                      height={32}
                      className="rounded-circle flex-shrink-0"/>
                    <div>
                      <h6 className="mb-0 text-start">Instagram</h6>
                      <p className="mb-0 opacity-75 text-start">
                        Via a Book Now button instantly visible to anyone who
                        visits your profile.
                      </p>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center gap-3 px-0 border-0">
                    <img
                      src={pic1}
                      alt="twbs"
                      width={32}
                      height={32}
                      className="rounded-circle flex-shrink-0"/>
                    <div>
                      <h6 className="mb-0 text-start">Messenger</h6>
                      <p className="mb-0 opacity-75 text-start">
                        With a booking button that appears when someone messages
                        your business.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="p-3">
            <h6 style={{ color: "#808080" }}>Questions you might have</h6>
            <div className="mb-2">
              <a style={{ color: "black", fontSize: 15 }}
                href="https://partners.treatwell.com/hc/lt/articles/360017323040">
                How do I add Book Now buttons to my social media pages?
              </a>
            </div>
            <div className="mb-2">
              <a
                style={{ color: "black", fontSize: 15 }}
                href="https://partners.treatwell.com/hc/lt/articles/360010596960-Daugiau-galimybi%C5%B3-su-Connect-%C4%AFkeliant-visus-savo-klientus" >
                Adding the Book Now button to your instagram
              </a>
            </div>
            <div className="mb-2">
              <a style={{ color: "black", fontSize: 15 }}
                href="https://partners.treatwell.com/hc/lt/articles/360010596960-Daugiau-galimybi%C5%B3-su-Connect-%C4%AFkeliant-visus-savo-klientus">
                How to boost your saloon with social media
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Media
