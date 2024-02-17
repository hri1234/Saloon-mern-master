import React from 'react'
import './Discount.css'
import { Link } from 'react-router-dom'
import pic1 from '../../../Assets/price-tag.png'
const Discount = () => {
    return (
        <>
        <main className="d-flex  flex-nowrap">
            <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
                <ul
                    className="nav nav-pills flex-column mb-auto"
                    style={{ paddingBottom: 124, backgroundColor: "#fff" }}>
                    <li className="nav-item" >
                        <Link
                            to="/service"
                            className="nav-link text-dark"
                            aria-current="page">
                            <i className="fa-regular fa-scissors me-2" />
                            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                                Services
                            </small>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/price_level" className="nav-link text-dark" aria-current="page">
                            <i className="fa-sharp fa-light fa-money-bill me-1" />
                            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                                Price levels
                            </small>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
                        <Link
                            to="/discount"
                            className="nav-link text-dark"
                            aria-current="page">
                            <i className="fa-sharp fa-light fa-badge-percent me-1" />
                            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
                                Discounts
                            </small>
                        </Link>
                    </li>
                </ul>
                <ul
                    className="nav nav-pills flex-column mb-auto"
                    style={{ paddingTop: 48 }}>
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
            <div className="container-fluid mt-5">
  <div className="row">
    <div className="col-lg-6 offset-lg-3">
      <div className="card text-center border-0">
        <div className="mt-2">
          <img src={pic1} style={{"width":"60px"}} className="img-fluid" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{"font-weight":"600"}}>No Discount Yet</h5>
          <p className="card-text">Switch On Smart Discounting to get more bookings. it"s the easiest wat to manage 
            your pricing according to availability and demand. <span style={{"-webkit-text-decoration":"underline","text-decoration":"underline","color":"blue"}}>Learn More</span></p>
          <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Discount</a>
        </div>
      </div>
    </div>
  </div>
</div>
        </main>

     {/* model-start */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content modal-xl">
      <div className="modal-header shadow-sm">
        <h5 className="modal-title" id="exampleModalLabel">Editing Discount</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body p-3">
        {/*   modal box top menu start */}
        <ul className="nav nav-underline" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link text-dark active" id=" home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
              Discount Settings</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Assigned Services</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent" style={{"background-color":"#fafafa"}}>
          <div className="tab-pane fade show active " id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
            <div className="container shadow-sm my-4 border-0 py-3" style={{"background-color":"#fff"}}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <small htmlFor="exampleFormControlInput1" className="form-label">Discount Name
                    </small>
                    <input type="text" className="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary" id="exampleFormControlInput1" placeholder="Enter Name Of The Discount" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <small htmlFor="exampleFormControlInput1" className="form-label">
                    </small>
                    <div type className="mt-2 float-end">
                      Activate Discount  <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row" style={{"background-color":"rgb(255, 255, 205)"}}>
                  <div className="col-md-1">
                    <p className="mt-3"><i className="fa-duotone fa-circle-exclamation" /></p>
                  </div>
                  <div className="col-md-11">
                    <p>Discount Will Only Apply for booking made through  treatwell and the booking  widget. if multiple discount apply, only the largest  will be applied . Note that it may  take up to an hour  to show discounts in  the browser results page once enabled</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container shadow py-3">
              <div className>
                <p style={{"font-weight":"600"}}>Last Minute discounts</p>
                <p><input type="checkbox" aria-label="Checkbox for following text input" /> discount last minute appointment</p>
              </div>
            </div>
            <div className="container shadow py-3">
              <div className>
                <p style={{"font-weight":"600"}}>off-peak discounts</p>
                <p><input type="checkbox" aria-label="Checkbox for following text input" /> Enable  time based discount for appointment</p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
            <div className="container shadow py-3">
              <div className>
                <p style={{"font-weight":"600"}}><input type="checkbox" aria-label="Checkbox for following text input" /> Last Minute discounts</p>
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />Barzdos modeliavimas Pro / Beard Pro</p><hr />
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />Barzdos modeliavimas / Beard</p><hr />
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />Vaiku kirpimas / Kids Haircut (1-10 metu)</p><hr />
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />Galvos skutimas / Head Shave</p><hr />
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />VIP paslauga / Legends VIP Service</p><hr />
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />Kirpimas Pro Maxx / Haircut Pro Maxx</p><hr />
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />Kirpimas Pro / Haircut Pro Max</p><hr />
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />Kirpimas Pro Maxx / Haircut Pro</p><hr />
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />Kirpimas Pro / Haircut Pro Max</p><hr />
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" /> Paprastas kirpimas / Haircut</p><hr />
                <p><input type="checkbox" aria-label="Checkbox for following text input" className="me-2" />Barzdos modeliavimas Pro MAX / Beard Pro MAX</p><hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer shadow-lg d-flex justify-content-between p-0" style={{"background-color":"#fafafa"}}>
    <div className="m-0">
      <a className="btn p-3" href="#" role="button" data-bs-dismiss="modal">Cancel</a>
    </div>
    <div className="m-0">
      <a className="btn p-3 text-white rounded-0" href="#" role="button" data-bs-dismiss="modal" style={{"background-color":"#3ba150","border-radius":"0 0 7px 0"}}>save</a>
    </div>
  </div>
    </div>
  </div>
 
</div>
</>
    )
}

export default Discount
