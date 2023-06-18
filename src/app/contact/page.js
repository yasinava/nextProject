import Image from "next/image";
import React from "react";
import Poster from "public/contact2.jpg";

const contact = () => {
  return (
    <div className="contactContainer">
      <h1>Let's keep in touch</h1>
      <div className="content">
        <div className="content-img">
          <Image
            src={Poster}
            alt="poster"
            fill={true}
            className="imageContact"
          />
        </div>
        <form className="form">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <textarea placeholder="massage" cols={30} rows={10}></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
