import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplication = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  return (
    <div>
      <h1>
        {applications.length}application for : {job_id}
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Deadline</th>
                <th>View Application</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {/* {applications.map((application) => (
                <tr key={application._id}>
                  <td>1</td>
                  <td>{application.applicant}</td>
                </tr>
              ))} */}
              {Array.isArray(applications) &&
                applications.map((application, index) => (
                  <tr key={application._id}>
                    <td>{index + 1}</td>
                    <td>{application.applicant}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewApplication;
