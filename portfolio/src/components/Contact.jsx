import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks for providing details.\nEmail: ${email}\nPhone Number: ${phoneNumber}`);
    setEmail('');
    setPhoneNumber('');
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Enter your Email and Phone number and we will get back to you
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <br />
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;