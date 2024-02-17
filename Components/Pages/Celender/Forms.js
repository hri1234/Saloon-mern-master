import React from 'react'

const Forms = () => {
  return (
    <div>
      <div className="container">
  <div className="row">
    <div className="col-md-8 mx-auto mt-4">
      <div className="d-flex justify-content-between ">
        <div className="left_section">
          <h4 style={{ fontWeight: 600 }}>DE Legends barbershop</h4>
          <p style={{ fontWeight: 200 }}>Vizito data 2024-02-02</p>
        </div>
        <div className="right-section mt-4">
          <h2 className="text-danger">
            {" "}
            <i>treatwell</i>
          </h2>
        </div>
      </div>
      <div className="col-md-12 col-sm-12">
        <span style={{ fontWeight: 600 }}>
          <b>Covid- 19 forma</b>Covid- 19 forma{" "}
        </span>
        <p>
          prasome uzpildyti siq formq prics atvykstant i tai pades uzpildyti
          tava ,salono darbuatojy ir kitu klienty savguma
        </p>
      </div>
      <div className="col-md-12 col-sm-12">
        <span style={{ fontWeight: 600 }}>
          <b>Asmenine information</b>{" "}
        </span>
        <p>
          si informacija bus naudojama uzkirsti Covid-19 plitimui ir tavo
          uzkirsti administravimui
        </p>
      </div>
      <div className="col-md-12">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ fontWeight: 600 }}
          >
            {" "}
            <b> Vardas*</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
      <div className="col-md-12">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ fontWeight: 400 }}
          >
            {" "}
            <b>
              {" "}
              <b>Pavarde*</b>
            </b>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
      <div className="col-md-12">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ fontWeight: 600 }}
          >
            {" "}
            <b>Telefono numeris*</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
      <div className="col-md-12">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ fontWeight: 600 }}
          >
            {" "}
            <b>El pasto adresas*</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
      <div className="col-md-12 col-sm-12">
        <span style={{ fontWeight: 600 }}>
          {" "}
          <b>Covid-19 pervencija</b>{" "}
        </span>
        <p>prasome perziurent svarbias sqlygas Sia forma sutinki</p>
        <ul>
          <li>
            When you take off your mask, store it in a clean plastic bag, and
            every day either wash it if it’s a fabric mask or dispose of it in a
            trash bin if it’s a medical mask.
          </li>
          <li>Make sure your mask covers your nose, mouth and chin.</li>
          <li>Don’t use masks with valves.</li>
          <li>
            Open a window to increase the amount of natural ventilation when
            indoors.
          </li>
        </ul>
        <hr />
        <div className="col-md-12">
          <label>
            <input type="checkbox" />
            <b> have read and understand everything</b>{" "}
          </label>
          <p className="mt-5">
            After the outbreak of the COVID-19 pandemic, many businesses had to
            shut down temporarily in order to prevent the further spread of the
            virus. Fortunately, the authorities have decided to start the
            normalization process which allowed businesses to reopen their doors
            to their customers of course under the precaution measures that are
            with the competence of both the business owners and the customers.
            With this COVID-19 Salon Company Consent Form your customers are
            asked to provide their personal information, service details with
            their acknowledgment of the mentioned COVID-19 measures and consent
            to obey the terms and conditions. You can customize this template
            and adapt it to your own business by changing, adding or removing
            the existing fields, changing the fonts, colors, background, and
            layout and either embed it to your website or use it as a standalone
            form.
          </p>
          <div className="d-grid gap-2 col-6 mx-auto mb-3">
            <button
              className="btn btn-danger "
              style={{ backgroundColor: "rgb(216, 62, 62)" }}
              type="button"
            >
              Save
            </button>
            <a href="" className="text-center ">
              {" "}
              Privacy-Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Forms


