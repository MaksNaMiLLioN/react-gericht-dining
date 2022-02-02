import React from "react";
import { images } from "../../constants";
import "./Chef.css";

import { SubHeading, Subheading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app_chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt,
            aut dolores, ullam deserunt fuga quisquam eos illo, placeat atque
            harum consequatur sint earum maiores tenetur nam laboriosam adipisci
            quas.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis in
          consequuntur nam sed veniam, ea asperiores maxime. Quisquam dolorem
          iste, voluptatum sapiente iure quae iusto! Dolore architecto ea nobis
          id!
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
