"use client";

import React from "react";
import { ReactDOM } from "react";

const NavModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-gray-500 z-100 "> Hello</div>

      <div className="fixed">
        <button onClick={onClose}>close it</button>;
      </div>
    </>,
    document.querySelector("nav-modal")
  );
};

export default NavModal;
