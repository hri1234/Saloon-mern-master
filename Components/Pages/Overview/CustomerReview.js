import React from 'react'
import './CustomerReview.css'
import { Link } from 'react-router-dom'

const CustomerReview = () => {
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
        <li className="nav-item" >
          <Link to="/goal" className="nav-link text-dark" aria-current="page">
            <i className="fa-light fa-gauge me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Goals
            </small>
          </Link>
        </li>
        <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
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
    <div className="container">
      <div style={{ overflowY: "scroll", overflowX: "hidden", height: 600 }}>
        <div className="row ">
          <div className="col-md-8 mt-4">
            <div className="card p-4">
              <div className="row ">
                <div className="col-md-8">
                  <div className="d-flex">
                    <div>
                      <span className="checked" style={{ fontSize: 50 }}>
                        4.9
                      </span>
                    </div>
                    <div className="mt-4 ms-2">
                      <i className="fa-sharp fa-solid fa-star fa-xl checked" />
                      <i className="fa-sharp fa-solid fa-star fa-xl checked" />
                      <i className="fa-sharp fa-solid fa-star fa-xl checked" />
                      <i className="fa-sharp fa-solid fa-star fa-xl checked" />
                      <i className="fa-sharp fa-solid fa-star fa-xl checked" />
                    </div>
                  </div>
                  <small style={{ marginLeft: 75, marginTop: 0 }}>
                    Based on 926 reviews.
                  </small>
                </div>
                <div className="col-md-4">{/* <h1>hello</h1> */}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex">
                    <div>
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                    </div>
                    <div className="ms-3">
                      <h6>Daniel</h6>
                    </div>
                  </div>
                  <p>
                    It cuts very well, as I asked, and it cuts very well, I
                    appreciate it very much
                  </p>
                  <div className="d-flex">
                    <small>16/14/2024</small>
                    <small className="ms-3">Employee: David</small>
                    <h6 className="ms-3">Reply</h6>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex">
                    <div>
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                    </div>
                    <div className="ms-3">
                      <h6>Ernest</h6>
                    </div>
                  </div>
                  <p>Only Legends work there, thanks David.</p>
                  <div className="d-flex">
                    <small>01/12/2024</small>
                    <small className="ms-3">Employee: David</small>
                    <h6 className="ms-3">Reply</h6>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex">
                    <div>
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                    </div>
                    <div className="ms-3">
                      <h6>Customer</h6>
                    </div>
                  </div>
                  <p>
                    As always, everything is great! As always I was satisfied!
                  </p>
                  <div className="d-flex">
                    <small>14/12/2024</small>
                    <small className="ms-3">Employee: Camilo</small>
                    <h6 className="ms-3">Reply</h6>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex">
                    <div>
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                    </div>
                    <div className="ms-3">
                      <h6>Anatoly</h6>
                    </div>
                  </div>
                  <p>
                    Everything is great, great atmosphere, I will definitely come
                    back
                  </p>
                  <div className="d-flex">
                    <small>15/12/2024</small>
                    <small className="ms-3">Employee: Diego</small>
                    <h6 className="ms-3">Reply</h6>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex">
                    <div>
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                    </div>
                    <div className="ms-3">
                      <h6>Ilona</h6>
                    </div>
                  </div>
                  <p>The child is satisfied with the haircut. thank you</p>
                  <div className="d-flex">
                    <small>16/12/2024</small>
                    <small className="ms-3">Employee: Diego</small>
                    <h6 className="ms-3">Reply</h6>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex">
                    <div>
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                    </div>
                    <div className="ms-3">
                      <h6>Storm</h6>
                    </div>
                  </div>
                  <p>Perfect hairstyle and impeccably done facials.</p>
                  <div className="d-flex">
                    <small>18/12/2024</small>
                    <small className="ms-3">Employee: Diego</small>
                    <h6 className="ms-3">Reply</h6>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex">
                    <div>
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                    </div>
                    <div className="ms-3">
                      <h6>Deadpool</h6>
                    </div>
                  </div>
                  <p>Perfect hairstyle and impeccably done facials.</p>
                  <div className="d-flex">
                    <small>18/12/2024</small>
                    <small className="ms-3">Employee: Diego</small>
                    <h6 className="ms-3">Reply</h6>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex">
                    <div>
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                    </div>
                    <div className="ms-3">
                      <h6>Anton</h6>
                    </div>
                  </div>
                  <p>
                    Great environment, great master Diego. 10 points. I recommend!
                  </p>
                  <div className="d-flex">
                    <small>19/12/2024</small>
                    <small className="ms-3">Employee: Diego</small>
                    <h6 className="ms-3">Reply</h6>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex">
                    <div>
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                      <i className="fa-sharp fa-solid fa-star fa-sm checked" />
                    </div>
                    <div className="ms-3">
                      <h6>Monica</h6>
                    </div>
                  </div>
                  <p>Pleasant and professional service</p>
                  <div className="d-flex">
                    <small>01/09/2024</small>
                    <small className="ms-3">Employee: Diego</small>
                    <h6 className="ms-3">Reply</h6>
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

export default CustomerReview
