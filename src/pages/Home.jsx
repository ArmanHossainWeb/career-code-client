import React, { Suspense } from "react";
import Hero from "../Component/Hero";
import HotJobs from "../Component/HotJobs";
import MillionsOfJobs from "../Component/millionsOfJobs";

const Home = () => {
  const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
    res.json());

  return (
    <div>
      <Hero>
      </Hero>
      <Suspense fallback={"loading hot jobs"}>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
      <MillionsOfJobs></MillionsOfJobs>
    </div>
  );
};

export default Home;
