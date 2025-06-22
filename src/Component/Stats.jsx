import React from "react";

const Stats = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
        <div className=" text-center my-5 space-y-3">
            <h1 className="text-4xl font-bold">Why Choose Us</h1>
            <p className="text-gray-500">Trusted by thousands across the globe, our numbers speak for themselves. Explore what makes our team a reliable partner in innovation and delivery.</p>
        </div>
      <div className="stats flex gap-5 shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"

              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Completed Cases</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">
            We always provide people a <br /> complete solution upon focused of
            any business
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Our Office</div>
          <div className="stat-value">17+</div>
          <div className="stat-desc">
            We always provide people a <br />
            complete solution upon focused of any business
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Skilled People</div>
          <div className="stat-value">86+</div>
          <div className="stat-desc">
            We always provide people a <br />
            complete solution upon focused of any business
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
