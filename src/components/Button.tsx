import  { useState } from 'react';
const Button = () => {
const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div >
        <h3>Component of Button </h3>
      <button onClick={add}>Click to Add 1 in {count} </button>
    </div>
  );
};

export default Button;