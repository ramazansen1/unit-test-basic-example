import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Sayac Testi</h2>
      <div className="counter">
        <button onClick={() => setCount(count <= 0 ? 0 : count - 1)}>
          Azalt
        </button>
        <span data-testid="sayi">{count}</span>
        <button onClick={() => setCount(count + 1)}>Arttır</button>
      </div>
    </>
  );
};

export default Counter;
