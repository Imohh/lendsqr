import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../images/logo.svg'
import loginImage from '../images/login-image.svg'
import '../styles/login.scss'


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const navigate = useNavigate();


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const validateForm = () => {
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform form submission or other actions
      console.log('Form submitted successfully');

      // Navigate to the success page
      navigate('/dashboard');
    }
  };



  // hide and show password
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <input 
                        type="text" 
                        placeholder="Email" 
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {emailError && <p className="error">{emailError}</p>}
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
                      {passwordError && <p className="error">{passwordError}</p>}
                    </div>
                  </div>
                  <p className="forgot-text">forgot password?</p>
                  <button type="submit">log in</button>
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
