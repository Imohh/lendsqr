// import {useState} from 'react'

// import { Button, Input, Space } from "@/components";
// import { EyeIcon, Key } from "lucide-react";
// import { useHistory, useParams } from 'react-router-dom';

// const Login = () => {

  

//     return (
//         <div className="m-10 max-w-max">
//             <Input leftIcon={<Key />} rightIcon={<EyeIcon />} />
//             <Space size={4} />
//             <Button variant="outline">Login</Button>

//             <h2>hello world</h2>
//         </div>
//     );
// };

// export default Login;





import React, { useState } from 'react';
import StepOne from '../onboarding/StepOne'
import StepTwo from '../onboarding/StepTwo'
import '../styles/form.css'
import 'bootstrap/dist/css/bootstrap.min.css';

enum LoginStep {
  Step1 = 'step1',
  Step2 = 'step2',
}

const Login = () => {

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [orgNameError, setOrgNameError] = useState('');
  const [orgTypeError, setOrgTypeError] = useState('');
  const [workEmailError, setWorkEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const [step, setStep] = useState(LoginStep.Step1);
  const [formData, setFormData] = useState({
    firstName:'',
    lastName: '',
    orgName: '',
    orgType: '',
    workEmail: '',
    password: '',
  });


  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();


    let isValid = true;

    if (!formData.firstName) {
      setFirstNameError('First name is required');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    if (!formData.lastName) {
      setLastNameError('Last name is required');
      isValid = false;
    } else {
      setLastNameError('');
    }


    if (isValid) {
      // Proceed to the next step or submit the form
      setStep(LoginStep.Step2);
    }

    if (step === LoginStep.Step1) {
      setStep(LoginStep.Step2);
    } else if (step === LoginStep.Step2) {
      // Handle final form submission
      console.log(formData); // Perform API request or further processing here
    }

  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const renderFormContent = () => {
    switch (step) {
      case LoginStep.Step1:
        return <StepOne 
                  formData={formData} 
                  handleInputChange={handleInputChange}
                  firstNameError={firstNameError}
                />

      case LoginStep.Step2:
        return <StepTwo formData={formData} handleInputChange={handleInputChange}/>

      default:
        return <StepOne formData={formData} handleInputChange={handleInputChange} firstNameError={firstNameError}/>;
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {renderFormContent()}
    </form>
  );
};

export default Login;



