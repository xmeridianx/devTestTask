import { useState, useEffect } from "react";
import UniversalInput from "../UniversalInput/UniversalInput"; 
import "./UniversalForm.css";

const UniversalForm = () => {
  const [formValues, setFormValues] = useState({
    firstValue: "",
    secondValue: "",
    thirdValue: "",
    fourValue: "",
    fiveValue: "",
  });

  const localStorageKey = "formValues";

  useEffect(() => {
    const savedValues = localStorage.getItem(localStorageKey);
    if (savedValues) {
      setFormValues(JSON.parse(savedValues));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === localStorageKey && event.newValue) {
        setFormValues(JSON.parse(event.newValue));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleInputChange = (key, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const inputsConfig = [
    {
      type: "number",
      disabled: false,
      value: formValues.firstValue,
      onChange: (e) => handleInputChange("firstValue", e?.target?.value),
      placeholder: "Number type",
      style: { width: "100%" },
      className: "inputItem",
    },
    {
      disabled: false,
      value: formValues.secondValue,
      onChange: (e) => handleInputChange("secondValue", e?.target?.value),
      placeholder: "Text type",
      style: { width: "100%" },
      className: "inputItem",
    },
    {
      multiline: true,
      disabled: false,
      value: formValues.thirdValue,
      onChange: (e) => handleInputChange("thirdValue", e?.target?.value),
      placeholder: "Text multiline type",
      style: { width: "100%" },
      className: "inputItem",
    },
    {
      disabled: false,
      value: formValues.fourValue,
      onChange: (e) => handleInputChange("fourValue", e?.target?.value),
      mask: "111-111",
      placeholder: "With mask",
      style: {
        width: "100%",
        backgroundColor: "white",
        color: "black",
        borderRadius: "15px",
      },
      className: "inputItem",
    },
    {
      disabled: false,
      value: formValues.fiveValue,
      onChange: (e) => handleInputChange("fiveValue", e?.target?.value),
      options: [
        { value: "first element", label: "first element" },
        { value: "second element", label: "second element" },
        { value: "third element", label: "third element" },
      ],
      placeholder: "Another type",
      style: {
        width: "100%",
        backgroundColor: "white",
        color: "black",
        borderRadius: "15px",
      },
      className: "inputItem",
    },
  ];

  return (
    <div className="inputItems">
      {inputsConfig.map((inputProps, index) => (
        <UniversalInput key={index} {...inputProps} />
      ))}
    </div>
  );
};

export default UniversalForm;
