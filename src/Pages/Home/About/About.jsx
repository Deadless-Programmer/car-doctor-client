import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row  gap-12">
          <div className="lg:w-1/2  relative">
            <img src={person} className="rounded-lg shadow-2xl w-3/4" />
            <img
              src={parts}
              className="  right-5 top-1/2 border-8 border-white absolute rounded-lg shadow-2xl w-2/4"
            />
          </div>
          <div className="lg:w-1/2 space-y-5">
            <h3 className="text-2xl font-bold text-amber-600">About Us</h3>
            <h1 className="text-5xl font-bold w-3/4">
              We are qualified & of experience in this field
            </h1>
            <p className="">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <p className="">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn bg-orange-600 capitalize hover:bg-green-500 border-0 ">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
