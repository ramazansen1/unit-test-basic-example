import React, { useState } from "react";

const SendForm = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <>
      <h2>Onaylama Testi</h2>
      <div className="send-container">
        <div>
          <input
            onChange={() => {
              setIsChecked(!isChecked);
            }}
            type="checkbox"
          />
          <label>Koşulları Okudum Onaylıyorum</label>
        </div>

        <button disabled={isChecked}>Gönder</button>
      </div>
    </>
  );
};

export default SendForm;
