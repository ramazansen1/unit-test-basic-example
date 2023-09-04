import React, { useState } from "react";

const Button = () => {
  const [btnColor, setBtnColor] = useState("red");
  return (
    <>
      <h2>Button Testi</h2>
      <div className="btn-container">
        <button
          onClick={() => setBtnColor(btnColor === "red" ? "blue" : "red")}
          style={{ background: btnColor }}
        >
          {btnColor === "red" ? "Maviye Çevir" : "Kırmızıya Çevir"}
        </button>
      </div>
    </>
  );
};

export default Button;
