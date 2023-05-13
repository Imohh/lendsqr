import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg'
import loginImage from '../images/login-image.svg'
import '../styles/login.scss'

function Login() {
  return (
    <>
      <section className="login">
        
        {/*<div className="col-lg-12 login-section">
            <img src={logo} />
        </div>*/}

        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12 first-section">
              <div className="logo-top">
                <img src={logo} />
              </div>

              <img src={loginImage} width="600px" height="337.57px"/>
            </div>


            <div className="col-lg-6 col-md-6 col-sm-12 second-section">
              <div className="login-form">
                <p className="welcome-text">welcome!</p>
                <p className="sub-text">enter details to login</p>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <input type="text" placeholder="Password" />
                    </div>
                  </div>
                  <p className="forgot-text">forgot password?</p>
                  <button>log in</button>
                </form>
              </div>
            </div>

          </div>
        </div>


      </section>
    </>
  );
}

export default Login;
