import  { useState } from 'react';

const Input = (props:any) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const Change = (e:any) => {
    setValue(e.target.value);
    if(e.target.value.length < 10) {
      setError('Input should be at least 10 characters long');
    } else {
      setError('');
    }
   console.log(e.target.value)  
};

  return (
    <div>
      <label>
       <b> Input:</b>
        <input type={props.typ} value={value} onChange={Change} placeholder={props.ph} />
      </label>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;