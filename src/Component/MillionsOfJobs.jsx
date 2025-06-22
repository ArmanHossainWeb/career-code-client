import React from "react";
import millionsOfJobs from "../assets/image/millionsOfJobs.png";

const MillionsOfJobs = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="hero max-w-7xl mx-auto min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <p className="text-gray-600 text-4xl font-semibold">
              Millions Of Jobs.
            </p>
            <h1 className="text-5xl font-bold">
              Find The One That’s<span className="text-primary">Right </span>{" "}
              For You
            </h1>
            <p className="py-6">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide. The right job is out there.
            </p>
            <button className="btn btn-primary">search Jobs</button>
          </div>
          <div className="flex-1">
            <img
              src={millionsOfJobs}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MillionsOfJobs;
