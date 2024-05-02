import React from "react";

const RenderButton = ({ onClick, index, icon }) => (
  <button
    key={index}
    onClick={() => onClick(index)}
    style={{ fontFamily: "Noto Sans" }}
    className={`button-beat flex-1 shadow-sm font-bold bg-white text-BlueDark font-KohSantepheap `}
  >
    <div className=" py-2 rounded-md border border-1 border-black">
      <span>{icon}</span>
    </div>
  </button>
);

export default RenderButton;
