import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useDispatch , useSelector} from 'react-redux'
import { createTeam , deleteTeam , updateTeam} from '../../../features/teamDetailSlice'
import pic1 from '../../Assets/employee1.webp'
import { Link } from 'react-router-dom'
import { create } from '@mui/material/styles/createTransitions'
import { showTeam } from '../../../features/teamDetailSlice'
import { useNavigate ,useParams } from 'react-router-dom'
import CustomModal from './CustomModal'
const Employee = () => {
 
  const [_id, setId] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("+370 5 214 1572");

  React.useEffect(() => {
      if (_id) {
          const employee = Teams.find(ele => ele._id === _id);
          if (employee) {
              setPhoneNumber(employee.phone);
          }
      }
  }, [_id]);
  // const { _id } = useParams();
  const [updateData, setUpdateData] = React.useState({});
  
  const [radioData, setRadioData] = useState("");

  React.useEffect(() => {
    if (_id) {
      const singleTeam = Teams.find((ele) => ele._id === _id);
      setUpdateData(singleTeam || {});
    }
  }, [_id]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("updated data", updateData);
  
  const handleUpdate = (e , _id , updateData) => {
    e.preventDefault();
    dispatch(updateTeam(updateData));
    navigate("/employee");
  };


  const [showPopup, setShowPopup] = useState(false);

  const { Teams, loading, searchData } = useSelector((state) => state.app);
  console.log(Teams)
  const allteams = useSelector((state) => state.app.Teams);

  const singleTeam = allteams.filter((ele) => ele._id === _id);
  console.log("singleteam", singleTeam);

  const [employee , setEmployee] = React.useState({name:'' , phone:"" , email:"" , images:"" , services:""})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit =(event)=>{
    const {name , value} = event.target;
   setEmployee({...employee , [name]:value})
  }
  const FormSubmitValue =async(event)=>{
      event.preventDefault()
      const allFormData = {name: employee.name , phone: employee.phone , email:employee.email , images:employee.images , services:employee.services}
      console.log(allFormData)
      dispatch(createTeam(allFormData))
      navigate("/employee")
  }
  
  React.useEffect(() => {
    dispatch(showTeam());
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  const showToasterMassage=()=>{
    toast.success("successfully Added",{
      position:"top-center"
    })
  }


  return (
    <>
    {showPopup && (
      <CustomModal
        _id={_id}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    )}
    <main className="d-flex align-items-baseline flex-nowrap">
     <div className="d-flex flex-column w-auto flex-shrink-0 text-bg-light">
      <ul
        className="nav nav-pills flex-column mb-auto"
        style={{  paddingBottom: 124, backgroundColor: "#fff" }}>
        <li className="nav-item" >
          <Link to="/work_sedule" className="nav-link text-dark " aria-current="page">
            <i className="fa-light fa-chart-simple me-2" />
            <small style={{ fontWeight: 500, letterSpacing: "0.5px" }}>
              Rota
            </small>
          </Link>
        </li>
        <li className="nav-item" style={{ backgroundColor: "#f2f2f2" }}>
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
            {phoneNumber}
          </a>
        </li>
      </ul>
    </div>
    <div className="container-fluid my-2 py-2 shadow">

        {Teams?.map((ele)=>{
          // console.log(ele)
          return(
            <>
           
      <div className="row "data-bs-toggle="modal"
        data-bs-target="#exampleModal2"  onClick={() => setId(ele._id)}    >
        <div className="d-flex justify-content-between">
          <div className="col-md-1" style={{width:"100px" ,height:"100px"}}>
            <img src={ele?.images} alt="" style={{height:"100%" , width:"100%"}} />
          </div>
          <div className="col-md-7">
           <button className='p-0 m-0 border-0' > <p className="p-0 m-0 ms-2">{ele?.name}</p> </button>
            <p className="p-0 m-0 ms-2">{ele?.phone}</p>
            <span
              className="px-2 ms-2"
              style={{
                backgroundColor: "rgb(194, 191, 191)",
                borderRadius: 9,
                whiteSpace: "nowrap"
              }}
            >
              CALENDER VIEWING RIGHT
            </span>
            
            <span
              className="px-2 ms-2 "
              style={{
                backgroundColor: "rgb(28, 136, 91)",
                borderRadius: 9,
                color: "white"
              }}
            >
              YOU HAVE LOGIN
            </span>
          </div>
          <div className="col-md-4">
            <div className="float-end">
              <h6 style={{ color: "rgb(28, 136, 91)" }}>
                <i
                  className="fa-solid fa-circle"
                  style={{ color: "rgb(28, 136, 91)" }}
                />{" "}
               {ele?.services}
              </h6>
            </div>
          </div>
        </div>
        <hr />
      </div>
      </>
          )
        })}


      
    
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ backgroundColor: "rgb(31, 201, 201)", color: "white" }}
      >
        Employee
      </button>
      {/* Modal */}
      <form onSubmit={FormSubmitValue}>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg  modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Worker
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Main information
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Prices and services
                  </button>
                  <button
                    className="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <div className="col-md-2">
                      <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Images
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="name"
                                name='images'
                                value={employee.images}
                                onChange={handleSubmit}
                              />
                      </div>
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-1"></div>
                          <div className="">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="name"
                                name='name'
                                value={employee.name}
                                onChange={handleSubmit}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                e-Emailing address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="e-Emailing address"
                                name='email'
                                value={employee.email}
                                onChange={handleSubmit}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Phone
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="phone number"
                                name='phone'
                                value={employee.phone}
                                onChange={handleSubmit}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckIndeterminate"
                                name='services'
                                value={employee.services}
                                onChange={handleSubmit}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckIndeterminate"
                              >
                                Provided Services
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-12 "
                            style={{ backgroundColor: "bisque" }}
                          >
                            <p className="mt-1">
                              <span>
                                {" "}
                                <i
                                  className="fa-sharp fa-regular fa-circle-question fa-lg"
                                  style={{ color: "#a6934e" }}
                                />{" "}
                              </span>
                              If you intend to replace one of the old employees
                              with a new one, delete the profile of the former
                              employee from the system and add the new one.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4  ">
                    <div className="col-md-12 shadow ">
                      <h6>Employee Status</h6>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        For more detailed insights, you'll be able to filter sales
                        reports by hiring status.
                      </p>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          defaultValue="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Worker
                        </label>
                      </div>
                      <div className="form-check form-check-inline mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Renting a place
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 ">
                    <div className="col-md-12 shadow">
                      <h6>Connecting to Connect</h6>
                      <p className="p-0 m-0">Calendar viewing rights</p>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        <i
                          className="fa-regular fa-check"
                          style={{ color: "#74C0FC" }}
                        />{" "}
                        View personal calendar{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        rights Customer details{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Finances and accounts
                      </p>
                      <p className="p-0 m-0">Calendar management rights</p>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        <i
                          className="fa-regular fa-check"
                          style={{ color: "#74C0FC" }}
                        />{" "}
                        Manage personal calendar{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Customer data{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Finance and accounts
                      </p>
                      <p className="p-0 m-0">Administrator rights</p>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        <i
                          className="fa-regular fa-check"
                          style={{ color: "#74C0FC" }}
                        />{" "}
                        Manage personal calendar{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Customer data{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Finance and accounts
                      </p>
                      <p className="p-0 m-0">Owner's rights</p>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        <i
                          className="fa-regular fa-check"
                          style={{ color: "#74C0FC" }}
                        />{" "}
                        Manage personal calendar{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Customer data{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Finance and accounts
                      </p>
                      <p className="p-0 m-0">Non-standard</p>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        Adjust access rights for team members
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="row mt-4">
                    <div className="col-md-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{
                          border: "0ch",
                          borderBottom: "2px solid rgb(35, 35, 182)"
                        }}
                      >
                        <option selected="">Colour Specialist</option>
                        <option value={1} />
                        <option value={2} />
                        <option value={3} />
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12 shadow">
                      <h6>
                        What services can be booked for this employee online
                      </h6>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckChecked"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                          style={{ fontSize: "larger" }}
                        >
                          <b>All services</b>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          <b>Ladies Haircuts &amp; H Dressing </b>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies-Wash , Haircut &amp; Blow Dry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies- Dry Haircut
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies- Restyle Haircut &amp; Blow Dry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies - Wash Blow Dry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          <b>Ladies - Hair Colouring</b>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies - Permanent Colour with Haircut &amp; Blow Dry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies - Full Head Colour with Haircut &amp; Blow Dry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies - Balayage
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          <b>Mens - Haircuts &amp; Hair Dressing</b>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Men - Skin Fade
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Men - Wash , Haircut &amp; Stylish
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Men - Clipper Haircut
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div className="row mt-3">
                    <div
                      className="col-md-12 text-center"
                      style={{ backgroundColor: "rgb(143, 221, 221)" }}
                    >
                      <p className="mt-2">
                        {" "}
                        <span>
                          {" "}
                          <i
                            className="fa-sharp fa-regular fa-circle-question fa-lg "
                            style={{ color: "#a6934e" }}
                          />{" "}
                        </span>{" "}
                        Your client will see your profile online - so be sure to
                        make a good impression
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <p className="m-0 p-0">Job Title</p>
                      <p className="p-0 m-0 ">Creative Color Specialist </p>
                      <hr
                        className="m-0 p-0 "
                        style={{ border: "1px solid black" }}
                      />
                    </div>
                  </div>
                  <div className="row  p-3 mt-2">
                    <div
                      className="col-md-12 p-3"
                      style={{ border: "1px solid black" }}
                    >
                      <p>
                        {" "}
                        Shophie has over 15 year experience in the hair industry
                        attending training schools in both London and New York.
                        She specialises in creative colour and ombre techniques.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Rub
              </button>
              <button type="submit" className="btn btn-primary" >
                Save
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={showToasterMassage}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      </form>
      {/* modal3 */}


  
      
      <div
        className="modal fade"
        id='exampleModal2'
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form onSubmit={(e) => handleUpdate(e, _id, updateData)}>
        <div className="modal-dialog modal-lg  modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Worker Hritik
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Main information
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Prices and services
                  </button>
                  <button
                    className="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <div className="col-md-2">
                      <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Images
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="name images"
                                name='images'
                                value={updateData && updateData.images}
                                onChange={newData}
                              />
                      </div>
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-1"></div>
                          <div className="">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="name"
                                name='name'
                                value={updateData && updateData.name}
                                onChange={newData}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                e-Emailing address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="e-Emailing address"
                                name='email'
                                value={updateData && updateData.email}
                                onChange={newData}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Phone
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="phone number"
                                name='phone'
                                value={updateData && updateData.phone}
                                onChange={newData}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckIndeterminate"
                                name='services'
                                value={employee.services}
                                onChange={handleSubmit}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckIndeterminate"
                              >
                                Provided Services
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-12 "
                            style={{ backgroundColor: "bisque" }}
                          >
                            <p className="mt-1">
                              <span>
                                {" "}
                                <i
                                  className="fa-sharp fa-regular fa-circle-question fa-lg"
                                  style={{ color: "#a6934e" }}
                                />{" "}
                              </span>
                              If you intend to replace one of the old employees
                              with a new one, delete the profile of the former
                              employee from the system and add the new one.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4  ">
                    <div className="col-md-12 shadow ">
                      <h6>Employee Status</h6>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        For more detailed insights, you'll be able to filter sales
                        reports by hiring status.
                      </p>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          defaultValue="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Worker
                        </label>
                      </div>
                      <div className="form-check form-check-inline mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Renting a place
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 ">
                    <div className="col-md-12 shadow">
                      <h6>Connecting to Connect</h6>
                      <p className="p-0 m-0">Calendar viewing rights</p>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        <i
                          className="fa-regular fa-check"
                          style={{ color: "#74C0FC" }}
                        />{" "}
                        View personal calendar{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        rights Customer details{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Finances and accounts
                      </p>
                      <p className="p-0 m-0">Calendar management rights</p>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        <i
                          className="fa-regular fa-check"
                          style={{ color: "#74C0FC" }}
                        />{" "}
                        Manage personal calendar{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Customer data{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Finance and accounts
                      </p>
                      <p className="p-0 m-0">Administrator rights</p>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        <i
                          className="fa-regular fa-check"
                          style={{ color: "#74C0FC" }}
                        />{" "}
                        Manage personal calendar{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Customer data{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Finance and accounts
                      </p>
                      <p className="p-0 m-0">Owner's rights</p>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        <i
                          className="fa-regular fa-check"
                          style={{ color: "#74C0FC" }}
                        />{" "}
                        Manage personal calendar{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Customer data{" "}
                        <i
                          className="fa-light fa-xmark"
                          style={{ color: "#989da4" }}
                        />{" "}
                        Finance and accounts
                      </p>
                      <p className="p-0 m-0">Non-standard</p>
                      <p className="p-0 " style={{ fontSize: "small" }}>
                        Adjust access rights for team members
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="row mt-4">
                    <div className="col-md-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{
                          border: "0ch",
                          borderBottom: "2px solid rgb(35, 35, 182)"
                        }}
                      >
                        <option selected="">Colour Specialist</option>
                        <option value={1} />
                        <option value={2} />
                        <option value={3} />
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12 shadow">
                      <h6>
                        What services can be booked for this employee online
                      </h6>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckChecked"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                          style={{ fontSize: "larger" }}
                        >
                          <b>All services</b>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          <b>Ladies Haircuts &amp; H Dressing </b>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies-Wash , Haircut &amp; Blow Dry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies- Dry Haircut
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies- Restyle Haircut &amp; Blow Dry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies - Wash Blow Dry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          <b>Ladies - Hair Colouring</b>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies - Permanent Colour with Haircut &amp; Blow Dry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies - Full Head Colour with Haircut &amp; Blow Dry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Ladies - Balayage
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          <b>Mens - Haircuts &amp; Hair Dressing</b>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Men - Skin Fade
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Men - Wash , Haircut &amp; Stylish
                        </label>
                      </div>
                      <div className="form-check">
                        <input
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
                          Men - Clipper Haircut
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div className="row mt-3">
                    <div
                      className="col-md-12 text-center"
                      style={{ backgroundColor: "rgb(143, 221, 221)" }}
                    >
                      <p className="mt-2">
                        {" "}
                        <span>
                          {" "}
                          <i
                            className="fa-sharp fa-regular fa-circle-question fa-lg "
                            style={{ color: "#a6934e" }}
                          />{" "}
                        </span>{" "}
                        Your client will see your profile online - so be sure to
                        make a good impression
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <p className="m-0 p-0">Job Title</p>
                      <p className="p-0 m-0 ">Creative Color Specialist </p>
                      <hr
                        className="m-0 p-0 "
                        style={{ border: "1px solid black" }}
                      />
                    </div>
                  </div>
                  <div className="row  p-3 mt-2">
                    <div
                      className="col-md-12 p-3"
                      style={{ border: "1px solid black" }}
                    >
                      <p>
                        {" "}
                        Shophie has over 15 year experience in the hair industry
                        attending training schools in both London and New York.
                        She specialises in creative colour and ombre techniques.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
                onClick={() => dispatch(deleteTeam(Teams._id))}
              >
                Rub
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
        </form>
      </div>



      {/* Modal 2*/}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header "
              style={{ borderBottom: "1px solid black" }}
            >
              <h6 className="modal-title fs-5" id="exampleModalLabel">
                You have unsaved changes on this page
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p className="mt-3">
                if you leave this page all unsaved changes will be lost Are you
                sure want to leave this page{" "}
              </p>
            </div>
            <div
              className="modal-footer  "
              style={{ borderTop: "1px solid black" }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn "
                style={{ backgroundColor: "rgb(209, 147, 32)" }}
              >
                Leave Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <ToastContainer />
  </>
  )
}

export default Employee
