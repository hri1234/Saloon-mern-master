import React from 'react'

const Client = () => {
  return (
    <main className="d-flex align-items-baseline flex-nowrap">
    <div className="container-fluid  mb-3">
      <div className="row">
        <div className="row p-0 m-0">
          <div className="col-md-12 p-0 m-0 ">
          </div>
        </div>
        <div className="col-md-12 col-sm-12 mx-auto my-3">
          <div className="row mb-2">
            <div className="col-md-12 col-sm-12">
              <div className="table-responsive">
                <table className="table border tab">
                  <thead className style={{"white-space":"nowrap"}}>
                    <tr className="table-active">
                      <th>First name Last name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Opt-in<i className="fa-solid fa-filter " data-bs-toggle="modal" data-bs-target="#staticBackdrop4" /></th>
                      <th>Booking<i className="fa-solid fa-filter" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" /></th>
                      <th>Last visit<i className="fa-solid fa-filter" data-bs-toggle="modal" data-bs-target="#staticBackdrop5" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <td>Aman smith</td>
                      <td>884353532</td>
                      <td>aman@gmail.com</td>
                      <td><i className="fa-duotone fa-check" style={{"--fa-primary-color":"#12f3cd","--fa-secondary-color":"#12f3cd"}} />
                      </td>
                      <td>1</td>
                      <td>23/09/2019 512 days ago</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#staticBackdrop111">
                      <td>rinku namith</td>
                      <td>884353532</td>
                      <td>rinku@gmail.com</td>
                      <td><i className="fa-duotone fa-check" style={{"--fa-primary-color":"#12f3cd","--fa-secondary-color":"#12f3cd"}} />
                      </td>
                      <td>2</td>
                      <td>23/09/2018 612 days ago</td>
                    </tr>
                    <tr>
                      <td>rinku namith</td>
                      <td>884353532</td>
                      <td>rinku@gmail.com</td>
                      <td><i className="fa-duotone fa-check" style={{"--fa-primary-color":"#12f3cd","--fa-secondary-color":"#12f3cd"}} />
                      </td>
                      <td>100</td>
                      <td>23/09/2018 612 days ago</td>
                    </tr>
                    <tr>
                      <td>rinku namith</td>
                      <td>884353532</td>
                      <td>rinku@gmail.com</td>
                      <td><i className="fa-duotone fa-check" style={{"--fa-primary-color":"#12f3cd","--fa-secondary-color":"#12f3cd"}} />
                      </td>
                      <td>100</td>
                      <td>23/09/2018 612 days ago</td>
                    </tr>
                    <tr>
                      <td>rinku namith</td>
                      <td>884353532</td>
                      <td>rinku@gmail.com</td>
                      <td><i className="fa-duotone fa-check" style={{"--fa-primary-color":"#12f3cd","--fa-secondary-color":"#12f3cd"}} />
                      </td>
                      <td>100</td>
                      <td>23/09/2018 612 days ago</td>
                    </tr>
                    <tr>
                      <td>rinku namith</td>
                      <td>884353532</td>
                      <td>rinku@gmail.com</td>
                      <td><i className="fa-duotone fa-check" style={{"--fa-primary-color":"#12f3cd","--fa-secondary-color":"#12f3cd"}} />
                      </td>
                      <td>100</td>
                      <td>23/09/2018 612 days ago</td>
                    </tr>
                    <tr>
                      <td>rinku namith</td>
                      <td>884353532</td>
                      <td>rinku@gmail.com</td>
                      <td><i className="fa-duotone fa-check" style={{"--fa-primary-color":"#12f3cd","--fa-secondary-color":"#12f3cd"}} />
                      </td>
                      <td>100</td>
                      <td>23/09/2018 612 days ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-between">
          <div className="col-md-2"> <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal6">Send an email</button></div>
          <div className="10 dropdown">
            <button type="button" className="btn btn-outline-secondary"> <i className="fa-regular fa-download" style={{"color":"#292927"}} /> Export</button>
            <button type="button" className="btn btn-outline-secondary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fa-regular fa-plus" style={{"color":"#46494b"}} /> Add</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-regular fa-plus" style={{"color":"#46494b"}} /> Add new client</a></li>
              <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2"> <i className="fa-regular fa-upload" style={{"color":"#4e5052"}} /> Import form file</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Send Email section  */}
    <div className="modal fade" id="exampleModal6" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg ">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title fs-5" id="exampleModalLabel">COMPOSE EMIAL </h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-11 mx-auto   p-2 ">
                <div className="row mt-2">
                  <div className="col-md-3">
                    <label htmlFor className="float-end" style={{"font-size":"15px"}}> Email Subject </label>
                  </div>
                  <div className="col-md-9">
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <input type="checkbox" className="form-check-input float-end " style={{"font-size":"15px"}} id="exampleCheck1" />
                  </div>
                  <div className="col-md-9">
                    <label className="form-check-label " htmlFor="exampleCheck1"> Show logo in the header of
                      the rmail venue primery image will be. To change it, go to Venue details
                    </label>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <label htmlFor className="float-end  " style={{"font-size":"15px"}}> Tittel (email
                      Header)
                    </label>
                  </div>
                  <div className="col-md-9">
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <label htmlFor className="float-end  " style={{"font-size":"15px"}}> Message body
                    </label>
                  </div>
                  <div className="col-md-9">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <label htmlFor className=" " style={{"font-size":"15px"}}> Booking button link to
                    </label>
                  </div>
                  <div className="col-md-9">
                    <div className="form-check">
                      <input className="form-check-input  " type="checkbox" defaultValue id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Venue page on Treatwell
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input  " type="checkbox" defaultValue id="flexCheckChecked" />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        Treatwell booking widget
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <label htmlFor className="float-end  " style={{"font-size":"15px"}}>
                      Footer (signature)
                    </label>
                  </div>
                  <div className="col-md-9">
                    <textarea className="form-control" placeholder="DE Legends barbershop" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-between ">
              <button type="button" className="btn btn-outline-secondary"> Cancel </button>
              <button type="button" className="btn btn-success"><i className="fa-solid fa-check" style={{"color":"#ffff"}} /> Preview and send </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Add button Add new Client */}
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Client</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                  <input type="text" className="form-control rounded-0 border-top-0 border-start-0 border-end-0 border-secondary" id aria-describedby />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">Phone </label>
                  <input type="text" className="form-control rounded-0 border-top-0 border-start-0 border-end-0 border-secondary" id aria-describedby />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input type="text" className="form-control  rounded-0 border-top-0 border-start-0 border-end-0 border-secondary " id aria-describedby />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h6><b>Marketing communication</b></h6>
                <p className="d-flex justify-content-between  ">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault"> I confirm that i have
                    obitained specific , information , freely given and
                    active consent from this customer to receive invites to rebook and other
                    marketing emails and SMS from my salon and have a record if this consent
                    Learn more about GDRP requirements
                  </label>
                </p>
                <h6><b>Payment required</b></h6>
                <p className="d-flex justify-content-between  ">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault"> Require customer to pay
                    in advance whenever they book with your salon online Does not apply to
                    booking made via "Reserve with Google."
                  </label>
                </p>
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="form-control ">Gender</label>
                <select className="form-select mt-1 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary" aria-label="Default select example">
                  <option selected>Other / perfer not to disclose</option>
                  <option value={1}>Male </option>
                  <option value={2}>female </option>
                  <option value={3}>Other </option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">Birth Month</label>
                  <select className="form-select rounded-0 border-top-0 border-start-0 border-end-0 border-secondary" aria-label="Default select example">
                    <option selected>Months </option>
                    <option value={1}>3months</option>
                    <option value={2}>6months</option>
                    <option value={3}>12months</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">Birth Day</label>
                  <input type="text" className="form-control rounded-0 border-top-0 border-start-0 border-end-0 border-secondary" id aria-describedby />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">Birth Year</label>
                  <input type="text" className="form-control rounded-0 border-top-0 border-start-0 border-end-0 border-secondary" id aria-describedby />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">Note</label>
                  <input type="text" className="form-control rounded-0 border-top-0 border-start-0 border-end-0 border-secondary" id aria-describedby />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-success">Save</button>
          </div>
        </div>
      </div>
    </div>
    {/* Add Button import from file  */}
    <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Multiple Clients</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <h6> <i className="fa-sharp fa-regular fa-circle-1 fa-lg" style={{"color":"#3234af"}} />
                  Download our template</h6>
                <p className="m-0 p-0">
                  Use our handy , prebuilt template to make sure that all the information you
                  enter is uploaded correctly into Connent.
                </p>
                <button type="button" className="btn btn-outline-success mt-2">Download
                  template</button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <h6> <i className="fa-sharp fa-regular fa-circle-2 fa-lg" style={{"color":"#3234af"}} />
                  Fill in the details</h6>
                <p className="m-0 p-0">
                </p><li> <b>Mondatory fields:</b>
                  Your clients name ,phone, number and/or email address are the essential
                  requirements to sucessfully add them into Connect.
                </li>
                <li className="mt-1">
                  <b>GDRP requirements :</b>
                  Clients who agree to receive marketing comms form your salon must be marked
                  with a Y in the "opt-in-site" field (column G): Red More about GDPR
                </li>
                <li>
                  Got any questions? Visit our Partner Help Center or Contact us
                </li>
                <p />
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="table-responsive">
                    <table className="table border tab">
                      <thead className style={{"white-space":"nowrap"}}>
                        <tr className="table-active">
                          <th />
                          <th>A</th>
                          <th>B</th>
                          <th>C</th>
                          <th>D</th>
                          <th>E</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="border">1</th>
                          <td style={{"white-space":"nowrap"}}>Full Name</td>
                          <td style={{"white-space":"nowrap"}}>First Name</td>
                          <td style={{"white-space":"nowrap"}}>Last Name</td>
                          <td style={{"white-space":"nowrap"}}>Phone</td>
                          <td style={{"white-space":"nowrap"}}>Email Address</td>
                        </tr>
                        <tr>
                          <th className="border">2</th>
                          <td style={{"white-space":"nowrap","background-color":"rgb(42, 141, 42)"}}>
                            tyt</td>
                          <td style={{"background-color":"rgb(42, 141, 42)"}}>runu</td>
                          <td style={{"background-color":"rgb(42, 141, 42)"}}>nart</td>
                          <td style={{"background-color":"rgb(42, 141, 42)"}}>444</td>
                          <td style={{"background-color":"rgb(42, 141, 42)"}}>rn@gmail.com
                          </td>
                        </tr>
                        <tr>
                          <th className="border">2</th>
                          <td>...</td>
                          <td>...</td>
                          <td>..</td>
                          <td>..</td>
                          <td>rn@gmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <h6>
                  <i className="fa-sharp fa-regular fa-circle-3 fa-lg" style={{"color":"#3234af"}} />
                  Save and Upload the file
                </h6>
                <p>
                  Make sure you save your template in one of these accepted file formats before
                  uploading : XLS XLSX or CSV
                </p>
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">Choose file</label>
                  <input type="file" className="form-control" id aria-describedby style={{"border":"1px solid rgba(14, 214, 91, 0.678)"}} />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success">Add Clients</button>
          </div>
        </div>
      </div>
    </div>
    {/* The Modal */}
    <div className="modal" id="myModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header shadow">
            <h4 className="modal-title">Add Product</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <p> You will be able to use the described products during checkout. Enter standard product
              prices including
              VAT. </p>
            <div className="row mt-3">
              <div className="col-md-10 offset-md-1">
                <div>
                  <label className="me-1"> Product name </label><input className type="text" />
                </div>
                <br />
                <div>
                  <label className="me-3"> Unit price, € </label><input className type="text" />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label className="me-2">Track quantity in stock</label> <input type="checkbox" />
            </div>
            <div className="mt-3 ms-1">
              <label className="me-2">Available quantity</label> <input type="type" />
            </div>
          </div>
          {/* Modal footer */}
          <div className="modal-footer shadow">
            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
    {/* Aman smith user  Details  */}
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg  modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Client details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="d-flex justify-content-between ">
                <div className="col-md-1">
                  <img src="./img/person1.jpg" alt className="img-fluid border-0 " style={{"width":"130px","border-radius":"0px"}} />
                </div>
                <div className="col-md-6">
                  <p className="p-0 m-0 ">Ahmad Gall
                    Edit Details</p>
                  <p className style={{"font-size":"small"}}>Customer Source Connect</p>
                  <p className="m-0 p-0">Phone &nbsp; &nbsp; +122234556677</p>
                  <p className="m-0 p-0">Email&nbsp; &nbsp; &nbsp; ahmad.gaal@treatwell.com
                  </p>
                  <p className=" mt-2"><i className="fa-solid fa-check" style={{"color":"#74C0FC"}} />
                    Agree to receive promotional communication <br />
                    <i className="fa-solid fa-money-check" style={{"color":"#da4518"}} />
                    prepayment required
                  </p>
                </div>
                <div className="col-md-5 p-3" style={{"background-color":"#E1F0DA"}}>
                  <p className="mt-1">
                    You won't pay any commission for repeat client. this applies booking via
                    Theatwell the Booking Widget
                    or those added directly.<br />
                    want to find out more about over pricing? <br />
                    <a href="#">learn more</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active  text-dark" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">History <span className="bg-secondary text-light px-2 rounded "> 4
                    </span></button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 mx-auto my-3">
                      <div className="row mb-2">
                        <div className="col-md-12 col-sm-12">
                          <div className="table-responsive">
                            <table className="table border tab">
                              <thead className="text-center" style={{"white-space":"nowrap"}}>
                                <tr className="table-active">
                                  <th>Date</th>
                                  <th>Services</th>
                                  <th>Specialities</th>
                                  <th style={{"width":"9rem !important"}}>
                                    Sourse</th>
                                  <th>Amount paid</th>
                                  <th style={{"width":"10rem !important"}}>
                                    Status</th>
                                </tr>
                              </thead>
                              <tbody style={{"white-space":"nowrap","-webkit-text-align":"center","text-align":"center"}}>
                                <tr data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                  <td>16/06/2020</td>
                                  <td> Vaiku kirpimas / Kids haircut </td>
                                  <td> David </td>
                                  <td>
                                    <span className="bg-success text-light rounded  " style={{"padding":"3px 1px"}}>
                                      Treatment google </span>
                                  </td>
                                  <td>24,99</td>
                                  <td>
                                    <span className="bg-danger rounded text-light" style={{"padding":"3px 1px"}}> No
                                      Show Linepaid
                                    </span>
                                  </td>
                                </tr>
                                {/* <tr>
                                                                <td>18/06/2020</td>
                                                                <td>men's Grey Coverage</td>
                                                                <td>jess</td>
                                                                <td>
                                                                    <span class="bg-success text-light rounded  "
                                                                        style="padding: 3px 1px;">
                                                                        Treatment google </span>
                                                                </td>
                                                                <td>24,99</td>
  
                                                                <td>
                                                                    <span class="bg-danger rounded text-light"
                                                                        style="padding: 3px 1px;"> No
                                                                        Show Linepaid
                                                                    </span>
                                                                </td>
  
                                                            </tr>
                                                            <tr>
                                                                <td>02/06/2020</td>
                                                                <td>men's Wash Haircut & Styling </td>
                                                                <td>katrina</td>
                                                                <td>
                                                                    <span class="bg-success text-light rounded  "
                                                                        style="padding: 3px 1px;">
                                                                        Treatment google </span>
                                                                </td>
                                                                <td>24,99</td>
  
                                                                <td>
                                                                    <span class="bg-danger rounded text-light"
                                                                        style="padding: 3px 1px;"> No
                                                                        Show Linepaid
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>19/12/2010</td>
                                                                <td>Cut</td>
                                                                <td>katrina</td>
  
                                                                <td>
                                                                    <span class="bg-success text-light rounded  "
                                                                        style="padding: 3px 1px;">
                                                                        Treatment google </span>
                                                                </td>
                                                                <td>24,99</td>
                                                                <td>
                                                                    <span class="bg-danger rounded text-light"
                                                                        style="padding: 3px 1px;"> No
                                                                        Show Linepaid
                                                                    </span>
                                                                </td>
  
  
                                                            </tr>
                                                            <tr>
                                                                <td>13/08/2019</td>
                                                                <td>Ladies-Half Hair Styling</td>
                                                                <td>sophie</td>
                                                                <td>
                                                                    <span class="bg-success text-light rounded  "
                                                                        style="padding: 3px 1px;">
                                                                        Treatment google </span>
                                                                </td>
                                                                <td>24,99</td>
                                                                <td>
                                                                    <span class="bg-danger rounded text-light"
                                                                        style="padding: 3px 1px;"> No
                                                                        Show Linepaid
                                                                    </span>
                                                                </td>
                                                            </tr> */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row mt-4">
                    <div className="d-flex justify-content-between">
                      <div className="col-md-3">
                        <p style={{"font-weight":"bold"}}><i className="fa-solid fa-venus-mars" />Gender</p>
                        <hr />
                        <p style={{"font-weight":"bold"}}><i className="fa-regular fa-cake-candles" />Birthdate</p>
                        <hr />
                      </div>
                      <div className="col-md-4">
                        <p>Not Set</p>
                        <hr />
                        <p>Not Set</p>
                        <hr />
                      </div>
                      <div className="col-md-4">
                        <p className="m-0 p-0" style={{"font-weight":"bold"}}>Notes</p>
                        <p className="m-0 p-0">Any details about treatment e.g patch test or if they
                          have sensitive skin Any details about customer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  ...</div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" style={{"background-color":"#37B5B6","border":"none","color":"white"}}>New
              Sale</button>
          </div>
        </div>
      </div>
    </div>
    {/* Rinku  namith  user  Details  */}
    <div className="modal fade" id="staticBackdrop111" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg  modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Client details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="d-flex justify-content-between ">
                <div className="col-md-1">
                  <img src="./img/person1.jpg" alt className="img-fluid border-0 " style={{"width":"130px","border-radius":"0px"}} />
                </div>
                <div className="col-md-6">
                  <p className="p-0 m-0 ">Ahmad Gall
                    Edit Details</p>
                  <p className style={{"font-size":"small"}}>Customer Source Connect</p>
                  <p className="m-0 p-0">Phone &nbsp; &nbsp; +122234556677</p>
                  <p className="m-0 p-0">Email&nbsp; &nbsp; &nbsp; ahmad.gaal@treatwell.com
                  </p>
                  <p className=" mt-2"><i className="fa-solid fa-check" style={{"color":"#74C0FC"}} />
                    Agree to receive promotional communication <br />
                    <i className="fa-solid fa-money-check" style={{"color":"#da4518"}} />
                    prepayment required
                  </p>
                </div>
                <div className="col-md-5 p-3" style={{"background-color":"#E1F0DA"}}>
                  <p className="mt-1">
                    You won't pay any commission for repeat client. this applies booking via
                    Theatwell the Booking Widget
                    or those added directly.<br />
                    want to find out more about over pricing? <br />
                    <a href="#">learn more</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active  text-dark" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">History <span className="bg-secondary text-light px-2 rounded "> 4
                    </span></button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 mx-auto my-3">
                      <div className="row mb-2">
                        <div className="col-md-12 col-sm-12">
                          <div className="table-responsive">
                            <table className="table border tab">
                              <thead className="text-center" style={{"white-space":"nowrap"}}>
                                <tr className="table-active">
                                  <th>Date</th>
                                  <th>Services</th>
                                  <th>Specialities</th>
                                  <th style={{"width":"9rem !important"}}>
                                    Sourse</th>
                                  <th>Amount paid</th>
                                  <th style={{"width":"10rem !important"}}>
                                    Status</th>
                                </tr>
                              </thead>
                              <tbody style={{"white-space":"nowrap","-webkit-text-align":"center","text-align":"center"}}>
                                <tr data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                  <td>16/06/2020</td>
                                  <td> Vaiku kirpimas / Kids haircut </td>
                                  <td> David </td>
                                  <td>
                                    <span className="bg-success text-light rounded  " style={{"padding":"3px 1px"}}>
                                      Treatment google </span>
                                  </td>
                                  <td>24,99</td>
                                  <td>
                                    <span className="bg-danger rounded text-light" style={{"padding":"3px 1px"}}> No
                                      Show Linepaid
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>18/06/2020</td>
                                  <td>men's Grey Coverage</td>
                                  <td>jess</td>
                                  <td>
                                    <span className="bg-success text-light rounded  " style={{"padding":"3px 1px"}}>
                                      Treatment google </span>
                                  </td>
                                  <td>24,99</td>
                                  <td>
                                    <span className="bg-danger rounded text-light" style={{"padding":"3px 1px"}}> No
                                      Show Linepaid
                                    </span>
                                  </td>
                                </tr>
                                {/* <tr>
                                                                <td>02/06/2020</td>
                                                                <td>men's Wash Haircut & Styling </td>
                                                                <td>katrina</td>
                                                                <td>
                                                                    <span class="bg-success text-light rounded  "
                                                                        style="padding: 3px 1px;">
                                                                        Treatment google </span>
                                                                </td>
                                                                <td>24,99</td>
  
                                                                <td>
                                                                    <span class="bg-danger rounded text-light"
                                                                        style="padding: 3px 1px;"> No
                                                                        Show Linepaid
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>19/12/2010</td>
                                                                <td>Cut</td>
                                                                <td>katrina</td>
  
                                                                <td>
                                                                    <span class="bg-success text-light rounded  "
                                                                        style="padding: 3px 1px;">
                                                                        Treatment google </span>
                                                                </td>
                                                                <td>24,99</td>
                                                                <td>
                                                                    <span class="bg-danger rounded text-light"
                                                                        style="padding: 3px 1px;"> No
                                                                        Show Linepaid
                                                                    </span>
                                                                </td>
  
  
                                                            </tr>
                                                            <tr>
                                                                <td>13/08/2019</td>
                                                                <td>Ladies-Half Hair Styling</td>
                                                                <td>sophie</td>
                                                                <td>
                                                                    <span class="bg-success text-light rounded  "
                                                                        style="padding: 3px 1px;">
                                                                        Treatment google </span>
                                                                </td>
                                                                <td>24,99</td>
                                                                <td>
                                                                    <span class="bg-danger rounded text-light"
                                                                        style="padding: 3px 1px;"> No
                                                                        Show Linepaid
                                                                    </span>
                                                                </td>
                                                            </tr>  */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row mt-4">
                    <div className="d-flex justify-content-between">
                      <div className="col-md-3">
                        <p style={{"font-weight":"bold"}}><i className="fa-solid fa-venus-mars" />Gender</p>
                        <hr />
                        <p style={{"font-weight":"bold"}}><i className="fa-regular fa-cake-candles" />Birthdate</p>
                        <hr />
                      </div>
                      <div className="col-md-4">
                        <p>Not Set</p>
                        <hr />
                        <p>Not Set</p>
                        <hr />
                      </div>
                      <div className="col-md-4">
                        <p className="m-0 p-0" style={{"font-weight":"bold"}}>Notes</p>
                        <p className="m-0 p-0">Any details about treatment e.g patch test or if they
                          have sensitive skin Any details about customer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  ...</div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" style={{"background-color":"#37B5B6","border":"none","color":"white"}}>New
              Sale</button>
          </div>
        </div>
      </div>
    </div>
    {/* Opt-in fillter  */}
    <div className="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" style={{"background-color":"#f1f1f1"}}>
            <h6 className="modal-title " id="staticBackdropLabel">
              Marking Communication
            </h6>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="form-check mb-0">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Yes
              </label>
            </div>
            <hr />
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                No
              </label>
            </div>
            <div className="row p-2" style={{"background-color":"#f1f1f1"}}>
              <div className="col-md-6"> <i className="fa-regular fa-clock-rotate-left" /> Reset
              </div>
              <div className="col-md-6"> <i className="fa-solid fa-filter" /> Filter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Booking fillter  */}
    <div className="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" style={{"background-color":"#f1f1f1"}}>
            <h6 className="modal-title " id="staticBackdropLabel">
              Only Show Client who made
            </h6>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 border-end ">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1" />
                  Less than 
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Exactly </label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    More then </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="m-4">
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <h6 className="text-center"> Booking </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row p-2" style={{"background-color":"#f1f1f1"}}>
              <div className="col-md-6"> <i className="fa-regular fa-clock-rotate-left" /> Reset
              </div>
              <div className="col-md-6"> <i className="fa-solid fa-filter" /> Filter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Last Visit Fillet */}
    <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" style={{"background-color":"#f1f1f1"}}>
            <h6 className="modal-title " id="staticBackdropLabel">
              Only Show Client who made
            </h6>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 border-end ">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1" />
                  Less than or equal to 
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    between </label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    More then equal to </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="m-4">
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <h6 className="text-center"> Booking </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row p-2" style={{"background-color":"#f1f1f1"}}>
              <div className="col-md-6"> <i className="fa-regular fa-clock-rotate-left" /> Reset
              </div>
              <div className="col-md-6"> <i className="fa-solid fa-filter" /> Filter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  )
}

export default Client
