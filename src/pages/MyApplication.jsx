import React, { Suspense } from 'react';
import ApplicationStats from '../Component/ApplicationStats';
import ApplicationList from '../Component/ApplicationList';
import UseAuth from '../hooks/UseAuth';
import { myApplicationPromise } from '../api/applicationApi';


const MyApplication = () => {
    const {user} = UseAuth()

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={"data is loading"}>
                <ApplicationList
                myApplicationPromise={myApplicationPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;