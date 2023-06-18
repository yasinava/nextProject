"use client";
import React from "react";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
const Category = ({ params }) => {
  const categoryName = params.category;
  console.log(categoryName);
  const { data, error } = useSWR(`/api/${categoryName}`, axios);
  if (!data) {
    return <div>loading ...........</div>;
  }
  const catData = data.data;
  console.log(catData);

  return (
    <div className="categoryContainer">
      <h1 className="catTitle">{categoryName}</h1>
      <div className="catItem">
        <div className="catContent">
          <h1>{catData.title}</h1>
          <p>{catData.desc}</p>
          <button>See More</button>
        </div>
        <div className="categoryImg">
          <Image
            src={catData.image}
            alt="poster"
            fill={true}
            className="catImg"
          />
        </div>
      </div>
      <div className="catItem">
        <div className="catContent">
          <h1>{catData.title2}</h1>
          <p>{catData.desc2}</p>
          <button>See More</button>
        </div>
        <div className="categoryImg">
          <Image
            src={catData.image2}
            alt="poster"
            fill={true}
            className="catImg"
          />
        </div>
      </div>
      <div className="catItem">
        <div className="catContent">
          <h1>{catData.title3}</h1>
          <p>{catData.desc3}</p>
          <button>See More</button>
        </div>
        <div className="categoryImg">
          <Image
            src={catData.image3}
            alt="poster"
            fill={true}
            className="catImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
