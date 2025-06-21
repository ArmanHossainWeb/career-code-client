import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();

  console.log(jobId, user);
  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const facebook = form.facebook.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      facebook,
    };

    axios.post("http://localhost:3000/application", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset()
          
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-xl text-center">
        Apply for this job:{" "}
        <Link to={`/jobs/${jobId}`}>
          <span className="text-red-500">details</span>
        </Link>
      </h1>

      <form
        onSubmit={handleApply}
        className="bg-base-200 rounded-box mx-auto w-xs my-5"
      >
        <fieldset className="fieldset  p-4">
          <label className="label">Linked In</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="enter your linkedin url"
          />
        </fieldset>
        <fieldset className="fieldset  p-4">
          <label className="label">github</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="enter your github url"
          />
        </fieldset>
        <fieldset className="fieldset p-4">
          <label className="label">facebook</label>
          <input
            type="url"
            name="facebook"
            className="input"
            placeholder="enter your facebook url"
          />
        </fieldset>
        <input type="submit" className="btn btn-primary w-full p-2" />
      </form>
    </div>
  );
};

export default JobApply;
