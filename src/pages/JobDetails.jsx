import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id,title} = useLoaderData()
    return (
        <div>
            <h1 className='text-2xl'>{title}</h1>
            <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;