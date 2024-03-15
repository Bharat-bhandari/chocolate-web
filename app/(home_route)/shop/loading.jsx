"use client";

import { ClipLoader } from "react-spinners";

import React from "react";

const override = {
  display: "block",
  margin: " auto",
};

const LoadingPage = ({ loading }) => {
  return (
    <div className="bg-white">
      <ClipLoader
        color="#3b82f6"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default LoadingPage;
