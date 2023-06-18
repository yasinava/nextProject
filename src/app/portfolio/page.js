import Link from "next/link";
import React from "react";

const portfolio = () => {
  return (
    <div className="portfolioContainer">
      <h1 className="portSelectTitle">Choose a Gallery</h1>
      <div className="portItems">
        <Link href="/portfolio/illustrations">
          <span>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites">
          <span>Websites</span>
        </Link>
        <Link href="/portfolio/application">
          <span>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default portfolio;
