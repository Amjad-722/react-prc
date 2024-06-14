import React from "react";

function Input() {
  return (
    <div>
      <input type="text" placeholder="please enter text" min={3} max={12} />
    </div>
  );
}

export default Input;
