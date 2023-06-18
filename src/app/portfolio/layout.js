import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1 className="portfolioMailTitle">Our Work</h1>
      {children}
    </div>
  );
};

export default layout;
