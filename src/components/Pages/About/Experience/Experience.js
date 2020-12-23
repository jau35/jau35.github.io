import React, { useState, useEffect, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import _ from 'lodash';

import JobCard from './JobCard';
import JobCardForm from './JobCardForm';
import Button from '../../../Common/Button';
import Spinner from '../../../Common/Spinner';
import { ConfigContext } from '../../../App';

const FB_STORAGE_EXPERIENCE_ROOT = 'about/experience';

const Experience = () => {
    const context = useContext(ConfigContext);

    const [showAddNewForm, setShowAddNewForm] = useState(false);
    const [jobsArr, setJobsArr] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const unsubscribe = firebase
            .database()
            .ref()
            .child(FB_STORAGE_EXPERIENCE_ROOT)
            .orderByChild('_deletedFlg')
            .equalTo(false)
            .on('value', (snapshot) => {
                if (snapshot && isMounted) {
                    var arr = _.sortBy(
                        _.map(snapshot.val(), (val, key) => {
                            return { id: key, ...val };
                        }),
                        '_datetimeCreated'
                    );

                    setJobsArr(arr.reverse());
                }
            });

        return () => {
            unsubscribe();
            isMounted = false;
        };
    }, []);

    function createNewJob(o) {
        const newPostKey = firebase
            .database()
            .ref()
            .child(FB_STORAGE_EXPERIENCE_ROOT)
            .push().key;
        var updates = {};
        updates[FB_STORAGE_EXPERIENCE_ROOT + '/' + newPostKey] = o;
        firebase.database().ref().update(updates);

        toggleAddNewForm();
    }

    function updateJob(o) {
        let { id, ...val } = o;

        var updates = {};
        updates[FB_STORAGE_EXPERIENCE_ROOT + '/' + id] = val;
        firebase.database().ref().update(updates);
    }

    function deleteJob(o) {
        // soft-delete jobs in case they are deleted by accident
        o._deletedFlg = true;
        updateJob(o);
    }

    function toggleAddNewForm() {
        setShowAddNewForm(!showAddNewForm);
    }

    return (
        <section
            id='experience'
            className='job-area offwhite section-gap-top section-gap-bottom-90'
        >
            <div className='container'>
                <div className='row d-flex'>
                    <div className='col-lg-12'>
                        <div className='section-title'>
                            <h2>Job History</h2>
                        </div>
                    </div>
                </div>

                {context.loggedInUser &&
                    (showAddNewForm ? (
                        <JobCardForm
                            onSubmitCallback={(o) => createNewJob(o)}
                            onCancelCallback={() => toggleAddNewForm()}
                        ></JobCardForm>
                    ) : (
                        <Button
                            text='Add New'
                            onClickCallback={() => toggleAddNewForm()}
                        ></Button>
                    ))}

                <div className='row'>
                    {jobsArr ? (
                        jobsArr.map((value, index) => {
                            return (
                                <JobCard
                                    key={index}
                                    job={value}
                                    updateJobCallback={(o) => updateJob(o)}
                                    deleteJobCallback={(o) => deleteJob(o)}
                                ></JobCard>
                            );
                        })
                    ) : (
                        <Spinner></Spinner>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
