import React, { useState, useEffect, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import _ from 'lodash';

import JobCard from './JobCard';
import JobCardDialog from './JobCardDialog';
import Button from '../../../Common/Button';
import Spinner from '../../../Common/Spinner';
import { ConfigContext } from '../../../App';

import './index.css';

const FB_STORAGE_EXPERIENCE_ROOT = 'about/experience';

const Experience = () => {
    const context = useContext(ConfigContext);

    const [showNewJobDialog, setShowNewJobDialog] = useState(false);
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

    return (
        <section
            id='experience'
            className='job-area offwhite section-gap-top section-gap-bottom-90'
        >
            <div className='container'>
                <div className='row d-flex'>
                    <div className='col-lg-12'>
                        <div className='section-title'>
                            <h2>Experience</h2>
                        </div>
                    </div>
                </div>

                {context.loggedInUser && (
                    <>
                        <Button
                            text='Add New'
                            onClickCallback={() => setShowNewJobDialog(true)}
                        ></Button>
                        <JobCardDialog
                            heading='Add Job Experience'
                            show={showNewJobDialog}
                            setShow={setShowNewJobDialog}
                            onSubmit={(o) => createNewJob(o)}
                            onCancel={() => {}}
                        ></JobCardDialog>
                    </>
                )}

                <div className='row'>
                    {jobsArr ? (
                        jobsArr.map((value, _) => {
                            return (
                                <JobCard
                                    key={value.id}
                                    job={value}
                                    updateJob={(o) => updateJob(o)}
                                    deleteJob={(o) => deleteJob(o)}
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
