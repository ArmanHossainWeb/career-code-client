import React from "react";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = UseAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // process salary range data
    const { min, max, currency, ...newjob } = data;
    newjob.salaryRange = { min, max, currency };
    console.log(newjob);

    // process requirements
    newjob.requirements = newjob.requirements
      .split(",")
      .map((req) => req.trim());

    // process responsibilities
    newjob.responsibilities = newjob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newjob.status = "active";

    // send data to database
    axios
      .post("http://localhost:3000/jobs", newjob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This new job has been saved and Published.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(Object.keys(newjob).length);
  };
  return (
    <div>
      <h2 className="text-xl">please add a job </h2>
      <form className="my-5" onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Enter job title"
          />

          <label className="label">company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Enter Company Name"
          />

          <label className="label">location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="enter company location"
          />

          <label className="label">company logo</label>
          <input
            type="text"
            name="company_logo"
            className="input"
            placeholder="enter company logo URL"
          />
        </fieldset>

        {/* job type  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">job type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="on-site"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* job category  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">job category</legend>
          <select
            name="jobCategory"
            defaultValue="select job category"
            className="select"
          >
            <option disabled={true}>job category</option>
            <option>Engineering</option>
            <option>Marketing Specialist</option>
            <option>Finance Manager</option>
            <option>Project Manager</option>
            <option>DevOps Engineer</option>
          </select>
        </fieldset>

        {/* application deadline   */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">application deadline </legend>

          <input name="deadline" type="date" className="input" />
        </fieldset>

        {/* salary range   */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">salary range</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <label className="label">minimum salary</label>
              <input
                type="text"
                name="min"
                className="input"
                placeholder="minimum salary"
              />
            </div>

            <div>
              <label className="label">maximum salary</label>
              <input
                type="text"
                name="max"
                className="input"
                placeholder="maximum salary"
              />
            </div>

            <div>
              <label className="label">currency</label>
              <select
                name="currency"
                defaultValue="select a currency "
                className="select"
              >
                <option disabled={true}>select a currency</option>
                <option>BDT</option>
                <option>INR</option>
                <option>PKR</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* job description  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend"> job description</legend>

          <label className="label"> job description</label>
          <input
            type="text"
            name="description"
            className="input h-20"
            placeholder="Enter job description"
          />
        </fieldset>

        {/* job requirements  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend"> job requirements</legend>

          <label className="label"> job requirements</label>
          <input
            type="text"
            name="requirements"
            className="input h-20"
            placeholder="Enter job requirements (using comma )"
          />
        </fieldset>
        {/* job responsibilities  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend"> job responsibilities</legend>

          <label className="label"> job responsibilities</label>
          <input
            type="text"
            name="responsibilities"
            className="input h-20"
            placeholder="Enter job responsibilities (using comma )"
          />
        </fieldset>

        {/* hr info  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="Enter HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user.email}
            className="input"
            placeholder="Enter HR Email"
          />
        </fieldset>
        <input type="submit" value="Add job" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddJob;
