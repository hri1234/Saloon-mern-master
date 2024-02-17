import React from 'react'
import './Goals.css'
import { Link } from 'react-router-dom'
const Goals = () => {
  return (
    <main className="d-flex align-items-baseline flex-nowrap">
    <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
      <ul
        className="nav nav-pills flex-column mb-auto"
        style={{ paddingBottom: 124, backgroundColor: "#fff" }}
      >
        <li className="nav-item">
          <Link
          to="/static"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-light fa-chart-simple me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Statistics
            </small>
          </Link>
        </li>
        <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
          <Link to="/goal" className="nav-link text-dark" aria-current="page">
            <i className="fa-light fa-gauge me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Goals
            </small>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/customer_review"
            href="customer_reviews.html"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-light fa-star me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Customer reviews
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
    <div className="container mb-3 mt-5">
      <div className="row py-3">
        <div className="col-md-8">
          <div className="card p-4">
            <h5>Salon rating</h5>
            <small>
              Meeting these goals will have a positive impact on your salon's
              visibility in Treatwell search results.
            </small>
            <hr />
            <div className="row">
              <div className="col-md-1">
                <i
                  className="fa-solid fa-circle-check fa-2xl"
                  style={{ color: "#008f0a" }}
                />
              </div>
              <div className="col-md-9">
                <h6>Successful (not canceled) orders</h6>
                <small>
                  A low number of order cancellations will help maintain a high
                  salon rating. <br />
                  Goal: At least 95% of orders are completed without cancellation
                  or rescheduling.
                </small>
              </div>
              <div className="col-md-2 mt-4">
                <button className="more border-0 text-end">Learn More</button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-1" />
              <div className="col-md-9 mt-2">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: "0.5rem" }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: "100%",
                      backgroundColor: "#008f0a",
                      height: 10
                    }}
                  />
                </div>
              </div>
              <div className="col-md-2">
                <p className="text-center" style={{ color: "#008f0a" }}>
                  <b>100</b>
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-1">
                <i
                  className="fa-solid fa-circle-check fa-2xl"
                  style={{ color: "#008f0a" }}
                />
              </div>
              <div className="col-md-9">
                <h6>Salon rating is no less than</h6>
                <small>
                  Encourage your loyal customers to write a review on the
                  Treatwell website. Respond to your customer feedback.
                  <br />
                  <b> Goal: </b> Salon rating 4.5.
                </small>
              </div>
              <div className="col-md-2 mt-4">
                <button className="more border-0 text-end">Learn More</button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-1" />
              <div className="col-md-11">
                <i className="fa fa-star fa-2xl checked" />
                <i className="fa fa-star fa-2xl checked" />
                <i className="fa fa-star fa-2xl checked" />
                <i className="fa fa-star fa-2xl checked" />
                <i className="fa fa-star fa-2xl checked" />
                <span className="checked">
                  <b>4.9</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="card p-1">
              <div className="row mt-2">
                <div className="col-md-3">
                  <div className="progress-bar circle">
                    <progress
                      value={75}
                      min={0}
                      max={100}
                      style={{ visibility: "hidden", height: 0, width: 0 }}
                    >
                      75%
                    </progress>
                  </div>
                </div>
                <div className="col-md-9">
                  <h6>Profile completeness</h6>
                  <small>
                    Boost your profile and get more Treatwell orders with these
                    tips.
                  </small>
                </div>
              </div>
              <hr />
              <div
                style={{ overflowY: "scroll", overflowX: "hidden", height: 305 }}
              >
                <div className="row">
                  <div className="col-md-2 text-center">
                    <i
                      className="fa-light fa-circle fa-xl"
                      style={{ color: "#a3a3a3" }}
                    />
                  </div>
                  <div className="col-md-10">
                    <h6>Get started with the online ordering plugin</h6>
                    <small>
                      Enjoy 24/7 tax-free orders through your website or Facebook
                      by giving your customers the option to register online.
                      Learn more
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2" />
                  <div className="col-md-10 mt-2">
                    <button className="border-0 perform">Perform now</button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2 text-center">
                    <i
                      className="fa-light fa-circle fa-xl"
                      style={{ color: "#a3a3a3" }}
                    />
                  </div>
                  <div className="col-md-10">
                    <h6>Apply smart discounts</h6>
                    <small>
                      Fill the emptier time of the week with our smart discount
                      tool. Learn more
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2" />
                  <div className="col-md-10 mt-2">
                    <button className="border-0 perform">Perform now</button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2 text-center">
                    <i
                      className="fa-light fa-circle fa-xl"
                      style={{ color: "#a3a3a3" }}
                    />
                  </div>
                  <div className="col-md-10">
                    <h6>Enter your bank details</h6>
                    <small>
                      Add your bank account to receive money for future orders
                      from Treatwell.
                    </small>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2 text-center">
                    <i
                      className="fa-solid fa-circle-check fa-xl"
                      style={{ color: "#008f0a" }}
                    />
                  </div>
                  <div className="col-md-10">
                    <h6>Book a professional salon photo session</h6>
                    <small>
                      Professionally photographed salons look the best and usually
                      get more bookings. Learn more
                    </small>
                  </div>
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

export default Goals
