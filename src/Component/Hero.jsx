import React from "react";
import { motion } from "motion/react";
import banner1 from "../assets/image/banner-image/banner1.png"
import banner2 from "../assets/image/banner-image/banner2.png"

const Hero = () => {
  return (
    <div style={{backgroundImage:`url(https://jobbox-nextjs-v4.vercel.app/_next/static/media/bg-banner.04bbd282.svg)`}}>
      <div className="w-11/12 mx-auto" >
      <div className="hero max-w-7xl mx-auto min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
            src={banner1}
            animate={{y:[100,150,100]}}
            transition={{duration:5,repeat:Infinity}}
            className="max-w-sm rounded-lg shadow-2xl"
          />
            <motion.img
            src={banner2}
            animate={{x:[100,150,100]}}
            transition={{duration:10, delay:5,repeat:Infinity}}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          </div>
          <div className="flex-1">
            <motion.h1 className="text-5xl font-bold">
              The <span className="text-primary">Easiest Way </span> to Get Your
              New Job
            </motion.h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
