import {useState} from 'react'

import '../../styles/form.scss'
import backArrow from '../../images/onboarding/back-arrow.png'
import ActiveCheck from '../../images/onboarding/active-check.png'
import InactiveCheck from '../../images/onboarding/inactive-check.png'
import SidebarImage from '../../images/onboarding/sidebar-sign-up-image.png'

interface StepTwoProps {
  formData: {
    otp: string,
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepTwo: React.FC<StepTwoProps>  = ({formData, handleInputChange}) => {
  const [showPassword, setShowPassword] = useState(false);



  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>

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
                <p>2/2 steps</p>
              </div>

              <div className="main-section">

                <div className="header-text-section">
                  <p className="header-text">verify your email</p>
                  <p>simply enter the OTP sen to verify your email address</p>
                </div>



                <div className="container form-container">
                  <div className="row">
                    <div className="col-lg-6">
                      <label>enter OTP</label>
                        <input 
                          type="text"
                          name="otp"
                          value={formData.otp}
                          onChange={handleInputChange}
                          placeholder="Enter your OTP"
                          required
                        />
                      </div>

                      

                      

                      <div className="col-lg-12 login-option">
                        <p><img src={backArrow} alt="back" />go back</p>
                        <button>finish</button>
                      </div>
                  </div>
                </div>
                



              </div>


            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default StepTwo