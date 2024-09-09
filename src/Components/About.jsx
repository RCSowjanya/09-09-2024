import React from "react";
import Purpose from "./Purpose";
import { Helmet } from "react-helmet";

import KeyObjects from "./KeyObjects";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>
          About CUSP Solar: CUSP, Commitment to Streamlining Solar Energy
        </title>
        <meta
          name="description"
          content="CUSP Solar’s journey As a centralized platform, we empower installers and suppliers, making solar energy accessible and efficient. Join us a renewable energy future"
        />
      </Helmet>
      {/*---bg-image----*/}
      <div className="w-full h-full ">
        <div className="common-bg flex items-center">
          <h2 className="text-3xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            About Us
          </h2>
        </div>
      </div>
      {/*---bg-image close---*/}
      {/*----purpose of the platform---*/}
      <Purpose />

      <KeyObjects />
      {/*----Our team----
      <Ourteam />
      */}
    </div>
  );
};

export default About;
