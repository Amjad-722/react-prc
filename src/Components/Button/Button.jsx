import React from "react";

const Button = ({
  width,
  height,
  bg,
  btnText,
  textColor,
  background,
  borderRadius,
}) => {
  return (
    <button
      className={`bg-${bg} text-${textColor} py-2 px-4 rounded-sm`}
      style={{
        width: width,
        height: height,
        background: background,
        borderRadius: borderRadius,
      }}
    >
      {btnText}
    </button>
  );
};

export default Button;
