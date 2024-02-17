import React from 'react'
import { Link } from 'react-router-dom'

const Value_detail = () => {
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
                style={{ backgroundColor: "#f2f2f2" }}
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link border-0"
                    to="/vanue_detail"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <small className="fw-bold">Venue details</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link border" to="/opening_hour">
                      <small className="fw-bold">Opening hours</small>
                    </Link>
                  </li>
                
                  <li className="nav-item">
                    <Link className="nav-link border" to="/resources">
                      <small className="fw-bold">Resources</small>
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
        <div className="col mt-3">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div
                  style={{
                    overflowY: "scroll",
                    height: 515,
                    overflowX: "hidden"
                  }}
                >
                  <div className="row p-2">
                    <div className="col-md-4">
                      <img
                        src="https://cdn1.treatwell.net/images/view/v2.i4291691.w720.h480.xFA0328F2/"
                        style={{ height: 180, width: 220 }}
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="p-3">
                        <h5>Treatwell Hair</h5>
                        <small>Part of Treatwell Sales Venue</small>
                        <h6>
                          {" "}
                          <small>Primary Type</small>{" "}
                          <small className="ms-4">Hair Salon</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="ms-2">
                      <h6>Where is your venus located?</h6>
                    </div>
                    <div className="col-md-8 offset-md-2">
                      <div>
                        <label>Address</label>
                        <label style={{ marginLeft: 25 }}>
                          Fairfax House 15 Foolwood Place London
                        </label>
                      </div>
                      <div>
                        <label>Postcode</label>
                        <label style={{ marginLeft: 20 }}>WC1V 6HU</label>
                      </div>
                      <div>
                        <label>Country</label>
                        <label style={{ marginLeft: 24 }}>
                          {/* <input class="border-0" type="text"/> */}
                          <select style={{ width: 140 }}>
                            <option>Select Country</option>
                            <option>United Kingdom</option>
                            <option>USA</option>
                            <option>England</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-12">
                      <div className="ms-4">
                        <label className="mb-2">Location on the Map</label>
                        <label>
                          <div className="mapouter">
                            <div className="gmap_canvas">
                              <iframe
                                width={598}
                                height={166}
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=united kingdom&t=&z=10&ie=UTF8&iwloc=&output=embed"
                                frameBorder={0}
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                              />
                              <a href="https://2yu.co">2yu</a>
                              <br />
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                                                                    .mapouter {\n                                                                        position: relative;\n                                                                        text-align: right;\n                                                                        height: 166px;\n                                                                        width: 598px;\n                                                                    }\n                                                                "
                                }}
                              />
                              <a href="https://embedgooglemap.2yu.co">
                                html embed google map
                              </a>
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                                                                    .gmap_canvas {\n                                                                        overflow: hidden;\n                                                                        background: none !important;\n                                                                        height: 166px;\n                                                                        width: 598px;\n                                                                    }\n                                                                "
                                }}
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="ms-2">
                      <h6>How can customer reach you?</h6>
                    </div>
                    <div className="col-md-8 offset-md-2">
                      <div>
                        <label>Phone Number</label>
                        <label style={{ marginLeft: 24 }}>
                          <input
                            type="text"
                            placeholder={+443301003515}
                            style={{ width: "200%" }}
                          />
                        </label>
                      </div>
                      <div>
                        <label>Email</label>
                        <label style={{ marginLeft: 24, marginTop: 10 }}>
                          <input
                            type="text"
                            placeholder="silvio.hinteregger@treatwell.com"
                            style={{ marginLeft: 67, width: "148%" }}
                          />
                        </label>
                      </div>
                      <div>
                        <label>Website</label>
                        <label style={{ marginLeft: 24, marginTop: 10 }}>
                          <input
                            type="text"
                            style={{ marginLeft: 50, width: "160%" }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className=" col-md-12 ms-2">
                      <h6>Discription</h6>
                      <div
                        style={{
                          backgroundColor: "#f2f2f2",
                          overflowY: "scroll",
                          height: 150
                        }}
                      >
                        <label className="ms-3 me-4">
                          Barbers, sometimes called hairstylists or
                          cosmetologists, cut and style hair and may perform
                          other beauty services. Their primary responsibilities
                          are to enhance the cosmetic appeal and health of their
                          client’s hair. This might include hair cutting and
                          coloring, fitting hairpieces and grooming and styling
                          facial hair. Barbers may perform a range of tasks
                          related to hair cutting and styling but may also
                          perform administrative tasks and managerial duties if
                          they are in a supervisory or ownership role.
                        </label>
                        <br /> <br />
                        <div className="ms-3 me-3">
                          <b>
                            Barbers are primarily responsible for directly
                            assisting clients, with daily duties including:
                          </b>
                          <ul>
                            <li>
                              Assess hair and scalp health and recommend
                              treatments and products
                            </li>
                            <li>
                              Consult with clients and advise hairstyle and hair
                              treatment options
                            </li>
                            <li>
                              Cut and style hair to clientâ€™s specifications
                            </li>
                            <li>
                              Use chemical solutions, hair dyes and hot styling
                              tools
                            </li>
                            <li>
                              Maintain salon sanitation and health standards,
                              including cleaning and disinfecting workstations
                            </li>
                            <li>
                              Trim and groom clientsâ€™ facial hair with combs,
                              razors, scissors and clippers
                            </li>
                            <li>Process client payments</li>
                            <li>Order barber supplies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card">
                <div className="row p-2">
                  <div
                    style={{
                      overflowY: "scroll",
                      height: 500,
                      overflowX: "hidden",
                      width: 170
                    }}
                  >
                    <div className="col-md-12">
                      <h6>venus photos</h6>
                      <button className="btn btn-outline-primary ">
                        Download All{" "}
                      </button>
                      <div
                        className="card mt-2"
                        style={{ height: 100, width: 150 }}
                      >
                        <img
                          src="https://cdn1.treatwell.net/images/view/v2.i4291691.w720.h480.xFA0328F2/"
                          style={{ height: 100, width: 150 }}
                          alt=""
                        />
                      </div>
                      <div
                        className="card mt-2"
                        style={{ height: 100, width: 150 }}
                      >
                        <img
                          src="https://www.shutterstock.com/image-photo/attractive-happy-man-smiling-while-600nw-2267242719.jpg"
                          style={{ height: 100, width: 150 }}
                          alt=""
                        />
                      </div>
                      <div
                        className="card mt-2"
                        style={{ height: 100, width: 150 }}
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_1280.jpg"
                          style={{ height: 100, width: 150 }}
                          alt=""
                        />
                      </div>
                      <div
                        className="card mt-2"
                        style={{ height: 100, width: 150 }}
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2015/09/11/05/07/barber-935324_640.jpg"
                          style={{ height: 100, width: 150 }}
                          alt=""
                        />
                      </div>
                      <div
                        className="card mt-2"
                        style={{ height: 100, width: 150 }}
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2020/05/14/12/37/barber-5194406_640.jpg"
                          style={{ height: 100, width: 150 }}
                          alt=""
                        />
                      </div>
                      <div
                        className="card mt-2"
                        style={{ height: 100, width: 150 }}
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2015/10/26/20/41/haircut-1007882_640.jpg"
                          style={{ height: 100, width: 150 }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{ backgroundColor: "#f3f3f3" }}>
              <div className="shadow d-flex ms-1">
                <button
                  type="button"
                  className="btn btn-success mt-3 border-0"
                  style={{ width: 80, height: 40 }}
                >
                  Save
                </button>
                <h6
                  style={{ padding: 20, color: "rgb(8, 8, 49)", marginTop: 5 }}
                >
                  Preview on Treatwell
                </h6>
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

export default Value_detail

