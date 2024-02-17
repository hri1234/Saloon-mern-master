import React from 'react'
import pic1 from '../../Assets/person1.jpg'
import { Link } from 'react-router-dom'
import { UseDispatch , useDispatch, useSelector } from 'react-redux'
import { TeamDetail , showTeam , updateTeam} from '../../../features/teamDetailSlice'
import teamDetailSlice from '../../../features/teamDetailSlice'
const WorkSedule = () => {
  const dispatch = useDispatch()
  const [_id, setId] = React.useState("");
  const { Teams, loading, searchData } = useSelector((state) => state.app);
  const {name}  = useSelector((state)=> state.app.name)
  const ALLTeamMember = useSelector((state) => state.app.Teams)
  console.log(Teams)
  React.useEffect(() => {
    dispatch(showTeam());
    
  }, []);

  const FilterDataId = ALLTeamMember.filter((ele)=> ele._id === _id)
  console.log("filterdataid" , FilterDataId)

  const DataFilterItems = ALLTeamMember.filter((ele)=> ele.name === name) 
  console.log("DataFilterItems" , DataFilterItems)
  // React.useEffect(() => {
  //   if (_id) {
  //     const singleTeam = Teams.find((ele) => ele._id === _id);
  //     setUpdateData(singleTeam || {});
  //   }
  // }, [_id]);

  // const newData = (e) => {
  //   setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  // };

  // const handleUpdate = (e , _id , updateData) => {
  //   e.preventDefault();
  //   dispatch(updateTeam(updateData));
  //   navigate("/work_sedule");
  // };


  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
<main className="d-flex align-items-baseline flex-nowrap">
  <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
  <ul
        className="nav nav-pills flex-column mb-auto"
        style={{ paddingBottom: 124, backgroundColor: "#fff" }}>
        <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
          <Link to="/work_sedule" className="nav-link text-dark " aria-current="page">
            <i className="fa-light fa-chart-simple me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Rota
            </small>
          </Link>
        </li>
        <li className="nav-item" >
          <Link
           to="/employee"
            className="nav-link text-dark"
            aria-current="page"
          >
            <i className="fa-light fa-gauge me-2"/>
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
             Team
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
  <div className="container-fluid my-2 py-2 shadow">
    <div className="row mt-3">
      <div className="col-md-12">
        <h4>Rota</h4>
      </div>
    </div>
    <div className="row mt-2">
      <div className="d-flex justify-content-between">
        <div className="col-md-2">
          <div className="input-group mb-3">
            <input
              type="date"
              className=" "
              placeholder="1/2/24"
              style={{
                border: "0cap",
                borderBottom: "2px solid rgb(35, 35, 182)"
              }}
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="input-group mb-3">
            <input
              type="date"
              className=""
              placeholder="1/2/24"
              style={{
                border: "0cap",
                borderBottom: "2px solid rgb(35, 35, 182)"
              }}
            />
          </div>
        </div>
        <div className="col-md-8 ">
          <div className="float-end">
            <i
              className="fa-light fa-angle-left fa-xl"
              style={{ color: "rgb(35, 35, 182)" }}
            />
            <i
              className="fa-light fa-angle-right fa-xl"
              style={{ color: "rgb(35, 35, 182)" }}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 ">
        <div className="table-responsive">
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div>
                    <img
                      src={FilterDataId[0]?.images}
                      style={{ width: 62, borderRadius: 100 }}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h5 className="p-3">
                   {FilterDataId[0]?.name}
                    <br />
                    <span className="fs-6 fw-normal">THUESDAY,JAN 30</span>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h5 className="p-0 m-0">Schedule type: Weekly</h5>
                  <p>
                    From:2023 November 14{" "}
                    <span className="border-bottom border-dark">
                      50.0 hrs / week
                    </span>
                  </p>
                  <li className="list-group-item pt-2 ">
                    <a style={{ textDecoration: "none", color: "black" }}>
                      <div
                        className="d-flex justify-content-between border-bottom pb-2"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        <span style={{ fontWeight: 600 }}>Edit</span>
                        <i className="fa-solid fa-chevron-right px-3" />
                      </div>
                    </a>
                  </li>
                  <li className="list-group-item  pt-3">
                    <div className="d-flex justify-content-between border-bottom py-1 pb-2 ">
                      <span style={{ fontWeight: 600 }}>Add time off</span>
                      <i className="fa-solid fa-chevron-right px-3" />
                    </div>
                  </li>
                  <li className="list-group-item pt-3">
                    <div
                      className="d-flex justify-content-between"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    >
                      <span style={{ fontWeight: 600 }}>Change Schedule</span>
                      <i className="fa-solid fa-chevron-right px-3" />
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header shadow-sm">
                  <h5 className="modal-title">Edit Shift</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-header">
                  <div className="d-flex">
                    <img
                      src={pic1}
                      style={{ width: 62, borderRadius: 100 }}
                      alt=""
                      className="img-fluid"
                    />
                    <h5 className="pt-3 p-2">Diego</h5>
                  </div>
                </div>
                <div className="modal-body">
                  <h5 className="">Tue 2024 January 30</h5>
                  <li className="list-group-item pt-2 ">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Use schedule default
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item pt-2 ">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Day off
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item pt-2 ">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Custom hours
                      </label>
                    </div>
                  </li>
                  <div className="col-md-12" style={{ textAlign: "center" }}>
                    <div className="row p-3">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <small
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            From
                          </small>
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">11:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <small
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            To
                          </small>
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">20:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer justify-content-between">
                  <button
                    type="button"
                    className="btn btn-light color-black"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary bg-success">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal3"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header shadow-sm">
                  <h5 className="modal-title">Change schedule</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h5 className="">Starting 2024 January 31:</h5>
                  <li className="list-group-item pt-2 ">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Switch to salon opening hours
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item pt-2 ">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Create a new schedule
                      </label>
                    </div>
                  </li>
                </div>
                <div className="modal-footer justify-content-between">
                  <button
                    type="button"
                    className="btn btn-light color-black"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary   bg-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal4"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal4"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header shadow-sm">
                  <h5 className="modal-title">New schedule</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h5 className="fw-normal p-0 m-0">START DATE</h5>
                  <h5 className="p-0 m-0">2024 January 31</h5>
                  <div className="col-md-12">
                    <div className="row p-3">
                      <div className="col-md-4 pt-2">
                        <div className="row ">
                          <div className="form-check">
                            <input
                              style={{ backgroundColor: "green" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckChecked"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Monday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">11:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">20:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 pt-2">
                        <div className="row ">
                          <div className="form-check">
                            <input
                              style={{ backgroundColor: "green" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefault"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Tuesday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <span className="border-bottom form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark">
                            off
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4 pt-2">
                        <div className="row ">
                          <div className="form-check">
                            <input
                              style={{ backgroundColor: "green" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckChecked"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              wednesday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">11:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">20:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 pt-2">
                        <div className="row ">
                          <div className="form-check">
                            <input
                              style={{ backgroundColor: "green" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckChecked"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Thursday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">11:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">20:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 pt-2">
                        <div className="row ">
                          <div className="form-check">
                            <input
                              style={{ backgroundColor: "green" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckChecked"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Friday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">11:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">20:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 pt-2">
                        <div className="row ">
                          <div className="form-check">
                            <input
                              style={{ backgroundColor: "green" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckChecked"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Saturday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">11:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <select
                            className="form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark"
                            aria-label="Default select example"
                          >
                            <option selected="">20:00</option>
                            <option value={1}>12:00</option>
                            <option value={2}>13:00</option>
                            <option value={3}>14:00</option>
                            <option value={4}>15:00</option>
                            <option value={5}>16:00</option>
                            <option value={6}>17:00</option>
                            <option value={7}>18:00</option>
                            <option value={8}>19:00</option>
                            <option value={9}>20:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 pt-2">
                        <div className="row ">
                          <div className="form-check">
                            <input
                              style={{ backgroundColor: "green" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefault"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Sunday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <span className="border-bottom form-select ps-0 rounded-0 border-top-0 border-start-0 border-end-0 border-dark">
                            off
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4 p-2">
                        <div className="row ">
                          <h6>Total:</h6>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <h6 className="pt-2">50.0 hrs / week</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer justify-content-between">
                  <button
                    type="button"
                    className="btn btn-light color-black"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary bg-success">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-light color-black"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary bg-success">
                Save
              </button>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal5"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div>
                    <img
                      src={pic1}
                      style={{ width: 62, borderRadius: 100 }}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h5 className="p-3">
                    Diego
                    <br />
                    <span className="fs-6 fw-normal">THUESDAY,JAN 30</span>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h5 className="p-0 m-0">Schedule type: Weekly</h5>
                  <p>
                    From:2023 November 14{" "}
                    <span className="border-bottom border-dark">
                      50.0 hrs / week
                    </span>
                  </p>
                  <li className="list-group-item pt-2 ">
                    <a style={{ textDecoration: "none", color: "black" }}>
                      <div
                        className="d-flex justify-content-between border-bottom pb-2"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        <span style={{ fontWeight: 600 }}>Edit</span>
                        <i className="fa-solid fa-chevron-right px-3" />
                      </div>
                    </a>
                  </li>
                  <li className="list-group-item pt-3">
                    <div
                      className="d-flex justify-content-between"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    >
                      <span style={{ fontWeight: 600 }}>Change Schedule</span>
                      <i className="fa-solid fa-chevron-right px-3" />
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="modal" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <table className="table  table-hover border">
            <thead className="table-secondary">
              <tr className="">
                <th scope="col"></th>
                <th scope="col">
                  monday <br />
                  01.01
                </th>
                <th scope="col">
                  tuesday <br />
                  02.01
                </th>
                <th scope="col">
                  wednesday <br />
                  03.01
                </th>
                <th scope="col">
                  thursday <br />
                  04.01
                </th>
                <th scope="col">
                  friday <br />
                  02.01
                </th>
                <th scope="col">
                  saturday <br />
                  01.01
                </th>
                <th scope="col">
                  sunday <br />
                  03.01
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/*Main   Modal */}
                {/*Main   Modal */}
                {/*Edit shift Modal  */}
                {/* change schedule Modal-  */}
                {/* change schedule Modal-  */}
                {/*New schedule Modal  */}
                {/*New schedule Modal  */}
                {/*ADD   Modal */}
                {/*ADD   Modal */}
                <td>Salon working hours</td>
                <td>10:00 - 20:00</td>
                <td>10:00 - 20:00</td>
                <td>10:00 - 20:00</td>
                <td>10:00 - 20:00</td>
                <td>10:00 - 20:00</td>
                <td>10:00 - 20:00</td>
                <td>10:00 - 20:00</td>
              </tr>
              {Teams?.map((ele)=>{
                return(
                  <>
              <tr>
                <td>
                  <a href="profile.html" style={{ textDecoration: "none" }}>
                    <img
                      src={ele.images}
                      style={{ width: 39 }}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    {"  "}
                    <span>{ele.name.length > 7 ? ele.name.slice(0,7)+"...": ele.name}</span>
                  </a>
                </td>
                <td>10:00 - 20:00</td>
                <td>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    type="button"
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    onClick={() => setId(ele._id)}
                  >
                    10:00 - 20:00
                  </a>
                </td>
                <td>10:00 - 20:00</td>
                <td>10:00 - 20:00</td>
                <td>10:00 - 20:00</td>
                <td>10:00 - 20:00</td>
                <td>10:00 - 20:00</td>
              </tr>
              </>
               )
              })}
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default WorkSedule
