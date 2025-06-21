import React, { use } from "react";
import ApplicationRow from "./ApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  return (
    <div>
      <h1>job application so far: {applications.length}</h1>

      {/* table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                applications.map((application,index) =>
                <ApplicationRow
                 key={application._id} 
                 index={index}
                 application={application}>
                 </ApplicationRow>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
