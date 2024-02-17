import React from 'react'
import img1 from './img/bill.png';
import img2 from "./img/visa.png";
import img3 from "./img/exchange.png";
import img4 from "./img/credit-card.png";
import img5 from "./img/icons-03.png";
import img6 from "./img/cash up.jpeg";
import img7 from "./img/paypal.png";
import img8 from "./img/apple.png";
import img9 from "./img/icons-07.png";
import img10 from "./img/Gpay.png";
import img11 from "./img/add-card.png";
import img12 from "./img/visa.png";
import img13 from "./img/masteer.png";
import img14 from "./img/american-express.png";
import img15 from "./img/search.png";

const Billing = () => {
  return (
   <>
       <>
  <div className="container">
    <div className="row">
      <div className="col-sm-4 col-md-4 my-3">
        <h3 className="d-inline">
          <img
            src={img1}
            alt="image"
            className="salesicon"
            style={{ width: "3vw" }}
          />
          Billing
        </h3>
      </div>
    </div>
    <div className="container c1 my-3 py-2">
      <h5>Add Payment Method</h5>
      <div className="">
        <img src={img2} alt="visa" style={{ width: 50 }} /> Visa{" "}
        <span className="s1">Primary</span>
        ending in 5324
      </div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-outline-secondary py-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Payment Method
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary "
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <img src={img3} alt="pay" width="30px" />
        Replace
      </button>
    </div>
    {/* modal Add Payment Method */}
    {/* Modal */}
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 " id="exampleModalLabel">
              {" "}
              Add Payment Method{" "}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                      className="mt-1"
                    />
                    <img
                      src={img4}
                      alt="pay"
                      width="30px"
                    />{" "}
                    Add Credit/Debit Card
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                      className="mt-1"
                    />
                    <i
                      className="fa-solid fa-building-columns fs-1 "
                      style={{ fontSize: "1.7rem !important" }}
                    />{" "}
                    Add Personal Checking Account
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                      className="mt-1"
                    />
                    <img src={img5} alt="pay" width="30px" />{" "}
                    Add Venmo Account
                  </td>
                  <td>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                      className="mt-1"
                    />
                    <img src={img6} alt="pay" width="28px" />{" "}
                    Cash App
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                      className="mt-1"
                    />
                    <img src={img7} alt="pay" width="90px" />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                      className="mt-1"
                    />
                    <img src={img8} alt=" pay" width="50px" />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                      className="mt-1"
                    />
                    <img
                      src={img9}
                      alt="pay"
                      width="30px"
                    />{" "}
                    Samsung Pay
                  </td>
                  <td>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      defaultValue="HTML"
                      className="mt-1"
                    />
                    <img src={img10} alt="pay" width="110px" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary Btn_Close"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary Btn_replace ">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*end modal Add Payment Method */}
    {/* modal Repalce */}
    <div
      className="modal fade "
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h3>
              <img
                src={img11}
                alt="image"
                className="salesicon"
                style={{ width: "3vw" }}
              />
              Add Credit/Debit card
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body mb1">
            <h3>Add Card Detail</h3>
            <div className="container c1">
              <div className="row">
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <label className="" htmlFor="specificSizeSelect">
                        CARD NUMBER:
                      </label>
                    </div>
                    <div className="col-md-5 col-sm-12 ">
                      <div className="d-flex mt-2  ">
                        <img src={img12} alt="" className="IMG_SIZE" />
                        <img
                          src={img13}
                          alt=""
                          className="IMG_SIZE"
                        />
                        <img
                          src={img14}
                          alt=""
                          className="IMG_SIZE"
                        />
                        <img
                          src={img15}
                          alt=""
                          className="IMG_SIZE"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="💳 0000 0000 0000 0000 📷"
                  />
                </div>
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    EXP. DATE:
                  </label>
                  <input
                    type=""
                    className="form-control"
                    placeholder="MM/YY "
                  />
                </div>
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    CVV:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder=" "
                  />
                </div>
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    ZIP CODE:
                  </label>
                  <input type="text" className="form-control" placeholder=" " />
                </div>
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    NAME ON CARD:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder=" "
                  />
                </div>
              </div>
            </div>
            <h3>Billing Address</h3>
            <div className="container c1">
              <div className="row">
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    COUNTRY/REGION:
                  </label>
                  <input type="" className="form-control" placeholder=" " />
                </div>
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    FIRST NAME:
                  </label>
                  <input type="text" className="form-control" placeholder=" " />
                </div>
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    LAST NAME:
                  </label>
                  <input type="text" className="form-control" placeholder=" " />
                </div>
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    CITY:
                  </label>
                  <input type="text" className="form-control" placeholder=" " />
                </div>
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    COUNTRY:
                  </label>
                  <input type="text" className="form-control" placeholder=" " />
                </div>
                <div
                  className="  col-md-4 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    ZIP CODE:
                  </label>
                  <input type="text" className="form-control" placeholder=" " />
                </div>
                <div
                  className="  col-md-12 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    ADDRESS:
                  </label>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea">Comments</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary Btn_replace">
              Add Card
            </button>
            <button type="button" className="btn btn-secondary Btn_Close">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end-modal */}
  <div className="container c1 my-3 py-2">
    <h5>Billing currency</h5>
    Your current billing currency is set to USD (US Dollar).
  </div>
  <div className="container c1 my-3 py-2">
    <h5>Subscriptions</h5>
    Items you’re billed for on a recurring basis, like your plan and apps.
    <div className="row">
      {/* <div class="col-md-2 col-sm-12 my-3">
          <img src="image/lo.png" alt="subs" width="120vw">
        

      </div> */}
      <div className="col-md-6 col-sm-12 my-3">
        <span style={{ fontSize: "large" }}>
          <b>Loenex Starter</b>
        </span>{" "}
        <br />
        $60.00 yearly. Renews on January 21, 2024.
        <br /> <br />
        <input
          className="form-check-"
          type="checkbox"
          defaultValue=""
          id="flexCheckDefault"
        />{" "}
        Annual Agreement Document
        <br />
        {/* <img src="image/lon.png" alt="loenex" width="70vw">  */}
        <br />
      </div>
      <a href="#">View All</a>
    </div>
  </div>
  <div className="container c1 my-3 py-2">
    <h5>Bills</h5>
    There are no charges on your upcoming bill
  </div>
  <div className="container c1 my-3 py-2">
    <h5>Recent bills</h5>
    <div className="row">
      <div className="col-md-3 col-sm-12">Billing cycle</div>
      <div className="col-md-3 col-sm-12">Created Jan 21, 2023</div>
      <div className="col-md-3 col-sm-12">
        {" "}
        <span className="s1">Paid</span>
      </div>
      <div className="col-md-3 col-sm-12">$65.33</div>
      <div className="col-md-4 col-sm-12">
        Includes annual subscription charge <br />
        <a href="#">View all billing history</a>
      </div>
    </div>
  </div>
  <div className="container c1 my-3 py-2">
    <h5>Credits</h5>
    There are no credits on your account right now Statement of charges View a
    summary of all your Loenex charges for any date range within the last 90
    days.
  </div>
  <div className="container c1 my-3 py-2">
    <h5>Statement of charges</h5>
    View a summary of all your Loenex charges for any date range within the last
    90 days.
    <br />
    <a href="#">View Summary</a>
  </div>
</>

   </>
    
  )
}

export default Billing