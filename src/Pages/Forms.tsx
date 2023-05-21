// URL STATE HANDLING

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Forms: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = useLocation();
  // const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({ step1: "", step2: "" });
  const [step, setStep] = useState<string>("one");

  // const s
  const queryParams = new URLSearchParams(window?.location?.search);

  const param = queryParams.get("step") || "";

  useEffect(() => {
    // setStep(param)
    setStep(param);
  }, [step, formData, navigate, queryParams]);
  useEffect(() => {
    navigate("/forms?step=one");
  }, []);
  const mainstep = queryParams.get("step") || "one";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (step == "one") {
      // navigate("/step");
      setStep("two");
      queryParams.set("step", "two");
      // setStep(2);
    } else {
      // Final form submission logic
      // ...
      console.log("submitted");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  console.log(mainstep);
  return (
    <form onSubmit={handleFormSubmit}>
      {step == "one" && (
        <div>
          <h2>Step 1</h2>
          <input
            type="text"
            name="step1"
            value={formData.step1}
            onChange={handleInputChange}
            autoFocus
          />
          <button type="submit" onClick={() => navigate("/forms?step=two")}>
            Next
          </button>
        </div>
      )}

      {step == "two" && (
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
