import React, { use } from "react";
import JobsCard from "./JobsCard";
import { div } from "motion/react-client";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  return (
    <div>
      <div className="text-center my-5 space-y-2">
        <h1 className="text-5xl font-semibold">Jobs of the day</h1>
        <p className="text-gray-500">Search and connect with the right candidates faster.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-5 ">
      {jobs.map((job) => (
        <JobsCard key={job._id} job={job}></JobsCard>
      ))}
    </div>
    </div>
  );
};

export default HotJobs;
