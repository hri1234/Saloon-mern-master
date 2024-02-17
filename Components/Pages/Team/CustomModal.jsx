import React from "react"
import {useSelector , useDispatch } from "react-redux";
import { useNavigate , useParams} from "react-router-dom";
import { updateTeam } from "../../../features/teamDetailSlice";
import "./CustomModal.css"
const CustomModal =({  setShowPopup })=>{

    // const allteam = useSelector((state) => state.app.Teams);

    // const singleTeam = allteam.filter((ele) => ele._id === _id);
    // console.log("singleteam", singleTeam);
    const { _id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [updateData, setUpdateData] = React.useState();
  
    const { Teams, loading } = useSelector((state) => state.app);
  
    React.useEffect(() => {
      if (_id) {
        const singleTeam = Teams.filter((ele) => ele._id === _id);
        setUpdateData(singleTeam[0]);
      }
    }, []);
  
    const newData = (e) => {
      setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };
  
    console.log("updated data", updateData);
  
    const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(updateTeam(updateData));
      navigate("/read");
    };

    return(
        <>
        <form onSubmit={handleUpdate}>
 <div
        className="modal fade"
        id="exampleModal2"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
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
                                placeholder="name"
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
                                value={updateData && updateData.services}
                                onChange={newData}
                              
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
      </div>
      </form>

        </>
    )
}
export default CustomModal