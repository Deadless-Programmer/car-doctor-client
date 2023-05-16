import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  // console.log(service);
  const { _id, img, title, price, description } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl h-96 ">
        <figure className="px-10 pt-10">
          <img className="h-52" src={img} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <div className="flex  items-center">
            <p className=" text-lg font-semibold text-amber-600">
              Price : ${price}
            </p>
            <p className="ml-44 text-amber-600 hover:text-green-600">
              <Link to={`/checkout/${_id}`} ><FaArrowRight></FaArrowRight></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
