import React, { useState } from "react";

const MainContent = () => {
  const [text, setText] = useState({ fname: " ", email: " " });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(text);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(text);
    setText((prevTextData) => ({ ...prevTextData, [name]: value }));
  };

  return (
    <section className="main-content">
      {/* {console.log(text)} */}
      <h2>Become a BBQ master!</h2>
      <p>Register Today</p>
      <p>
        BBQ isn't just standing in front of your grill with it on full blast and
        hoping for the best. It's an art! One way to speed up the process is to
        learn from the best. You can do just that by signing up for this free
        webinar!
      </p>
      <form className="email-collector" action="#" onSubmit={handleSubmit}>
        <input
          name="fname"
          value={text.fname}
          type="text"
          placeholder="first name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          required
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      <p className="fine-print">
        We'll never share your information without your permission
      </p>
    </section>
  );
};

export default MainContent;
