import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services)
  return (
    <div className="">
      <div className=" text-center space-y-2 my-5">
        <h3 className="text-2xl font-bold text-amber-600">Servies</h3>
        <h1 className="text-4xl font-bold">Our Services Zone</h1>
        <p className="">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. <br /> In deleniti eaque aut
          repudiandae et a id nisi. Provident cupiditate voluptatem et in.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
