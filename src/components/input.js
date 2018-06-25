import React from 'react';

const Input = (inputTag, state, onChange, name) => {
    return (
        <div className="input">
            <input name={name} value={state} onChange={onChange}/>
            <label>{inputTag}</label>
        </div>
    )
}


export default Input;