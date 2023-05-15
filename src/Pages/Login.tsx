import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../images/logo.svg'
import loginImage from '../images/login-image.svg'
import '../styles/login.scss'

function Login() {

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <HelmetProvider>

      <Helmet>
        <title>Lendsqr | Login</title>
        <meta name="description" content="Empowering the smartest lenders" />
        <meta property="og:title" content="Lendsqr Login" />
      </Helmet>

      


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

              <img className="login-image" src={loginImage}/>
            </div>


            <div className="col-lg-6 col-md-6 col-sm-12 second-section">
              <div className="login-form">
                <p className="welcome-text">welcome!</p>
                <p className="sub-text">enter details to login</p>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <input type="text" placeholder="Email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <input
                        className="password-input"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        id="subdomain"
                      />
                      <input onClick={toggleShowPassword} type="button" id="showText" value={showPassword ? 'Hide' : 'Show'}/>
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
    </HelmetProvider>
  );
}

export default Login;
