// URL STATE HANDLING

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Forms: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({ step1: '', step2: '' });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const stepParam = urlParams.get('step');
    const stepFromURL = parseInt(stepParam || '1', 10);
    setStep(stepFromURL);

    const step1Value = urlParams.get('step1');
    const step2Value = urlParams.get('step2');
    setFormData({
      step1: step1Value || '',
      step2: step2Value || '',
    });
  }, [location]);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    queryParams.set('step', String(step));
    queryParams.set('step1', formData.step1);
    queryParams.set('step2', formData.step2);
    navigate({ search: queryParams.toString() });
  }, [step, formData, navigate]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
    } else {
      // Final form submission logic
      // ...
      console.log("submitted")
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {step === 1 && (
        <div>
          <h2>Step 1</h2>
          <input
            type="text"
            name="step1"
            value={formData.step1}
            onChange={handleInputChange}
            autoFocus
          />
          <button type="submit">Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2</h2>
          <input
            type="text"
            name="step2"
            value={formData.step2}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default Forms;
