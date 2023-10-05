import React from "react";
import Common from "./Common";
import web from "../src/images/contact-us.svg";

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        visit="/contact"
        btname="Contact Now"
        imgsrc={web}
      />
    </>
  );
}

export default About;
