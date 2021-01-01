import React from "react";

const Modal = (props) => {
  const { closeClick } = props;

  return (
    <div className="fixed z-10 inset-0">
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="absolute inset-0 bg-gray-300 opacity-75"
          aria-hidden="true"
          onClick={closeClick}
        />

        <div
          className="bg-white animate-popIn rounded-lg shadow-xl z-20 p-5"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-red-500">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
