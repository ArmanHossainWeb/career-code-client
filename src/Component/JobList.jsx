import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <h2 className="text-xl">jobs created by you : {jobs.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Job Title</th>
                <th>Deadline</th>
                <th>View Application</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {jobs.map((job, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.deadline}</td>
                  <td><Link to={`/application/${job._id}`}>View Applications</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobList;
