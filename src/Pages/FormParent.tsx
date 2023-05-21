import React from 'react';
import '../styles/form.scss'
import ActiveCheck from '../images/onboarding/active-check.png'
import InactiveCheck from '../images/onboarding/inactive-check.png'
import SidebarImage from '../images/onboarding/sidebar-sign-up-image.png'

const FormParent= () => {
  return (
    <section>
        <div className="container"> 
          <div className="row">
            <div className="col-lg-3 onboarding-sidebar-section">
              <div className="sidebar-logo">
                <h1>bizpend</h1>
              </div>

              <div className="sidebar-container">
                <div className="active">
                  <div className="sidebar-check-img">
                    <img src={ActiveCheck} />
                  </div>
                  <div className="sidebar-text">
                    <h5 className="active-text">Join us today</h5>
                    <p>Enter your organization email and password</p>
                  </div>
                </div>

                <div>
                  <div className="sidebar-check-img">
                    <img src={InactiveCheck} />
                  </div>
                  <div className="sidebar-text">
                    <h5>Verify your email</h5>
                    <p>Enter OTP sent to your email address</p>
                  </div>
                </div>
              </div>


              <img src={SidebarImage} />
            </div>

            <div className="col-lg-9 sidebar-main">
              <div className="page-no">
                <p>1/2 steps</p>
              </div>

              <div className="main-section">

                <div className="header-text-section">
                  <p className="header-text">Join us today</p>
                  <p>Bring your journey to easy financial management</p>
                </div>



                <div className="container form-container">
                  <div className="row">
                    <div className="col-lg-6">
                      <label>first name*</label>
                        <input 
                          type="text"
                          name="firstName"
                          value=""
                          placeholder="John"
                          required
                        />
                      </div>

                      <div className="col-lg-6">
                      <label>last name*</label>
                        <input 
                          type="text"
                          name="lastName"
                          value=""
                          placeholder="John"
                          required
                        />
                      </div>

                      <div className="col-lg-6">
                      <label>organization name</label>
                        <input 
                          type="text"
                          name="orgName"
                          value=""
                          placeholder="John"
                          required
                        />
                      </div>

                      <div className="col-lg-6">
                      <label>organization type*</label>
                        <input 
                          type="text"
                          name="orgType"
                          value=""
                          placeholder="John"
                          required
                        />
                      </div>

                      <div className="col-lg-6">
                      <label>work email*</label>
                        <input 
                          type="text"
                          name="workEmail"
                          value=""
                          placeholder="John"
                          required
                        />
                      </div>

                      <div className="col-lg-12">
                        <label>password*</label>
                        <input
                          className="password-input"
                          type=""
                          name="password"
                          placeholder="Enter Password"
                        />
                        
                      </div>

                      <div className="col-lg-12 sidebar-main-footer">
                        <div className="col-lg-6 login-option">
                          <p>already have an account?<span>log in</span></p>
                        </div>
                        <div className="col-lg-6 button-next">
                          <button>create account</button>
                        </div>
                      </div>
                  </div>
                </div>
                



              </div>


            </div>
          </div>
        </div>
      </section>
  )
};

export default FormParent;
