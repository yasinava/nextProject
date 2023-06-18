import React from "react";
// import Image from "next/image";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div>2023 headphone for every one</div>
      <div className="footerSocial">
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillTwitterCircle />
        <AiFillYoutube />
      </div>
    </div>
  );
};

export default Footer;
