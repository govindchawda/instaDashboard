import React from 'react'
export default function Pract() {
    const maleBtn = document.getElementById('male');
    const femaleBtn = document.getElementById('female');
    const countryCode = document.getElementById('country-code');
    const emailContainer = document.getElementById('email-container');

    maleBtn.addEventListener('click', () => {
      maleBtn.classList.add('active');
      femaleBtn.classList.remove('active');
    });

    femaleBtn.addEventListener('click', () => {
      femaleBtn.classList.add('active');
      maleBtn.classList.remove('active');
    });

    countryCode.addEventListener('change', () => {
      if (countryCode.value !== "+91") {
        emailContainer.style.display = "block";
      } else {
        emailContainer.style.display = "none";
      }
    });
  return (
    <>
      <h1>₹<span>1 Crore</span> life cover starting from ₹485/month*</h1>
<p>Get an online discount of <b>upto 10%</b></p>
      <div class="form-container">
    <div class="gender-selection">
      <button id="male" class="active">Male</button>
      <button id="female">Female</button>
    </div>
    <div class="form-input">
      <label for="name">Your Name</label>
      <input type="text"  required pattern='[A-Z]+ [a-z]' id="name" placeholder="Enter Your Name"/>
    </div>
    <div class="form-input">
      <label for="dob">Date of Birth</label>
      <input type="date" id="dob" required />
    </div>
    <div class="form-input">
      <label for="mobile">Mobile Number</label>
      <div style={{display:'flex',gap:"1px"}}>
        <select id="country-code">
          <option value="+91">India +91</option>
          <option value="+92">UAE +92</option>
          <option value="+93">AUS +93</option>
          <option value="+94">Dubai +94</option>
          <option value="+95">SA +95</option>
          <option value="+96">NZ +96</option>
          <option value="+97">SL +97</option>
        </select>
        <input type="text" id="mobile" required placeholder="Enter Mobile Number"/>
      </div>
    </div>
    <div class="form-input" id="email-container">
      <label for="email">Email Address</label>
      <input type="email" id="email" placeholder="Enter Your Email"/>
    </div>
    <button class="submit-btn">View Plans</button>
    <p class="note">
      <img src="https://static.pbcdn.in/term-cdn/images/images/mobcircle_dark.svg" alt="info"/>
      Only certified Policybazaar experts will assist you.
    </p>
  </div>
    </>
  )
}
