import React, { Suspense } from "react";
import Hero from "../Component/Hero";
import HotJobs from "../Component/HotJobs";
import MillionsOfJobs from "../Component/millionsOfJobs";
import Stats from "../Component/Stats";
import Navbar from "../Component/Navbar";

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
      <Stats></Stats>
    </div>
  );
};

export default Home;
