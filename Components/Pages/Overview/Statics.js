import { Link } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const data = [
  { label: 'January', sales: 20000 },
  { label: 'February', sales: 15000 },
  { label: 'March', sales: 12000 },
  { label: 'April', sales: 10000 },
  { label: 'May', sales: 7000 },
  { label: 'June', sales: 5000 }
];

const Statics = () => {
  return (
      <>   
         <main className="d-flex flex-nowrap">
        <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
      <ul className="nav nav-pills flex-column mb-auto"
        style={{ paddingBottom: 124, backgroundColor: "#fff" }}>
        <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
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
          <div className="container mt-3 offset-1">
            <div className="row">
              <div className="d-flex">
                <div
                  className="col-md-2 shadow-sm mb-4 bg-body rounded"
                  style={{ height: 75, width: 100, backgroundColor: "whitesmoke" }}>
                  <img
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbG9vbnxlbnwwfHwwfHx8MA%3D%3D"
                    className="img-fluid h-100 w-100 "
                  />
                </div>
                <div className="col-md-6 shadow-sm p-1 mb-5 bg-body rounded">
                  <h6 className="ms-2">DE Legend barbershop</h6>
                  <p className="ms-2">
                    4.9
                    <span>
                      <i className="fa-solid fa-star" style={{ color: "#c19600" }} />
                      <i className="fa-solid fa-star" style={{ color: "#c19600" }} />
                      <i className="fa-solid fa-star" style={{ color: "#c19600" }} />
                      <i className="fa-solid fa-star" style={{ color: "#c19600" }} />
                      <i
                        className="fa-solid fa-star-half-stroke"
                        style={{ color: "#c19600" }}
                      />
                    </span>
                  </p>
                </div>
                <div className="col-md-2 shadow-sm p-1 mb-5 bg-body rounded">
                  <p className="mt-3 text-center">View on Marketplace</p>
                </div>
                <div className="col-md-2 shadow-sm p-1 mb-5 bg-body rounded">
                  <p className="mt-3 text-center">View Booking Widget</p>
                </div>
              </div>
            </div>
            <div className="d-flex mt-0">
              <h5
                className="mx-2"
                style={{
                  fontFamily:
                    '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
                }}
              >
                <b>Overview</b>
              </h5>
              <p>THIS MONTH</p>
            </div>
            <div className="row mt-3 gap-5 ms-4">
              <div className="col-md-3 p-4 text-center shadow-sm p-1 mb-5 bg-body rounded mx-2">
                <i
                  className="fa-brands fa-sellcast fs-2"
                  style={{ color: "#db4a8e" }}
                />
                <h6
                  style={{
                    fontSize: 30,
                    fontFamily:
                      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
                  }}
                >
                  449,85$
                </h6>
                <p style={{ fontSize: 14 }}>Total Sales</p>
              <h6 style={{ fontSize: 16, color: "rgb(49, 49, 97)"}}>
               <Link to="/reporttwo" style={{textDecoration:"none"}}> View Report</Link>
                  <span>
                    {" "}
                    <i
                      className="fa-solid fa-angle-right"
                      style={{ color: "#2e4878" }}
                    />
                  </span>
                </h6>
              </div>
              <div className="col-md-3 p-4 text-center shadow-sm p-1 mb-5 bg-body rounded mx-2">
                <i className="fa-regular fa-user fs-2" style={{ color: "#6954a8" }} />
                <h6
                  style={{
                    fontSize: 30,
                    fontFamily:
                      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
                  }}
                >
                  4
                </h6>
                <p style={{ fontSize: 14 }}>Acquired Clients</p>
                <h6 style={{ fontSize: 16, color: "rgb(49, 49, 97)" }}>
                 <Link to="/reporttwo" style={{textDecoration:"none"}}> View Report</Link>
                  <span>
                    {" "}
                    <i
                      className="fa-solid fa-angle-right"
                      style={{ color: "#2e4878" }}
                    />
                  </span>
                </h6>
              </div>
              <div className="col-md-3 p-4 text-center shadow-sm p-1 mb-5 bg-body rounded mx-2">
                <i
                  className="fa-solid fa-person-walking-arrow-loop-left fs-2"
                  style={{ color: "#776060" }}
                />
                <h6
                  style={{
                    fontSize: 30,
                    fontFamily:
                      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
                  }}
                >
                  87%
                </h6>
                <p style={{ fontSize: 14 }}>Client Retention</p>
                <h6 style={{ fontSize: 16, color: "rgb(49, 49, 97)" }}>
                <Link to="/reporttwo" style={{textDecoration:"none"}}> View Report</Link>
                  <span>
                    {" "}
                    <i
                      className="fa-solid fa-angle-right"
                      style={{ color: "#2e4878" }}
                    />
                  </span>
                </h6>
              </div>
            </div>
            <div className="d-flex mt-0">
              <h5
                className="mx-2"
                style={{
                  fontFamily:
                    '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
                }}
              >
                <b>Sales overview</b>
              </h5>
              <p>THIS MONTH</p>
            </div>
            <div className="row">

              <p style={{ backgroundColor: "rgb(167, 231, 209)" }}>
                <span><i class="fa-solid fa-circle-info" style={{ color: "#630c26;" }}></i></span>   Always make sure you check out appointments to get the most out of
                Reports. <a href="">Read More...</a>
              </p>
            </div>
            <div className="row gap-5 ms-2 p-3">
              <div className="col-md-6 col-lg-5 col-sm-5 shadow-sm p-4 mb-5 bg-body rounded">
                <h5
                  style={{
                    fontFamily:
                      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
                  }}
                >
                  <b>Monthly Sales</b>
                  <span>
                    <i
                      className="fa-solid fa-angle-right ms-2"
                      style={{ color: "#2e4878" }}
                    />
                  </span>
                </h5>





                <div className="row">


                  {/* <div className="section col-md-12">
                        
                          <div className="section-content">
                            <ResponsiveContainer width="100%" height={300}>
                              <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
                                <Tooltip />
                                <XAxis dataKey="label" />
                                <YAxis />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Legend/>
                                <Line type="monotone" dataKey="sales" stroke="#FB8833" />
                                <Line type="monotone" dataKey="leads" stroke="#17A8F5" />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                  </div> */}

                  <div className="section col-md-12">

                    <div className="section-content">
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
                          <XAxis dataKey="label" />
                          <YAxis />
                          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="sales" fill="#17A8F5" />

                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>





              </div>
              <div className="col-md-5 col-lg-5 col-sm-5 shadow-sm p-4 mb-5 bg-body rounded">
                <h5
                  style={{
                    fontFamily:
                      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
                  }}
                >
                  <b>Service Sales</b>
                  <span>
                    <i
                      className="fa-solid fa-angle-right ms-2"
                      style={{ color: "#2e4878" }}
                    />
                  </span>
                </h5>
                <div
                  className="d-flex justify-content-between"
                  style={{ fontSize: 12 }}
                >
                  <p>THIS MONTH</p>
                  <p>AMOUNT</p>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{ fontSize: 14 }}
                >
                  <div>
                    <p>
                      Paprastas kirpimas
                      <br />
                      Kirpimas Pro Max/ Haircut Pro Max
                      <br />
                      Kirpimas Pro Max/ Haircut Pro Ma
                    </p>
                  </div>
                  <div>
                    <p className="text-center">
                      245,894$
                      <br />
                      85,894$
                      <br />
                      65,89$
                    </p>
                  </div>
                </div>
                <hr />
                <h5
                  style={{
                    fontFamily:
                      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
                  }}
                >
                  <b>Sales by employee</b>
                  <span>
                    <i
                      className="fa-solid fa-angle-right ms-2"
                      style={{ color: "#2e4878" }}
                    />
                  </span>
                </h5>
                <div
                  className="d-flex justify-content-between"
                  style={{ fontSize: 12 }}
                >
                  <p>THIS MONTH</p>
                  <p>AMOUNT</p>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{ fontSize: 14 }}
                >
                  <div>
                    <p>
                      David
                      <br />
                      Cristian
                      <br />
                      Diego
                    </p>
                  </div>
                  <div>
                    <p className="text-center">
                      245,894$
                      <br />
                      85,894$
                      <br />
                      65,89$
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
  )
}

export default Statics