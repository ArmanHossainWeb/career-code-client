import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiShoppingBagFill } from "react-icons/pi";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    company_logo,
    company,
    location,
    jobType,
    applicationDeadline,
    description,
    requirements,
    salaryRange,
  } = job;
  return (
    <div>
      <div className="card bg-base-200  shadow-sm p-3">
        <div className="flex gap-3 items-center">
          <figure>
            <img className="w-14" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h1 className="font-semibold text-2xl">{company}</h1>
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex ">
            <p className="flex gap-1 items-center text-gray-500">
              <PiShoppingBagFill />
              {jobType}
            </p>
            <p className="flex gap-1 items-center text-gray-500">
              <MdOutlineAccessTime />
              {applicationDeadline}
            </p>
          </div>
          <p>{description}</p>
          <div>
            <button className="btn btn-block text-gray-500 hover:text-purple-400">
              {requirements}
            </button>
          </div>
          <div className="card-actions justify-end">
            <p className="text-lg text-primary font-semibold">
              {salaryRange.currency} {salaryRange.min}-{salaryRange.max}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-soft  btn-primary">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
