import React, { useState } from 'react';

class useForm extends React.Component {
    state = {
        data,
        setData
    }

    handleClick = (e) => {
        e.preventDefault();
        setData(
            axios.get(`http://localhost:3333/plants`)
              .then( res => res)
        );
    };
    return ( 
        [data, setData] 
        )
}

export default useForm