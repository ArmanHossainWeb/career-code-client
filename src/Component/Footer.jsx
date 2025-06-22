import React from "react";
import jobBoxLogo from "../assets/image/jobBox-logo.svg";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal w-11/12 mx-auto p-10">
      <div>
        <img src={jobBoxLogo} alt="" />
        <p>
          JobBox is the heart of the design community <br /> and the best
          resource to discover and connect with <br /> designers and jobs
          worldwide.
        </p>
        <div className="grid grid-flow-col gap-4 my-2">
          <a
            href="https://x.com/ArmanHossa17674"
            className="bg-primary p-2 rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/"
            className="bg-primary p-2 rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/arman.hossain.848918"
            className="bg-primary p-2 rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <div className="">
        <h1 className="text-2xl font-semibold">Dowenload App</h1>
        <p className="text-gray-500">
          Download our Apps and get extra 15% <br /> Discount on your first
          Order…!
        </p>
        {/* apple store  */}
        <div className="text-white bg-primary rounded-xl flex justify-between px-2  items-center ">
          <svg
            className="size-8"
            viewBox="0 0 384 512"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M318.7 268c-.5-53.9 44.1-79.6 46-80.8-25.1-36.7-64.2-41.7-77.9-42.2-33.2-3.4-64.7 19.5-81.5 19.5-16.8 0-42.9-19.1-70.5-18.6-36.2.5-69.5 21.1-88 53.7-37.7 65.4-9.6 162.4 26.9 215.5 17.8 26 39 55.1 66.9 54 27.1-1.1 37.4-17.5 70-17.5 32.6 0 41.4 17.5 70.1 17 28.9-.5 47.1-26.4 64.7-52.5 20.5-29.8 28.9-58.8 29.4-60.3-.6-.3-55.8-21.4-56.3-84.8zM248.5 82.7c15.3-18.6 25.6-44.5 22.8-70.6-22 0.9-48.6 14.6-64.4 33.1-14.1 16.3-26.5 42.5-23.2 67.5 24.5 1.9 49.5-12.4 64.8-30z" />
          </svg>

          <div>
            <p>Dowenload on the </p>
            <h1 className="font-semibold">App Store</h1>
          </div>
        </div>
        {/* play store  */}
        <div className="text-white bg-primary rounded-xl flex justify-between px-2 items-center">
          <img
            className="size-8"
            src="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/google-play.png"
            alt=""
          />
          <div>
            <p>Dowenload on the </p>
            <h1 className=" font-semibold">Play Store</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
