import React from 'react'
import { Link } from 'react-router-dom'

const Partnersite = () => {
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
          <li className="nav-item" >
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
          <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
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
        <div className="col-md-8 ">
          <div className="row">
            <div className="col-md-12">
              <div className="card p-3">
                <div className="card-body">
                  <h4>Partner Site</h4>
                  <p className="mb-1" style={{ fontSize: 14 }}>
                    Treatwell Connect provides a free website customized for your
                    salon. We will take care of website security, hosting,
                    optimization for search engines. We'll also make sure it
                    always works and looks great on devices of all sizes and
                    types.
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    The website uses content that you already own. Visitors will
                    see employees and their descriptions, a list of services from
                    your latest menu, a description of the salon, contacts and
                    even the best reviews.
                  </p>
                  <p className="mb-3">
                    <a href="#" style={{ fontSize: 14 }}>
                      Learn more
                    </a>
                  </p>
                  <div className="d-flex flex-row mb-3">
                    <h6 className="mb-0 mt-1">Turn on the salon's website</h6>
                    <i className="fa-regular fa-toggle-large-on text-success fa-2x ms-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-md-12">
              <div className=" p-2">
                <div className="card-body">
                  <h6 className="pb-2">Theme</h6>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card ">
                        <img
                          src="https://connect.treatwell.lt/assets/microsite-theme-hipster-06c0f3e9469054d0bc26f441501b78ee.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-center flex-row  ">
                            <h6 className="pt-1 ">Hipster</h6>
                            <div>
                              <i className="fa-solid fa-circle-check fa-1x ms-2 mt-2 text-success " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card ">
                        <img
                          src="https://connect.treatwell.lt/assets/microsite-theme-blossom-93f71a41fa6337e3db500ca76d88bdbf.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-center flex-row  ">
                            <h6 className="pt-1 ">Blossom</h6>
                            <div>
                              <i className="fa-solid fa-circle-check fa-1x ms-2 mt-2 text-success " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card ">
                        <img
                          src="https://connect.treatwell.lt/assets/microsite-theme-concierge-3205c57cb6bc980a47840d6b2f92dd51.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-center flex-row  ">
                            <h6 className="pt-1 ">Concierge</h6>
                            <div>
                              <i className="fa-solid fa-circle-check fa-1x ms-2 mt-2 text-success " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="pt-4">Website address</h6>
                  <p className="pt-4 mb-0" style={{ fontSize: 14 }}>
                    Address
                  </p>
                  <div className="d-flex align-items-end mb-3">
                    <input
                      type="email"
                      className="form-control rounded-0 border-0 border-bottom p-0"
                      placeholder="de-legend-barbershop"
                      style={{ width: "12rem" }}
                    />
                    <span>mytreatwell.co.uk</span>
                  </div>
                  <h6 mb-3="">Social links</h6>
                  <p style={{ fontSize: 14 }}>
                    Partner site can be display links to your social media
                    accounts. Fill in the addresses below to have them enabled.
                  </p>
                  <ul className="list-group mb-2">
                    <li className="list-group-item border-0 px-0">
                      <i className="fa-brands fa-facebook text-primary me-1" />
                      <h6 className="d-inline">Facebook.com/</h6>
                      <input
                        type="email"
                        className="form-control rounded-0 border-0 border-bottom p-0 d-inline"
                        placeholder="profile"
                        style={{ width: "12rem" }}
                      />
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <i className="fa-brands fa-instagram text-primary me-1" />
                      <h6 className="d-inline">Instagram.com/</h6>
                      <input
                        type="email"
                        className="form-control rounded-0 border-0 border-bottom p-0 d-inline"
                        placeholder="profile"
                        style={{ width: "12rem" }}
                      />
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <i className="fa-brands fa-twitter text-primary me-1" />
                      <h6 className="d-inline">Twitter.com/</h6>
                      <input
                        type="email"
                        className="form-control rounded-0 border-0 border-bottom p-0 d-inline"
                        placeholder="profile"
                        style={{ width: "12rem" }}
                      />
                    </li>
                  </ul>
                  <h6>Imprint</h6>
                  <p style={{ fontSize: 14 }}>
                    In certain countries, such as Austria, Germany and Switzerland
                    businesses may be required by law to include a statement of
                    ownership on their web presence.
                  </p>
                  <div className="card">
                    <div className="card-body">
                      <fieldset className="mb-2">
                        <div className="d-flex justify-content-start border-bottom">
                          <button
                            className="btn border-0 me-1 px-0"
                            title="Bold Highlighted Text"
                          >
                            Bold
                          </button>
                          <button
                            className="btn border-0 me-1"
                            title="Italicize Highlighted Text"
                          >
                            Italic
                          </button>
                          <button
                            className="btn border-0 me-1"
                            title="Underline Highlighted Text"
                          >
                            Underline
                          </button>
                          <button className="btn border-0 me-1">H1</button>
                          <button className="btn border-0 me-1">H2</button>
                          <button className="btn border-0" title="Ordered List">
                            OL
                          </button>
                        </div>
                      </fieldset>
                      <fieldset
                        id="editor"
                        contentEditable="true"
                        style={{ paddingBottom: "5rem" }}
                      >
                        Edit imprint
                      </fieldset>
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
  
  
  )
}

export default Partnersite
