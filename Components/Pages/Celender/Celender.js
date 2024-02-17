import React from 'react'
import { Link } from 'react-router-dom'
const Celender = () => {
  return (
   <>
 <main className="d-flex align-items-baseline flex-nowrap">
  <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <i className="fa-solid fa-chevron-left ms-1" />
            <span>
              <b>Feburary 2021</b>
            </span>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">M</th>
                <th scope="col">T</th>
                <th scope="col">W</th>
                <th scope="col">T</th>
                <th scope="col">F</th>
                <th scope="col">S</th>
                <th scope="col">S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
              </tr>
              <tr>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
              </tr>
              <tr>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <ul className="nav nav-pills flex-column mb-auto">
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
      <hr />
      <li className="nav-item">
        <a href="#" className="nav-link text-dark" aria-current="page">
          <i className="fa-light fa-phone" />
          +370 5 214 1572
        </a>
      </li>
    </ul>
  </div>
  <div
    className="container-fluid  border  "
    
  >
    <div className="row">
      <div className="col-md-12 ">
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <i className="fa-solid fa-chevron-left " />
              <span>
                <b>Tue </b>Today
              </span>
              <i className="fa-solid fa-chevron-right" />
            </div>
          </div>
          <div className="col-md-6   ">
            <div className="d-flex  justify-content-end ">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button type="button" className="btn btn-outline-dark">
                  Day
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Week
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="table-responsive ">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">
                  <div className="">
                    <i className="fa-solid fa-chevron-right" />
                    <i className="fa-solid fa-chevron-left " />
                  </div>
                </th>
                <th scope="col">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action align-items-center d-flex "
                    aria-current="true"
                  >
                    <img
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="twbs"
                      width={34}
                      height={30}
                      className="rounded-circle  "
                    />
                    <h6 className="mb-0 ms-1">Katerina</h6>
                  </a>
                  <h6>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex "
                      aria-current="true"
                    ></a>
                  </h6>
                </th>
                <th scope="col">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action align-items-center d-flex "
                    aria-current="true"
                  >
                    <img
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="twbs"
                      width={34}
                      height={30}
                      className="rounded-circle  "
                    />
                    <h6 className="mb-0 ms-1">Rachel</h6>
                  </a>
                  <h6>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex "
                      aria-current="true"
                    ></a>
                  </h6>
                </th>
                <th scope="col">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-0"
                    aria-current="true"
                  >
                    <img
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="twbs"
                      width={34}
                      height={30}
                      className="rounded-circle  "
                    />
                    <h6 className="mb-0 text-start">Sophia</h6>
                  </a>
                  <h6>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-0"
                      aria-current="true"
                    ></a>
                  </h6>
                </th>
                <th scope="col">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-0"
                    aria-current="true"
                  >
                    <img
                      src="./img/person1.jpg"
                      alt="twbs"
                      width=""
                      height={25}
                      className="rounded-circle flex-shrink-0"
                    />
                    <h6 className="mb-0 text-start">Morgan</h6>
                  </a>
                  <h6>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-0"
                      aria-current="true"
                    ></a>
                  </h6>
                </th>
                <th scope="col">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-0"
                    aria-current="true"
                  >
                    <img
                      src="./img/person1.jpg"
                      alt="twbs"
                      width=""
                      height={25}
                      className="rounded-circle flex-shrink-0"
                    />
                    <h6 className="mb-0 text-start">Jackee</h6>
                  </a>
                  <h6>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-0"
                      aria-current="true"
                    ></a>
                  </h6>
                </th>
                <th scope="col">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-0"
                    aria-current="true"
                  >
                    <img
                      src="./img/person1.jpg"
                      alt="twbs"
                      width=""
                      height={25}
                      className="rounded-circle flex-shrink-0"
                    />
                    <h6 className="mb-0 text-start">Maya</h6>
                  </a>
                  <h6>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-0"
                      aria-current="true"
                    ></a>
                  </h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  01<sup>00</sup>
                </th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th scope="row">
                  02<sup>00</sup>
                </th>
                <td>Jacob</td>
                <td
                  className="p-1"
                  data-bs-toggle="modal"
                  data-bs-target="#CofirmOrder"
                >
                  <div
                    className="card rounded-0"
                    style={{
                      width: 180,
                      backgroundColor: "#f9f1ca",
                      borderLeft: "5px dashed green"
                    }}
                  >
                    <div className="m-2">
                      <div className="d-flex  justify-content-evenly ">
                        <h5 className="card-title mb-1 d-flex justify-content-between">
                          <span>09:00 - 10:00</span>
                        </h5>
                        <button
                          type="button"
                          className="btn btn-secondary rounded-circle px-2 py-1"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmedAppointment"
                        >
                          <i className="fa-sharp fa-regular fa-circle-euro" />
                        </button>
                      </div>
                      <div>
                        <a
                          href="#"
                          className=" text-black text-decoration-none"
                        >
                          Sophie
                        </a>
                        <p className=" text-black p-0 m-0">
                          Ladies - Wash, Haircut
                        </p>
                        <p className=" text-black p-0 m-0">Short Hair</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th scope="row">
                  03<sup>00</sup>
                </th>
                <td data-bs-toggle="modal" data-bs-target="#exampleModal5">
                  Jacob
                </td>
                <td
                  className="p-1"
                  data-bs-toggle="modal"
                  data-bs-target="#CofirmOrder"
                >
                  <div
                    className="card rounded-0"
                    style={{
                      width: 180,
                      backgroundColor: "#f9f1ca",
                      borderLeft: "5px dashed green"
                    }}
                  >
                    <div className="m-2">
                      <div className="d-flex  justify-content-evenly ">
                        <h5 className="card-title mb-1 d-flex justify-content-between">
                          <span>09:00 - 10:00</span>
                        </h5>
                        <button
                          type="button"
                          className="btn btn-secondary rounded-circle px-2 py-1"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmedAppointment"
                        >
                          <i className="fa-sharp fa-regular fa-circle-euro" />
                        </button>
                      </div>
                      <div>
                        <a
                          href="#"
                          className=" text-black text-decoration-none"
                        >
                          Sophie
                        </a>
                        <p className=" text-black p-0 m-0">
                          Ladies - Wash, Haircut
                        </p>
                        <p className=" text-black p-0 m-0">Short Hair</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td data-bs-toggle="modal" data-bs-target="#exampleModal4">
                  Appointment{" "}
                </td>
                <td data-bs-toggle="modal" data-bs-target="#exampleModal7">
                  Block
                </td>
                <td data-bs-toggle="modal" data-bs-target="#exampleModal8">
                  Mark
                </td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">
                  04<sup>00</sup>
                </th>
                <td>Jacob</td>
                <td>@faty</td>
                <td>@mdo </td>
                <td
                  className="p-1"
                  data-bs-toggle="modal"
                  data-bs-target="#CofirmOrder"
                >
                  <div
                    className="card rounded-0"
                    style={{
                      width: 180,
                      backgroundColor: "#f9f1ca",
                      borderLeft: "5px dashed green"
                    }}
                  >
                    <div className="m-2">
                      <div className="d-flex  justify-content-evenly ">
                        <h5 className="card-title mb-1 d-flex justify-content-between">
                          <span>09:00 - 10:00</span>
                        </h5>
                        <button
                          type="button"
                          className="btn btn-secondary rounded-circle px-2 py-1"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmedAppointment"
                        >
                          <i
                            className="fa-sharp fa-regular fa-circle-euro"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal1"
                          />
                        </button>
                      </div>
                      <div>
                        <a
                          href="#"
                          className=" text-black text-decoration-none"
                        >
                          Sophie
                        </a>
                        <p className=" text-black p-0 m-0">
                          Ladies - Wash, Haircut
                        </p>
                        <p className=" text-black p-0 m-0">Short Hair</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>Mark</td>
                <td>Otto</td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th scope="row">
                  05<sup>00</sup>
                </th>
                <td>Jacob</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Ottoh</td>
                <td className="p-1">
                  {/* <div class="card rounded-0" style="width: 12rem; background-color: 
                          #cdd8c6; border-left: 8px dashed green;">
                                      <div class="card-body mb-2 pt-1 px-2">
                                          <h5 class="card-title mb-1 d-flex justify-content-between">
                                              <span>09:00 - 10:00</span>
                                              <button type="button"
                                                  class="btn btn-secondary rounded-circle px-2 py-1"
                                                  data-bs-toggle="popover" data-bs-title="Appointment Complete"
                                                  data-bs-content="And here's some amazing content. It's very engaging. Right?">
                                                  <i class="fa-sharp fa-regular fa-circle-euro"></i>
                                              </button>
                                          </h5>
                                          <a href="#" class="card-link text-black text-decoration-none">Sophie</a>
                                          <h6 class="card-subtitle my-1 text-body-secondary">Ladies -
                                              Wash,
                                              Haircut</h6>
                                          <h6 class="card-subtitle text-body-secondary">Short Hair</h6>
                                      </div>
                                  </div> */}
                </td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th scope="row">
                  06<sup>00</sup>
                </th>
                <td>Jacob</td>
                <td className="p-1"></td>
                <td>@fat</td>
                <td>@mdo</td>
                <td
                  className="p-1"
                  data-bs-toggle="modal"
                  data-bs-target="#CofirmOrder"
                >
                  <div
                    className="card rounded-0"
                    style={{
                      width: 180,
                      backgroundColor: "#f9f1ca",
                      borderLeft: "5px dashed green"
                    }}
                  >
                    <div className="m-2">
                      <div className="d-flex  justify-content-evenly ">
                        <h5 className="card-title mb-1 d-flex justify-content-between">
                          <span>09:00 - 10:00</span>
                        </h5>
                        <button
                          type="button"
                          className="btn btn-secondary rounded-circle px-2 py-1"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmedAppointment"
                        >
                          <i className="fa-sharp fa-regular fa-circle-euro" />
                        </button>
                      </div>
                      <div>
                        <a
                          href="#"
                          className=" text-black text-decoration-none"
                        >
                          Sophie
                        </a>
                        <p className=" text-black p-0 m-0">
                          Ladies - Wash, Haircut
                        </p>
                        <p className=" text-black p-0 m-0">Short Hair</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>Mark</td>
                {/* <td>Otto</td> */}
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th scope="row">
                  07<sup>00</sup>
                </th>
                <td>Jacob</td>
                <td>@fat</td>
                <td
                  className="p-1"
                  data-bs-toggle="modal"
                  data-bs-target="#CofirmOrder"
                >
                  <div
                    className="card rounded-0"
                    style={{
                      width: 180,
                      backgroundColor: "#f9f1ca",
                      borderLeft: "5px dashed green"
                    }}
                  >
                    <div className="m-2">
                      <div className="d-flex  justify-content-evenly ">
                        <h5 className="card-title mb-1 d-flex justify-content-between">
                          <span>09:00 - 10:00</span>
                        </h5>
                        <button
                          type="button"
                          className="btn btn-secondary rounded-circle px-2 py-1"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmedAppointment"
                        >
                          <i className="fa-sharp fa-regular fa-circle-euro" />
                        </button>
                      </div>
                      <div>
                        <a
                          href="#"
                          className=" text-black text-decoration-none"
                        >
                          Sophie
                        </a>
                        <p className=" text-black p-0 m-0">
                          Ladies - Wash, Haircut
                        </p>
                        <p className=" text-black p-0 m-0">Short Hair</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th scope="row">
                  08<sup>00</sup>
                </th>
                <td>Jacob</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td
                  className="p-1"
                  data-bs-toggle="modal"
                  data-bs-target="#CofirmOrder"
                >
                  <div
                    className="card rounded-0"
                    style={{
                      width: 180,
                      backgroundColor: "#f9f1ca",
                      borderLeft: "5px dashed green"
                    }}
                  >
                    <div className="m-2">
                      <div className="d-flex  justify-content-evenly ">
                        <h5 className="card-title mb-1 d-flex justify-content-between">
                          <span>09:00 - 10:00</span>
                        </h5>
                        <button
                          type="button"
                          className="btn btn-secondary rounded-circle px-2 py-1"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmedAppointment"
                        >
                          <i className="fa-sharp fa-regular fa-circle-euro" />
                        </button>
                      </div>
                      <div>
                        <a
                          href="#"
                          className=" text-black text-decoration-none"
                        >
                          Sophie
                        </a>
                        <p className=" text-black p-0 m-0">
                          Ladies - Wash, Haircut
                        </p>
                        <p className=" text-black p-0 m-0">Short Hair</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>Mark</td>
                <td>Otto</td>
                {/* <td>@mdo</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>

<div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade"
    id="exampleModal5"
    tabIndex="-1"
  >
    <div className="modal-dialog modal-lg ">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            R O K A S M O C I U S O N 2 FEB
          </h1>
          <br />
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="container-fluid">
            <div className="row shadow">
              <h6 className="text-success py-2 ">
                RETURNIING{' '}
              </h6>
              <div className="col-md-3 col-sm-3 mb-2">
                <label htmlFor="">
                  {' '}
                  <b>
                    ROKAS MOCIUS ON 2 FEB{' '}
                  </b>
                </label>
              </div>
              <div className="col-md-3 col-sm-3">
                <label
                  className="text-secondary "
                  htmlFor=""
                >
                  <i className="fa-solid fa-phone" />
                  +2342345235423
                </label>
              </div>
              <div className="col-md-3 col-sm-3">
                <label
                  className="text-secondary "
                  htmlFor=""
                >
                  <i className="fa-regular fa-envelope" />
                  admin@gmail.com
                </label>
              </div>
              <div className="col-lg-1  col-md-1 col-sm-1 col-1">
                <button className="btn btn-light ">
                  <i className="fa-solid fa-user" />
                </button>
              </div>
              <div className="col-lg-1  col-md-1 col-sm-1 col-1">
                <button className="btn btn-light ">
                  <i className="fa-solid fa-pencil" />
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-between mt-3 shadow">
                <div className="left-side">
                  <p className="mt-2 text-secondary mx-1">
                    Covid -19 from
                    <label
                      className="rounded-4 pe-3 text-light"
                      style={{
                        backgroundColor: 'rgb(75, 74, 74)'
                      }}
                    >
                      SENT TO CLINT{' '}
                    </label>
                  </p>
                </div>
                <div className="right-side">
                  <label
                    className="mt-2"
                    htmlFor=""
                    style={{
                      color: 'rgb(12, 16, 226)',
                      fontWeight: '600'
                    }}
                  >
                    Complete From{' '}
                    <i className="fa-solid fa-chevron-right" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <div className="row">
              <label
                className="text-success"
                htmlFor=""
              >
                CONFIRMED
              </label>
              <select
                aria-label=".form-select-sm example"
                className="form-select form-select-sm border-top-0"
              >
                <option selected>
                  Paprastas Kirpimas/ Haircut (50 min)
                </option>
                <option value="1">
                  One
                </option>
                <option value="2">
                  Two
                </option>
                <option value="3">
                  Three
                </option>
              </select>
            </div>
          </div>
          <div
            className="container shadow-sm my-4 border-0 py-3"
            style={{
              backgroundColor: '#fff'
            }}
          >
            <div className="row row-cols-1">
              <div className="col mb-1">
                <div className="row">
                  <div className="col-md-4">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                        style={{
                          fontSize: '.850em'
                        }}
                      >
                        Date
                      </small>
                      <div className="input-group">
                        <input
                          className="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                          id="exampleFormControlInput1"
                          placeholder="2024-02-02"
                          type="datetime-local"
                        />
                        <span className="input-group-text rounded-0 border-top-0 border-start-0 border-end-0 border-dark bg-transparent">
                          $
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3">
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary mt-4"
                      >
                        <option selected>
                          12:10
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Duration
                      </small>
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                      >
                        <option selected>
                          50 min
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                        style={{
                          fontSize: '.850em'
                        }}
                      >
                        Team Member
                      </small>
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                      >
                        <option selected>
                          Diego(Requested)
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="mb-3">
                <label
                  className="form-label mx-1"
                  htmlFor="exampleFormControlTextarea1"
                >
                  Ends on 13:00
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{
                    backgroundColor: '#f3ecc7'
                  }}
                />
                <label
                  className="form-label mx-1"
                  htmlFor="exampleFormControlTextarea1"
                >
                  Booked on 30 jan via                                    Treatwell{' '}
                  <span
                    className="text-primary "
                    data-bs-target="#exampleModal6"
                    data-bs-toggle="modal"
                  >
                    (2% fee) Order ref#T1439971663
                  </span>
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row shadow ">
              <div className="d-flex  justify-content-between py-2 ">
                <div className="left-side">
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: '#084eaa',
                      fontWeight: '600'
                    }}
                    type="button"
                  >
                    <b>
                      {' '}Add a note
                    </b>
                  </button>
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: '#084eaa',
                      fontWeight: '600'
                    }}
                    type="button"
                  >
                    <b>
                      Reschedule{' '}
                    </b>
                  </button>
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: '#084eaa',
                      fontWeight: '600'
                    }}
                    type="button"
                  >
                    <b>
                      Cancel appointment
                    </b>
                    {' '}
                  </button>
                </div>
                <div className="right-side">
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: 'rgb(230, 121, 121)'
                    }}
                    type="button"
                  >
                    PREPAID                                        44,99E
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal-footer shadow-lg d-flex justify-content-between p-0 mb-2"
          style={{
            backgroundColor: '#fafafa'
          }}
        >
          <div className="m-0 mx-3">
            <a
              className="btn p-3 "
              data-bs-dismiss="modal"
              href="#"
              role="button"
              style={{
                border: '2px solid rgb(63, 63, 63)',
                fontWeight: '600'
              }}
            >
              {' '}
              <i className="fa-solid fa-plus" />
              {' '}Add Another Serviec{' '}
            </a>
            <a
              className="btn p-3  border-end rounded-0"
              data-bs-dismiss="modal"
              href="#"
              role="button"
              style={{
                border: '2px solid rgb(63, 63, 63)',
                fontWeight: '600'
              }}
            >
              Rebook
            </a>
          </div>
          <div className="m-0 mx-3">
            <a
              className="btn p-3 text-white rounded-0"
              data-bs-dismiss="modal"
              href="#"
              role="button"
              style={{
                backgroundColor: '#22a3a3',
                borderRadius: '0 0 7px 0'
              }}
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade modal-lg"
    id="exampleModal10"
    tabIndex="-1"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            Client Details
          </h1>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div
                  className="w-100"
                  style={{
                    border: '2px solid rgb(203, 202, 202)'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src="./img/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <h6 className="text-secondary">
                  Nojus perminas
                  <span
                    style={{
                      color: 'rgb(72, 72, 226)'
                    }}
                  >
                    Edit Details{' '}
                  </span>
                </h6>
                <label htmlFor=" ">
                  Customer Source
                  <span className="bg-success text-light">
                    <i>
                      trvatwell
                    </i>
                  </span>
                </label>
                <hr />
                <div className="d-flex justify-content-start">
                  <h6>
                    Phone
                  </h6>
                  <label
                    className="mx-4"
                    htmlFor=""
                  >
                    +35785555585
                  </label>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h6>
                    Email
                  </h6>
                  <label
                    htmlFor=""
                    style={{
                      fontSize: '12px'
                    }}
                  >
                    nojus.cheaptrade@gmail.com
                  </label>
                </div>
                <hr />
                <h6
                  style={{
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-check text-success mx-2" />
                  <i>
                    Agree to receive prootional communication
                  </i>
                </h6>
              </div>
              <div className="col-md-6 mt-4">
                <p
                  className="mb-5 mt-2"
                  style={{
                    backgroundColor: 'rgb(229, 251, 241)'
                  }}
                >
                  You won't pay any commission for repeat{' '}
                  <br />
                  Clint This applies to Booking via Treatwell ,{' '}
                  <br />
                  thw booking Widget or those added directly .{' '}
                  <br />
                  <label
                    className="mt-3 mb-2"
                    htmlFor=""
                  >
                    Want to Find out more about our Pricing ?
                    <a href="">
                      Learn more
                    </a>
                  </label>
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <nav>
                <div
                  className="nav nav-tabs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    aria-controls="nav-home"
                    aria-selected="true"
                    className="nav-link active"
                    data-bs-target="#nav-home"
                    data-bs-toggle="tab"
                    id="nav-home-tab"
                    role="tab"
                    type="button"
                  >
                    History{' '}
                    <span className="bg-secondary text-light">
                      15
                    </span>
                  </button>
                  <button
                    aria-controls="nav-profile"
                    aria-selected="false"
                    className="nav-link"
                    data-bs-target="#nav-profile"
                    data-bs-toggle="tab"
                    id="nav-profile-tab"
                    role="tab"
                    type="button"
                  >
                    Details
                  </button>
                </div>
              </nav>
              <div
                className="tab-content"
                id="nav-tabContent"
              >
                <div
                  aria-labelledby="nav-home-tab"
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container">
                    <div className="row">
                      <div className="table-responsive">
                        <table className="table">
                          <thead
                            style={{
                              whiteSpace: 'nowrap'
                            }}
                          >
                            <tr className="text-secondary">
                              <th
                                className="text-secondary"
                                scope="col"
                              >
                                Date
                              </th>
                              <th
                                className="text-secondary"
                                scope="col"
                              >
                                Service
                              </th>
                              <th
                                className="text-secondary"
                                scope="col"
                              >
                                Specialist
                              </th>
                              <th
                                className="text-secondary"
                                scope="col"
                              >
                                Source
                              </th>
                              <th
                                className="text-secondary"
                                scope="col"
                              >
                                Amount Paid
                              </th>
                              <th
                                className="text-secondary"
                                scope="col"
                              >
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              whiteSpace: 'nowrap'
                            }}
                          >
                            <tr>
                              <td>
                                <i className="fa-regular fa-clock mx-2" />
                                2024-02-02 11:20
                              </td>
                              <td>
                                Kripimas Pro Max/ Haircut Pro Max
                              </td>
                              <td>
                                David
                              </td>
                              <td>
                                <i className="bg-success text-light">
                                  treatwell Googel
                                </i>
                              </td>
                              <td>
                                <i className="text-light bg-success pe-3 text-center">
                                  paid
                                </i>
                              </td>
                              <td>
                                <i className="bg-success text-light">
                                  CONFIRMED
                                </i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-labelledby="nav-profile-tab"
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex justify-content-start">
                          <h6 className="mt-2">
                            <i className="fa-solid fa-venus-mars" />
                            {' '}Gender
                          </h6>
                          <label
                            className="text-secondary mt-2 mx-3"
                            htmlFor=""
                          >
                            Not Set
                          </label>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-start">
                          <h6 className="mt-2">
                            <i className="fa-solid fa-cake-candles" />
                            Birthday
                          </h6>
                          <label
                            className="text-secondary mt-2 mx-3"
                            htmlFor=""
                          >
                            Not Set
                          </label>
                        </div>
                        <hr />
                      </div>
                      <div className="col-md-6 mt-4">
                        <h6>
                          Notes
                        </h6>
                        <label
                          className="text-secondary"
                          htmlFor=""
                        >
                          No notes
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade modal-lg "
    id="exampleModal8"
    tabIndex="-1"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            {' '}N O J U S P E R M I N A S O N 2 F E B{' '}
          </h1>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mb-3 mt-2">
                <h6 className="text-success ">
                  RETURNIING
                </h6>
                <div className="d-flex justify-content-start ">
                  <h6>
                    Nojus Preminas{' '}
                  </h6>
                  <label
                    className="mx-3"
                    htmlFor=""
                  >
                    <i className="fa-solid fa-phone text-secondary " />
                    +255454998748
                  </label>
                </div>
                <label
                  className="text-secondary "
                  htmlFor=""
                  style={{
                    fontSize: '13px'
                  }}
                >
                  Booked.Nojus perminas
                </label>
                <label htmlFor="">
                  <i className="fa-solid fa-envelope" />
                  {' '}nojus.perminas@icloud.com
                </label>
              </div>
              <div className="col-md-4  mb-3 mt-2">
                <button className="btn btn-light float-end mx-2 ">
                  <i className="fa-solid fa-pencil" />
                </button>
                <button
                  className="btn btn-light float-end mx-2"
                  data-bs-target="#exampleModal10"
                  data-bs-toggle="modal"
                >
                  <i className="fa-solid fa-pencil">
                    {' '}
                  </i>
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-between mt-3 shadow">
                <div className="left-side">
                  <p className="mt-2 text-secondary mx-1">
                    Covid -19 from
                    <label
                      className="rounded-4 pe-3 text-light"
                      style={{
                        backgroundColor: 'rgb(75, 74, 74)'
                      }}
                    >
                      SENT TO CLINT{' '}
                    </label>
                  </p>
                </div>
                <div className="right-side">
                  <label
                    className="mt-2"
                    htmlFor=""
                    style={{
                      color: 'rgb(12, 16, 226)',
                      fontWeight: '600'
                    }}
                  >
                    Complete From{' '}
                    <i className="fa-solid fa-chevron-right" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <div className="row">
              <label
                className="text-success mt-3 mb-3"
                htmlFor=""
              >
                CONFIRMED
              </label>
              <select
                aria-label=".form-select-sm example"
                className="form-select form-select-sm border-top-0"
              >
                <option selected>
                  Paprastas Kirpimas/ Haircut (50 min)
                </option>
                <option value="1">
                  One
                </option>
                <option value="2">
                  Two
                </option>
                <option value="3">
                  Three
                </option>
              </select>
            </div>
          </div>
          <div
            className="container shadow-sm my-4 border-0 py-3"
            style={{
              backgroundColor: '#fff'
            }}
          >
            <div className="row row-cols-1">
              <div className="col mb-1">
                <div className="row">
                  <div className="col-md-4">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                        style={{
                          fontSize: '.850em'
                        }}
                      >
                        Date
                      </small>
                      <div className="input-group">
                        <input
                          className="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                          id="exampleFormControlInput1"
                          placeholder=""
                          type="datetime-local"
                        />
                        <span className="input-group-text rounded-0 border-top-0 border-start-0 border-end-0 border-dark bg-transparent">
                          $
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3">
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary mt-4"
                      >
                        <option selected>
                          11:00
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Duration
                      </small>
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                      >
                        <option selected>
                          50 min
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                        style={{
                          fontSize: '.850em'
                        }}
                      >
                        Team Member
                      </small>
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                      >
                        <option selected>
                          David
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="mb-3">
                <label
                  className="form-label mx-1"
                  htmlFor="exampleFormControlTextarea1"
                >
                  ends on 13:50
                </label>
                <label
                  className="form-label mx-1"
                  htmlFor="exampleFormControlTextarea1"
                >
                  Booked on 30 Jan via                                    Treatwell
                  <span className="text-primary ">
                    (0% fee) Order ref#G1443093798
                  </span>
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row shadow ">
              <div className="d-flex  justify-content-between py-2 ">
                <div className="left-side">
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: '#084eaa',
                      fontWeight: '600'
                    }}
                    type="button"
                  >
                    <b>
                      {' '}Add a note
                    </b>
                  </button>
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: '#084eaa',
                      fontWeight: '600'
                    }}
                    type="button"
                  >
                    <b>
                      Reschedule{' '}
                    </b>
                  </button>
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: '#084eaa',
                      fontWeight: '600'
                    }}
                    type="button"
                  >
                    <b>
                      Cancel appointment
                    </b>
                    {' '}
                  </button>
                </div>
                <div className="right-side">
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: 'rgb(230, 121, 121)'
                    }}
                    type="button"
                  >
                    Update                                        44,99E
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-footer shadow-lg d-flex justify-content-between p-0 mb-2"
            style={{
              backgroundColor: '#fafafa'
            }}
          >
            <div className="m-0 mx-3">
              <a
                className="btn p-3 "
                data-bs-dismiss="modal"
                href="#"
                role="button"
                style={{
                  border: '2px solid rgb(63, 63, 63)',
                  fontWeight: '600'
                }}
              >
                {' '}
                <i className="fa-solid fa-plus" />
                {' '}Add Another Serviec{' '}
              </a>
              <a
                className="btn p-3  border-end rounded-0"
                data-bs-dismiss="modal"
                href="#"
                role="button"
                style={{
                  border: '2px solid rgb(63, 63, 63)',
                  fontWeight: '600'
                }}
              >
                Rebook
              </a>
            </div>
            <div className="m-0 mx-3">
              <a
                className="btn p-3 text-white rounded-0"
                data-bs-dismiss="modal"
                href="#"
                role="button"
                style={{
                  backgroundColor: '#22a3a3',
                  borderRadius: '0 0 7px 0'
                }}
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade modal-lg "
    id="exampleModal"
    tabIndex="-1"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            {' '}N O J U S P E R M I N A S O N 2 F E B{' '}
          </h1>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mb-3 mt-2">
                <h6 className="text-success ">
                  RETURNIING
                </h6>
                <div className="d-flex justify-content-start ">
                  <h6>
                    Nojus Preminas{' '}
                  </h6>
                  <label
                    className="mx-3"
                    htmlFor=""
                  >
                    {' '}
                    <i className="fa-solid fa-phone text-secondary " />
                    +255454998748
                  </label>
                </div>
                <label
                  className="text-secondary "
                  htmlFor=""
                  style={{
                    fontSize: '13px'
                  }}
                >
                  {' '}Booked.Nojus                                    perminas
                </label>
                <label htmlFor="">
                  <i className="fa-solid fa-envelope" />
                  {' '}nojus.perminas@icloud.com
                </label>
              </div>
              <div className="col-md-4  mb-3 mt-2">
                <button className="btn btn-light float-end mx-2 ">
                  <i className="fa-solid fa-pencil" />
                </button>
                <button className="btn btn-light float-end mx-2">
                  <i className="fa-solid fa-pencil" />
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-between mt-3 shadow">
                <div className="left-side">
                  <p className="mt-2 text-secondary mx-1">
                    Covid -19 from
                    <label
                      className="rounded-4 pe-3 text-light"
                      style={{
                        backgroundColor: 'rgb(75, 74, 74)'
                      }}
                    >
                      SENT TO CLINT{' '}
                    </label>
                  </p>
                </div>
                <div className="right-side">
                  <label
                    className="mt-2"
                    htmlFor=""
                    style={{
                      color: 'rgb(12, 16, 226)',
                      fontWeight: '600'
                    }}
                  >
                    Complete From{' '}
                    <i className="fa-solid fa-chevron-right" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <div className="row">
              <label
                className="text-success mt-3 mb-3"
                htmlFor=""
              >
                CONFIRMED
              </label>
              <select
                aria-label=".form-select-sm example"
                className="form-select form-select-sm border-top-0"
              >
                <option selected>
                  Paprastas Kirpimas/ Haircut (50 min)
                </option>
                <option value="1">
                  One
                </option>
                <option value="2">
                  Two
                </option>
                <option value="3">
                  Three
                </option>
              </select>
            </div>
          </div>
          <div
            className="container shadow-sm my-4 border-0 py-3"
            style={{
              backgroundColor: '#fff'
            }}
          >
            <div className="row row-cols-1">
              <div className="col mb-1">
                <div className="row">
                  <div className="col-md-4">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                        style={{
                          fontSize: '.850em'
                        }}
                      >
                        Date
                      </small>
                      <div className="input-group">
                        <input
                          className="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                          id="exampleFormControlInput1"
                          placeholder=""
                          type="datetime-local"
                        />
                        <span className="input-group-text rounded-0 border-top-0 border-start-0 border-end-0 border-dark bg-transparent">
                          $
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3">
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary mt-4"
                      >
                        <option selected>
                          11:00
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Duration
                      </small>
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                      >
                        <option selected>
                          50 min
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                        style={{
                          fontSize: '.850em'
                        }}
                      >
                        Team Member
                      </small>
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                      >
                        <option selected>
                          David
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="mb-3">
                <label
                  className="form-label mx-1"
                  htmlFor="exampleFormControlTextarea1"
                >
                  ends on 13:50
                </label>
                <label
                  className="form-label mx-1"
                  htmlFor="exampleFormControlTextarea1"
                >
                  Booked on 30 Jan via                                    Treatwell
                  <span className="text-primary ">
                    (0% fee) Order ref#G1443093798
                  </span>
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row shadow ">
              <div className="d-flex  justify-content-between py-2 ">
                <div className="left-side">
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: '#084eaa',
                      fontWeight: '600'
                    }}
                    type="button"
                  >
                    <b>
                      {' '}Add a note
                    </b>
                  </button>
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: '#084eaa',
                      fontWeight: '600'
                    }}
                    type="button"
                  >
                    <b>
                      Reschedule{' '}
                    </b>
                  </button>
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: '#084eaa',
                      fontWeight: '600'
                    }}
                    type="button"
                  >
                    <b>
                      Cancel appointment
                    </b>
                    {' '}
                  </button>
                </div>
                <div className="right-side">
                  <button
                    className="btn  btn-sm"
                    style={{
                      color: 'rgb(230, 121, 121)'
                    }}
                    type="button"
                  >
                    Update                                        44,99E
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-footer shadow-lg d-flex justify-content-between p-0 mb-2"
            style={{
              backgroundColor: '#fafafa'
            }}
          >
            <div className="m-0 mx-3">
              <a
                className="btn p-3 "
                data-bs-dismiss="modal"
                href="#"
                role="button"
                style={{
                  border: '2px solid rgb(63, 63, 63)',
                  fontWeight: '600'
                }}
              >
                {' '}
                <i className="fa-solid fa-plus" />
                {' '}Add Another Serviec{' '}
              </a>
              <a
                className="btn p-3  border-end rounded-0"
                data-bs-dismiss="modal"
                href="#"
                role="button"
                style={{
                  border: '2px solid rgb(63, 63, 63)',
                  fontWeight: '600'
                }}
              >
                Rebook
              </a>
            </div>
            <div className="m-0 mx-3">
              <a
                className="btn p-3 text-white rounded-0"
                data-bs-dismiss="modal"
                href="#"
                role="button"
                style={{
                  backgroundColor: '#22a3a3',
                  borderRadius: '0 0 7px 0'
                }}
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade modal-lg "
    id="exampleModal8"
    tabIndex="-1"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            Client Details
          </h1>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div
                  className="w-100   "
                  style={{
                    border: '2px solid rgb(203, 202, 202)'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid "
                    src="./img/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <h6 className="text-secondary ">
                  Vadim Truijov{' '}
                  <span
                    style={{
                      color: 'rgb(72, 72, 226)'
                    }}
                  >
                    Edit                                        Details{' '}
                  </span>
                </h6>
                <label htmlFor=" ">
                  Customer Source{' '}
                  <span className="bg-success  text-light">
                    <i>
                      trvatwell
                    </i>
                  </span>
                </label>
                <hr />
                <div className="d-flex justify-content-start ">
                  <h6>
                    Phone{' '}
                  </h6>
                  <label
                    className="mx-4"
                    htmlFor=""
                  >
                    +35785555585
                  </label>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h6>
                    Email{' '}
                  </h6>
                  <label
                    htmlFor=""
                    style={{
                      fontSize: '12px'
                    }}
                  >
                    vadim.cheaptrade@gmail.com
                  </label>
                </div>
                <hr />
                <h6
                  style={{
                    fontSize: '13px'
                  }}
                >
                  {' '}
                  <i className="fa-solid fa-xmark text-danger " />
                  {' '}
                  <i>
                    Do Not                                        Send Promotional email
                  </i>
                  {' '}
                </h6>
              </div>
              <div className="col-md-6 mt-4">
                <p
                  className="mb-5 mt-2"
                  style={{
                    backgroundColor: 'rgb(229, 251, 241)'
                  }}
                >
                  You won't pay any                                    commission for repeat{' '}
                  <br />
                  Clint This applies to Booking via Treatwell ,{' '}
                  <br />
                  {' '}thw booking Widget or those added                                    directly .
                  <br />
                  <label
                    className="mt-3 mb-2"
                    htmlFor=""
                  >
                    {' '}Want to Find out more about our Pricing ?{' '}
                    <a href="">
                      Learn more
                    </a>
                    {' '}
                  </label>
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <nav>
                <div
                  className="nav nav-tabs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    aria-controls="nav-home"
                    aria-selected="true"
                    className="nav-link active"
                    data-bs-target="#nav-home"
                    data-bs-toggle="tab"
                    id="nav-home-tab"
                    role="tab"
                    type="button"
                  >
                    History{' '}
                    <span className="bg-secondary text-light">
                      15
                    </span>
                  </button>
                  <button
                    aria-controls="nav-profile"
                    aria-selected="false"
                    className="nav-link"
                    data-bs-target="#nav-profile"
                    data-bs-toggle="tab"
                    id="nav-profile-tab"
                    role="tab"
                    type="button"
                  >
                    Details{' '}
                  </button>
                </div>
              </nav>
              <div
                className="tab-content"
                id="nav-tabContent"
              >
                <div
                  aria-labelledby="nav-home-tab"
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container">
                    <div className="row">
                      <div className="table-responsive ">
                        <table className="table">
                          <thead
                            style={{
                              whiteSpace: 'nowrap'
                            }}
                          >
                            <tr className="text-secondary ">
                              <th
                                className="text-secondary "
                                scope="col"
                              >
                                Date
                              </th>
                              <th
                                className="text-secondary "
                                scope="col"
                              >
                                Service{' '}
                              </th>
                              <th
                                className="text-secondary "
                                scope="col"
                              >
                                {' '}Specialist
                              </th>
                              <th
                                className="text-secondary "
                                scope="col"
                              >
                                {' '}Source{' '}
                              </th>
                              <th
                                className="text-secondary "
                                scope="col"
                              >
                                {' '}Amount Paid{' '}
                              </th>
                              <th
                                className="text-secondary "
                                scope="col"
                              >
                                {' '}Status
                              </th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              whiteSpace: 'nowrap'
                            }}
                          >
                            <tr>
                              <td>
                                {' '}
                                <i className="fa-regular fa-clock mx-2" />
                                2024-02-02                                                                11:20
                              </td>
                              <td>
                                Kripimas Pro Max/ Haircut Pro Max
                              </td>
                              <td>
                                David
                              </td>
                              <td>
                                {' '}
                                <i className="bg-success text-light">
                                  treatwell Googel
                                </i>
                              </td>
                              <td>
                                <i className="text-light bg-success pe-3 text-center ">
                                  {' '}paid
                                </i>
                              </td>
                              <td>
                                <i className="bg-success text-light">
                                  CONFIRMED
                                </i>
                                {' '}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-labelledby="nav-profile-tab"
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 ">
                        <div className="d-flex  justify-content-start ">
                          <h6 className="mt-2">
                            <i className="fa-solid fa-venus-mars" />
                            {' '}Gender
                          </h6>
                          <label
                            className="text-secondary mt-2 mx-3"
                            htmlFor=""
                          >
                            Not Set
                          </label>
                        </div>
                        <hr />
                        <div className="d-flex   justify-content-start ">
                          <h6 className="mt-2">
                            <i className="fa-solid fa-cake-candles" />
                            Birthday
                          </h6>
                          <label
                            className="text-secondary mt-2 mx-3"
                            htmlFor=""
                          >
                            Not Set
                          </label>
                        </div>
                        <hr />
                      </div>
                      <div className="col-md-6 mt-4">
                        <h6>
                          Notes
                        </h6>
                        <label
                          className="text-secondary "
                          htmlFor=""
                        >
                          No notes
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade"
    id="exampleModal7"
    tabIndex="-1"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header bg-success ">
          <h1
            className="modal-title fs-5 text-light bg-success  "
            id="exampleModalLabel"
          >
            Confirmed appointment
          </h1>
          <button
            aria-label="Close"
            className="btn-close text-light"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <h6 className="text-start text-success  ">
                RETURNING{' '}
              </h6>
              <h5>
                Vadim Truijov
              </h5>
              <label
                className="text-secondary "
                htmlFor=""
              >
                +35654654646
              </label>
              <hr />
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Date{' '}
                </h6>
              </div>
              <div className="col-md-10 col-sm-10 col-10">
                <label
                  className="mx-5"
                  htmlFor=""
                >
                  2024-02-02,11:50-13:00
                </label>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Duration{' '}
                </h6>
              </div>
              <div className="col-md-10  col-sm-10 col-10">
                <label
                  className="mx-5"
                  htmlFor=""
                >
                  1 h 10 min
                </label>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Service{' '}
                </h6>
              </div>
              <div className="col-md-10  col-sm-10 col-10">
                <label
                  className="mx-5"
                  htmlFor=""
                >
                  Kripimas Pro Max/Haircut Pro Max
                </label>
              </div>
              <div className="row bg-danger  text-light">
                <div className="col-md-2 col-sm-2  col-2 ">
                  <h6>
                    Payment{' '}
                  </h6>
                </div>
                <div className="col-md-10 col-sm-10 col-10">
                  <label
                    className="mx-5"
                    htmlFor=""
                  >
                    Unpaid 24,99e
                  </label>
                </div>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Free{' '}
                </h6>
              </div>
              <div className="col-md-10 col-sm-10 col-10">
                <label
                  className="mx-5"
                  htmlFor=""
                >
                  0%
                </label>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Source{' '}
                </h6>
              </div>
              <div className="col-md-10 col-sm-10 col-4 bg-success text-light ">
                <label
                  className="mx-5"
                  htmlFor=""
                >
                  trvatwell Google{' '}
                </label>
              </div>
              <div className="col-md-3 col-sm-3 col-3">
                <h6>
                  Booked on{' '}
                </h6>
              </div>
              <div className="col-md-9 col-sm-9 col-9">
                <label
                  className="mx-1"
                  htmlFor=""
                >
                  2024 February 1:22:37
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade"
    id="exampleModal6"
    tabIndex="-1"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            Order Details{' '}
          </h1>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h6>
                  Order ref#T1439971663
                </h6>
                <div className="d-flex  justify-content-between mt-2 ">
                  <label htmlFor="">
                    Date
                  </label>
                  <label htmlFor="">
                    2024-01-30
                  </label>
                </div>
                <div className="d-flex  justify-content-between mt-2">
                  <label htmlFor="">
                    {' '}Booked via
                  </label>
                  <label
                    className="mx-3"
                    htmlFor=""
                  >
                    Treatwell
                  </label>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <h6>
                  Rokas Mocius
                </h6>
                <label htmlFor="">
                  {' '}+54564564541
                </label>
                <label
                  className="mt-2"
                  htmlFor=""
                >
                  Admin@gmai.com
                </label>
              </div>
              <hr />
              <div className="d-flex  justify-content-between mt-2">
                <div>
                  <h6>
                    Paprastas Kirpimas/haircut
                  </h6>
                  <label className="text-secondary ">
                    50 minutes
                  </label>
                </div>
                <div className="mt-4">
                  <label htmlFor="">
                    24,99E
                  </label>
                </div>
              </div>
              <hr />
              <div className="d-flex  justify-content-between mt-2  ">
                <label htmlFor="">
                  Total Price
                </label>
                <label>
                  24,99e
                </label>
              </div>
              <hr />
              <div className="d-flex  justify-content-between ">
                <label
                  className="text-secondary "
                  htmlFor=""
                >
                  Prepaid amount
                </label>
                <label className="text-secondary ">
                  24,99e
                </label>
              </div>
              <hr />
              <div className="d-flex justify-content-between ">
                <h6>
                  Customer need to pay
                </h6>
                <h6>
                  0E
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade"
    id="exampleModal5"
    tabIndex="-1"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            Confirm Cancellation
          </h1>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="container mt-2">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="card border-0 "
                  style={{
                    backgroundColor: 'rgb(233, 238, 238)',
                    height: '70px'
                  }}
                >
                  <div className="card-body">
                    <h6 className="text-secondary text-center ">
                      Booking Source
                    </h6>
                    <h6
                      className="text-center "
                      style={{
                        fontWeight: '600'
                      }}
                    >
                      Direct
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="card border-0 "
                  style={{
                    backgroundColor: 'rgb(233, 238, 238)',
                    height: '70px'
                  }}
                >
                  <div className="card-body">
                    <h6 className="text-secondary text-center ">
                      Payment type
                    </h6>
                    <h6
                      className="text-center "
                      style={{
                        fontWeight: '600'
                      }}
                    >
                      Pay at Venue
                    </h6>
                  </div>
                </div>
              </div>
              <h5 className="mt-3">
                What Will happen Next
              </h5>
              <ul className="mx-4">
                <li>
                  Your Clint Will be notified Via email
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="modal-footer">
        </div>
        <div className="modal-footer d-flex justify-content-between ">
          <button
            className="btn btn-light "
            data-bs-dismiss="modal"
            type="button"
          >
            Close
          </button>
          <button
            className="btn btn-danger "
            type="button"
          >
            Cancel appointment
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade"
    id="exampleModal4"
    tabIndex="-1"
  >
    <div className="modal-dialog modal-lg ">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            GABRIEL ON 2 FEB
          </h1>
          <br />
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <ul
            className="nav nav-tabs  "
            id="myTab"
            role="tablist"
          >
            <li
              className="nav-item  "
              role="presentation"
            >
              <button
                aria-controls="home"
                aria-selected="true"
                className="nav-link active  p-2 "
                data-bs-target="#home"
                data-bs-toggle="tab"
                id="home-tab"
                role="tab"
                type="button"
              >
                Appointment
              </button>
            </li>
            <li
              className="nav-item"
              role="presentation "
            >
              <button
                aria-controls="profile"
                aria-selected="false"
                className="nav-link  "
                data-bs-target="#profile"
                data-bs-toggle="tab"
                id="profile-tab"
                role="tab"
                style={{
                  width: '11vw'
                }}
                type="button"
              >
                block
              </button>
            </li>
          </ul>
          <div
            className="tab-content"
            id="myTabContent"
          >
            <div
              aria-labelledby="home-tab"
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
            >
              <div className="row gap-3 ">
                <h6>
                  Client
                </h6>
                <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                  <input
                    className="border-0 border-bottom "
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                  <input
                    className="border-0 border-bottom "
                    placeholder="Phone"
                    type="text"
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                  <input
                    className="border-0 border-bottom "
                    placeholder="Email"
                    type="text"
                  />
                </div>
                <div className="col-lg-1  col-md-1 col-sm-1 col-1">
                  <button className="btn btn-light ">
                    <i className="fa-solid fa-pencil" />
                  </button>
                </div>
              </div>
              <div className="container mt-2">
                <div className="row">
                  <select
                    aria-label=".form-select-sm example"
                    className="form-select form-select-sm border-top-0"
                  >
                    <option selected>
                      Paprastas Kirpimas/ Haircut (50 min)
                    </option>
                    <option value="1">
                      One
                    </option>
                    <option value="2">
                      Two
                    </option>
                    <option value="3">
                      Three
                    </option>
                  </select>
                </div>
              </div>
              <div
                className="container shadow-sm my-4 border-0 py-3"
                style={{
                  backgroundColor: '#fff'
                }}
              >
                <div className="row row-cols-1">
                  <div className="col mb-1">
                    <div className="row">
                      <div className="col-md-4">
                        <div>
                          <small
                            className="form-label"
                            htmlFor="exampleFormControlInput1"
                            style={{
                              fontSize: '.850em'
                            }}
                          >
                            Date
                          </small>
                          <div className="input-group">
                            <input
                              className="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                              id="exampleFormControlInput1"
                              placeholder=""
                              type="text"
                            />
                            <span className="input-group-text rounded-0 border-top-0 border-start-0 border-end-0 border-dark bg-transparent">
                              $
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <select
                            aria-label="Default select example"
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary mt-4"
                          >
                            <option selected>
                              11:00
                            </option>
                            <option value="1">
                              aaaa
                            </option>
                            <option value="2">
                              Create new discount
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <small
                            className="form-label"
                            htmlFor="exampleFormControlInput1"
                          >
                            Duration
                          </small>
                          <select
                            aria-label="Default select example"
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                          >
                            <option selected>
                              50 min
                            </option>
                            <option value="1">
                              aaaa
                            </option>
                            <option value="2">
                              Create new discount
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div>
                          <small
                            className="form-label"
                            htmlFor="exampleFormControlInput1"
                            style={{
                              fontSize: '.850em'
                            }}
                          >
                            Team Member
                          </small>
                          <select
                            aria-label="Default select example"
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                          >
                            <option selected>
                              David
                            </option>
                            <option value="1">
                              aaaa
                            </option>
                            <option value="2">
                              Create new discount
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="row shadow ">
                  <div className="d-flex  justify-content-between py-2 ">
                    <div className="left-side">
                      <button
                        className="btn  btn-sm"
                        style={{
                          color: '#084eaa',
                          fontWeight: '600'
                        }}
                        type="button"
                      >
                        Add a note
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer shadow-lg d-flex justify-content-between p-0 mb-2"
              style={{
                backgroundColor: '#fafafa'
              }}
            >
              <div className="m-0 mx-3">
                <a
                  className="btn p-3 "
                  data-bs-dismiss="modal"
                  href="#"
                  role="button"
                  style={{
                    border: '2px solid rgb(63, 63, 63)',
                    fontWeight: '600'
                  }}
                >
                  {' '}
                  <i className=" fa-solid                            fa-plus" />
                  {' '}Add Another Serviec{' '}
                </a>
                <a
                  className="btn p-3 "
                  data-bs-dismiss="modal"
                  href="#"
                  role="button"
                  style={{
                    border: '2px solid rgb(63, 63, 63)',
                    fontWeight: '600'
                  }}
                >
                  <i className="fa-solid fa-repeat" />
                  {' '}Repeat
                </a>
              </div>
              <div className="m-0 mx-3">
                <a
                  className="btn p-3 text-white rounded-0"
                  data-bs-dismiss="modal"
                  href="#"
                  role="button"
                  style={{
                    backgroundColor: '#106421',
                    borderRadius: '0 0 7px 0'
                  }}
                >
                  Save
                </a>
              </div>
            </div>
          </div>
          <div
            aria-labelledby="profile-tab"
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade"
    id="exampleModal2"
    tabIndex="-1"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header shadow">
          <h5
            className="modal-title"
            id="exampleModalLabel"
          >
            Transaction detail
          </h5>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <table className="">
            <tbody>
              <tr>
                <th>
                  Transaction
                </th>
                <th />
                <th className="text-primary">
                  Walk-in Client
                </th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  Date
                </td>
                <td>
                    2024-02-02 10:45
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  Checked Out By
                </td>
                <td>
                    Karolina Lvasko
                </td>
                <td />
              </tr>
            </tbody>
          </table>
          <hr />
          <div>
            <h5>
              Paprastas Kirpimas/Haircut
            </h5>
            <span className="float-end">
              24,99
            </span>
            <p>
              50 min
            </p>
          </div>
          <hr />
          <div>
            <span>
              <b>
                Total Price
              </b>
            </span>
            <span className="float-end">
              <b>
                2499
              </b>
            </span>
          </div>
          <hr />
          <span
            style={{
              color: 'rgb(56, 56, 97)'
            }}
          >
            <b>
              Refund
            </b>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade"
    id="exampleModal1"
    tabIndex="-1"
  >
    <div className="modal-dialog modal-lg ">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            M A T H I E U B E R N A R D I +3242343284924 O N 2 FEB
          </h1>
          <br />
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="container-fluid">
            <div className="row shadow">
              <h6 className="text-secondary ">
                client
              </h6>
              <div className="col-md-3 col-sm-3">
                <input
                  className="w-100"
                  placeholder="Mathieu Bernardi +8545646"
                  type="text"
                />
              </div>
              <div className="col-md-3 col-sm-3">
                <input
                  className="w-100"
                  placeholder="Phone"
                  type="number"
                />
              </div>
              <div className="col-md-3 col-sm-3">
                <input
                  className="w-100"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div
                className="col-md-1 col-sm-1"
                style={{
                  backgroundColor: '#d4d4d4'
                }}
              >
                <i className="fa-light fa-pen-to-square" />
              </div>
              <div
                className="mt-2 shadow py-2"
                style={{
                  backgroundColor: 'rgb(237, 245, 244)'
                }}
              >
                <span
                  style={{
                    fontSize: '12px'
                  }}
                >
                  <i
                    className="fa-regular fa-circle-info mx-1"
                    style={{
                      fontSize: '18px'
                    }}
                  />
                  Reduce change of on-show by adding clint details so we can                                    send a reminde
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-between mt-3 shadow">
                <div className="left-side">
                  <p className="mt-2 text-secondary mx-1">
                    Covid -19 from
                    <label
                      className="rounded-4 pe-3 text-light"
                      style={{
                        backgroundColor: 'red'
                      }}
                    >
                      CAN'T BE                                            SENT
                    </label>
                  </p>
                </div>
                <div className="right-side">
                  <label
                    className="mt-2"
                    htmlFor=""
                    style={{
                      color: 'rgb(12, 16, 226)',
                      fontWeight: '600'
                    }}
                  >
                    Complete From{' '}
                    <i className="fa-solid fa-chevron-right" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <div className="row">
              <label
                className="text-success"
                htmlFor=""
              >
                CONFIRMED
              </label>
              <p>
                Paprastas Kirpimas/Haircut
              </p>
            </div>
          </div>
          <div
            className="container shadow-sm my-4 border-0 py-3"
            style={{
              backgroundColor: '#fff'
            }}
          >
            <div className="row row-cols-1">
              <div className="col mb-1">
                <div className="row">
                  <div className="col-md-4">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                        style={{
                          fontSize: '.850em'
                        }}
                      >
                        Date
                      </small>
                      <div className="input-group">
                        <input
                          className="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                          id="exampleFormControlInput1"
                          placeholder=""
                          type="text"
                        />
                        <span className="input-group-text rounded-0 border-top-0 border-start-0 border-end-0 border-dark bg-transparent">
                          $
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3">
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary mt-4"
                      >
                        <option selected>
                          11:00
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Duration
                      </small>
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                      >
                        <option selected>
                          50 min
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <small
                        className="form-label"
                        htmlFor="exampleFormControlInput1"
                        style={{
                          fontSize: '.850em'
                        }}
                      >
                        Team Member
                      </small>
                      <select
                        aria-label="Default select example"
                        className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                      >
                        <option selected>
                          David
                        </option>
                        <option value="1">
                          aaaa
                        </option>
                        <option value="2">
                          Create new discount
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="mb-3">
                <label
                  className="form-label mx-1"
                  htmlFor="exampleFormControlTextarea1"
                >
                  Ends on 11:50
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{
                    backgroundColor: '#f3ecc7'
                  }}
                />
                <label
                  className="form-label mx-1"
                  htmlFor="exampleFormControlTextarea1"
                >
                  Created on 31 Jan by                                    Villja{' '}
                  <span className="text-primary ">
                    (0% fee)
                  </span>
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div
            className="container py-2"
            style={{
              backgroundColor: '#d4d4d4'
            }}
          >
            <div className="row shadow mt-3 mb-3">
              <h4>
                TRANSACTIONS
              </h4>
              <div
                className="card mb-2  "
                data-bs-target="#exampleModal2"
                data-bs-toggle="modal"
                style={{
                  border: '1px solid #050505'
                }}
              >
                <div className="card-body">
                  <div className="d-flex  justify-content-between   ">
                    <div className="left-side">
                      <label className="text-success ">
                        2024-02-02 10:45:14
                      </label>
                    </div>
                    <div className="right-side">
                      <label className="text-secondary">
                        1 Service{' '}
                      </label>
                      <span className="mx-3">
                        <b>
                          24,99e
                        </b>
                        {' '}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal-footer shadow-lg d-flex justify-content-between p-0 mb-2"
          style={{
            backgroundColor: '#fafafa'
          }}
        >
          <div className="m-0 mx-3">
            <a
           
              className ="btn p-3"
              data-bs-dismiss="modal"
              href="#"
              role="button"
              style={{
                border: '2px solid rgb(63, 63, 63)',
                fontWeight: '600'
              }}
            >
              {' '}
              <i className=" fa-solid fa-plus" />
              {' '}Add Another Serviec{' '}
            </a>
            <a
              className="btn p-3  border-end rounded-0"
              data-bs-dismiss="modal"
              href="#"
              role="button"
              style={{
                border: '2px solid rgb(63, 63, 63)',
                fontWeight: '600'
              }}
            >
              Rebook
            </a>
          </div>
          <div className="m-0 mx-3">
            <a
              className="btn p-3 text-white rounded-0"
              data-bs-dismiss="modal"
              href="#"
              role="button"
              style={{
                backgroundColor: '#22a3a3',
                borderRadius: '0 0 7px 0'
              }}
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade"
    id="confirmedAppointment"
    tabIndex="-1"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header bg-success ">
          <h1
            className="modal-title fs-5 text-light bg-success  "
            id="exampleModalLabel"
          >
            Confirmed appointment
          </h1>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <h6 className="text-start  ">
                Gabriel{' '}
              </h6>
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Date{' '}
                </h6>
              </div>
              <div className="col-md-10 col-sm-10 col-10">
                <label
                  className="mx-4"
                  htmlFor=""
                >
                  2024-02-02,11:00-11:50
                </label>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Duration{' '}
                </h6>
              </div>
              <div className="col-md-10  col-sm-10 col-10">
                <label
                  className="mx-4"
                  htmlFor=""
                >
                  50 min
                </label>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Service{' '}
                </h6>
              </div>
              <div className="col-md-10  col-sm-10 col-10">
                <label
                  className="mx-4"
                  htmlFor=""
                >
                  Paprastas kripimas/Haircut
                </label>
              </div>
              <div className="col-md-2 col-sm-2  col-2">
                <h6>
                  payment{' '}
                </h6>
              </div>
              <div className="col-md-10 col-sm-10 col-10">
                <label
                  className="mx-4"
                  htmlFor=""
                >
                  Unpaid 24,99e
                </label>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Free{' '}
                </h6>
              </div>
              <div className="col-md-10 col-sm-10 col-10">
                <label
                  className="mx-4"
                  htmlFor=""
                >
                  0%
                </label>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Source{' '}
                </h6>
              </div>
              <div className="col-md-10 col-sm-10 col-10">
                <label
                  className="mx-4"
                  htmlFor=""
                >
                  Connect by Austeja{' '}
                </label>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <h6>
                  Booked on{' '}
                </h6>
              </div>
              <div className="col-md-10 col-sm-10 col-10">
                <label
                  className="mx-4"
                  htmlFor=""
                >
                  2024 January 25 12:49
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    className="modal fade"
    id="CofirmOrder"
    tabIndex="-1"
  >
    <div className="modal-dialog modal-lg ">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="exampleModalLabel"
          >
            V A D I M TRULJOY O N 2 FEB
          </h1>
          <br />
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div
          style={{
            height: '500px',
            overflowY: 'scroll'
          }}
        >
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row shadow">
                <h6 className="text-success py-2 ">
                  RETURNIING{' '}
                </h6>
                <div className="col-md-3 col-sm-3 mb-2">
                  <label htmlFor="">
                    {' '}
                    <b>
                      Vadim Truljov{' '}
                    </b>
                  </label>
                </div>
                <div className="col-md-3 col-sm-3">
                  <label
                    className="text-secondary "
                    htmlFor=""
                  >
                    <i className="fa-solid fa-phone" />
                    +2342345235423
                  </label>
                </div>
                <div className="col-md-3 col-sm-3">
                  <label
                    className="text-secondary "
                    htmlFor=""
                  >
                    <i className="fa-regular fa-envelope" />
                    admin@gmail.com
                  </label>
                </div>
                <div className="col-md-2 col-sm-1 mb-2 d-flex  justify-content-center ">
                  <div
                    className="pe-2 "
                    style={{
                      backgroundColor: '#d4d4d4'
                    }}
                  >
                    <i
                      className="fa-regular fa-user"
                      data-bs-target="#exampleModal8"
                      data-bs-toggle="modal"
                    />
                  </div>
                  <div
                    className="mx-2 pe-2"
                    style={{
                      backgroundColor: '#d4d4d4'
                    }}
                  >
                    <i className="fa-light fa-pen-to-square" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between mt-3 shadow">
                  <div className="left-side">
                    <p className="mt-2 text-secondary mx-1">
                      Covid -19 from
                      <label
                        className="rounded-4 pe-3 text-light"
                        style={{
                          backgroundColor: 'rgb(75, 74, 74)'
                        }}
                      >
                        SENT TO CLINT{' '}
                      </label>
                    </p>
                  </div>
                  <div className="right-side">
                  <Link to="/form">  <label
                      className="mt-2"
                      htmlFor=""
                      style={{
                        color: 'rgb(12, 16, 226)',
                        fontWeight: '600'
                      }} > Complete From
                      <i className="fa-solid fa-chevron-right" />
                    </label></Link> 
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-2">
              <div className="row">
                <label
                  className="text-success"
                  htmlFor=""
                >
                  CONFIRMED
                </label>
                <select
                  aria-label=".form-select-sm example"
                  className="form-select form-select-sm border-top-0"
                >
                  <option selected>
                    Paprastas Kirpimas/ Haircut (50 min)
                  </option>
                  <option value="1">
                    One
                  </option>
                  <option value="2">
                    Two
                  </option>
                  <option value="3">
                    Three
                  </option>
                </select>
              </div>
            </div>
            <div
              className="container shadow-sm my-4 border-0 py-3"
              style={{
                backgroundColor: '#fff'
              }}
            >
              <div className="row row-cols-1">
                <div className="col mb-1">
                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <small
                          className="form-label"
                          htmlFor="exampleFormControlInput1"
                          style={{
                            fontSize: '.850em'
                          }}
                        >
                          Date
                        </small>
                        <div className="input-group">
                          <input
                            className="form-control ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                            id="exampleFormControlInput1"
                            placeholder=""
                            type="datetime-local"
                          />
                          <span className="input-group-text rounded-0 border-top-0 border-start-0 border-end-0 border-dark bg-transparent">
                            $
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="mb-3">
                        <select
                          aria-label="Default select example"
                          className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary mt-4"
                        >
                          <option selected>
                            11:00
                          </option>
                          <option value="1">
                            aaaa
                          </option>
                          <option value="2">
                            Create new discount
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div>
                        <small
                          className="form-label"
                          htmlFor="exampleFormControlInput1"
                        >
                          Duration
                        </small>
                        <select
                          aria-label="Default select example"
                          className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                        >
                          <option selected>
                            50 min
                          </option>
                          <option value="1">
                            aaaa
                          </option>
                          <option value="2">
                            Create new discount
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div>
                        <small
                          className="form-label"
                          htmlFor="exampleFormControlInput1"
                          style={{
                            fontSize: '.850em'
                          }}
                        >
                          Team Member
                        </small>
                        <select
                          aria-label="Default select example"
                          className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-secondary"
                        >
                          <option selected>
                            David
                          </option>
                          <option value="1">
                            aaaa
                          </option>
                          <option value="2">
                            Create new discount
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="mb-3">
                  <label
                    className="form-label mx-1"
                    htmlFor="exampleFormControlTextarea1"
                  >
                    Ends on                                        13:00
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    style={{
                      backgroundColor: '#f3ecc7'
                    }}
                  />
                  <label
                    className="form-label mx-1"
                    htmlFor="exampleFormControlTextarea1"
                  >
                    Booked on 01 Feb                                        via Googel{' '}
                    <span className="text-primary ">
                      (0% fee) Order                                            ref#G1443093798
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="container">
              <div className="row shadow ">
                <div className="d-flex  justify-content-between py-2 ">
                  <div className="left-side">
                    <button
                      className="btn  btn-sm"
                      style={{
                        color: '#084eaa',
                        fontWeight: '600'
                      }}
                      type="button"
                    >
                      <b>
                        {' '}Add a note
                      </b>
                    </button>
                    <button
                      className="btn  btn-sm"
                      style={{
                        color: '#084eaa',
                        fontWeight: '600'
                      }}
                      type="button"
                    >
                      <b>
                        Reschedule{' '}
                      </b>
                    </button>
                    <button
                      className="btn  btn-sm"
                      data-bs-target="#exampleModal5"
                      data-bs-toggle="modal"
                      style={{
                        color: '#084eaa',
                        fontWeight: '600'
                      }}
                      type="button"
                    >
                      <b>
                        Cancel                                                appointment
                      </b>
                      {' '}
                    </button>
                  </div>
                  <div className="right-side">
                    <button
                      className="btn  btn-sm"
                      style={{
                        color: 'rgb(230, 121, 121)'
                      }}
                      type="button"
                    >
                      Update 44,99E
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer shadow-lg d-flex justify-content-between p-0 mb-2"
              style={{
                backgroundColor: '#fafafa'
              }}
            >
              <div className="m-0 mx-3">
                <a
                  className="btn p-3 "
                  data-bs-dismiss="modal"
                  href="#"
                  role="button"
                  style={{
                    border: '2px solid rgb(63, 63, 63)',
                    fontWeight: '600'
                  }}
                >
                  {' '}
                  <i className="fa-solid fa-plus" />
                  {' '}Add Another Serviec{' '}
                </a>
                <a
                  className="btn p-3   rounded-0"
                  data-bs-dismiss="modal"
                  href="#"
                  role="button"
                  style={{
                    border: '2px solid rgb(63, 63, 63)',
                    fontWeight: '600'
                  }}
                >
                  Reebok
                </a>
              </div>
              <div className="m-0 mx-3">
                <a
                  className="btn p-3 text-white rounded-0"
                  data-bs-dismiss="modal"
                  href="#"
                  role="button"
                  style={{
                    backgroundColor: '#22a3a3',
                    borderRadius: '0 0 7px 0'
                  }}
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default Celender
