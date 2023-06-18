import Image from "next/image";
import React from "react";
import Poster from "public/about.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutPoster">
        <Image
          src={Poster}
          alt="poster "
          fill={true}
          className="aboutPoster-img"
        />
        <div className="aboutPoster-text">
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="aboutDesc">
        <div className="aboutDesc-item1">
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            repudiandae quibusdam at, porro suscipit doloremque, totam non vitae
            tenetur cum nam neque quo consequatur libero possimus tempora? Iure
            <br />
            <br />
            at accusantium temporibus deserunt enim. Sequi perferendis eius hic
            eveniet neque ipsa nemo quas ratione tempora atque dolorum libero a
            unde sint, ipsam aperiam repudiandae veritatis praesentium ullam
            <br />
            <br />
            cumque amet omnis eligendi odio. Iure cum natus optio quas pariatur
            tenetur laborum praesentium magnam? Explicabo magni illum laborum
            cum consequuntur libero vel, voluptate incidunt fugit obcaecati
            <br />
            <br />
            accusantium consectetur, suscipit, nulla magnam hic earum officiis.
            Ratione, eaque. Suscipit vitae, obcaecati repellat quibusdam
            temporibus sequi.
          </p>
        </div>
        <div className="aboutDesc-item2">
          <h1>What we Do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nobis
            error architecto, dolores, veritatis molestiae recusandae obcaecati
            in eius veniam doloribus exercitationem, nesciunt explicabo numquam
            <br />
            <br />
            dolore velit provident adipisci? Quisquam veritatis magnam
            blanditiis recusandae molestiae dolore exercitationem, tempora
            maxime quos cum, quo unde ipsam facilis rerum laudantium nisi
            laboriosam deleniti?
            <br />
            <br /> - Daynamic Website
            <br />
            <br /> - Fast and Hnady
            <br />
            <br /> - Mobile App
            <br />
          </p>
          <Link href="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
