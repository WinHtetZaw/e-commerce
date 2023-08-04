import React from "react";

const BillingForm = () => {
  return (
    <>
      <form className=" border shadow-4 rounded-lg p-5 md:p-10 w-full h-fit flex flex-col gap-5">
        <h1 className=" font-mono">Billing Address</h1>

        {/* first name & last name  */}
        <section className=" flex gap-3 w-full">
          <div className=" flex flex-col gap-2 w-1/2">
            <label htmlFor="city">First name</label>
            <input
              placeholder="First name"
              type="text"
              name="first_name"
              className="form-input"
            />
          </div>

          <div className=" flex flex-col gap-2 w-1/2">
            <label htmlFor="state">Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              name="last_name"
              className="form-input"
            />
          </div>
        </section>

        {/* phone number  */}
        <div className=" flex flex-col gap-2">
          <label htmlFor="phone">Phone number</label>
          <input
            placeholder="Phone"
            type="text"
            name="phone"
            className="form-input"
          />
        </div>

        {/* emil  */}
        <div className=" flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            type="text"
            name="email"
            className="form-input"
          />
        </div>

        {/* city & state  */}
        <section className=" flex gap-3 w-full">
          <div className=" flex flex-col gap-2 w-1/2">
            <label htmlFor="city">City</label>
            <input
              placeholder="City"
              type="text"
              name="city"
              className="form-input"
            />
          </div>

          <div className=" flex flex-col gap-2 w-1/2">
            <label htmlFor="state">State</label>
            <input
              placeholder="State"
              type="text"
              name="state"
              className="form-input"
            />
          </div>
        </section>

        {/* address  */}
        <div className=" flex flex-col gap-2">
          <label htmlFor="address">Address</label>
          <input
            placeholder="Address"
            type="text"
            name="address"
            className="form-input"
          />
        </div>
      </form>
    </>
  );
};

export default BillingForm;
