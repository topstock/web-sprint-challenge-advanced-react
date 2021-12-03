import React, { useState } from "react";
import axios from "axios";

const useForm = (initialValues) => { 
    const [values, setValues] = useState(initialValues);
    
      
    const handleClick = () => {
        axios.get(`http://localhost:3333/plants`)
            .then( res => {
              console.log(res);
            })
    }

    return [ handleClick, values, setValues ]
}

export default useForm;