import { useState } from "react";

const useForm = (initialValue, isShowSuccessMessage) => { 
  const [values, setValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(isShowSuccessMessage);
  
  const handleFormChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const showSubmitResult = () => {
    setShowSuccessMessage(true);
  }

  return [ 
    values, 
    showSuccessMessage,
    handleFormChanges,
    showSubmitResult ]
}

export default useForm;