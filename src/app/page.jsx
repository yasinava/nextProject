import Image from "next/image";
import React from "react";
import Poster from "public/home.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeItem">
        <h1>Better design for your digital products.</h1>
        <p>
          Turning your Idea into reality . we bring to gether thr teams from the
          global industry
        </p>
        <Link href="/portfolio">
          <button>see our works</button>
        </Link>
      </div>
      <div className="homeItem2">
        <Image src={Poster} alt="home photo" className="homeImg" />
      </div>
    </div>
  );
};

export default Home;
