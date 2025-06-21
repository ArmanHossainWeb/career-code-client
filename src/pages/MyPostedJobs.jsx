import React, { Suspense } from "react";
import UseAuth from "../hooks/UseAuth";
import JobList from "../Component/JobList";
import { jobsCreatedByPromise } from "../api/jobsApi";
const MyPostedJobs = () => {
  const { user } = UseAuth();

  return (
    <div>
      <h2>My Posted Jobs: </h2>

      <Suspense fallback={"data loading"}>
        <JobList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
