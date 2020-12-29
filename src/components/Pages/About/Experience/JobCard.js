import React, { useState, useContext } from 'react';

import './index.css';

import Button from '../../../Common/Button';
import Confirm from '../../../Common/Dialog/Confirm';
import { ConfigContext } from '../../../App';
import JobCardDialog from './JobCardDialog';

const JobCard = (props) => {
    const context = useContext(ConfigContext);

    let { job, updateJob, deleteJob } = props;

    const [showEditJobDialog, setShowEditJobDialog] = useState(false);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

    const dateText = job.startDate + ' to ' + job.endDate;

    let confirmationDialog = (
        <Confirm
            show={showConfirmationDialog}
            setShow={setShowConfirmationDialog}
            heading='Delete Job Experience?'
            content={
                <>
                    Are you sure you want to delete the experience of{' '}
                    <b>{job.title}</b> at <b>{job.company}</b>?
                </>
            }
            onCancel={() => {}}
            onConfirm={() => deleteJob(job)}
        />
    );

    return (
        <>
            <div className='single-job'>
                <div className='top-sec d-flex justify-content-between'>
                    <div className='top-left'>
                        <h4 className='job-title'>{job.title}</h4>
                        {context.loggedInUser && (
                            <div className='button-layout'>
                                <Button
                                    icon='fa-trash'
                                    onClickCallback={() =>
                                        setShowConfirmationDialog(true)
                                    }
                                />
                                {confirmationDialog}
                                <Button
                                    icon='fa-edit'
                                    onClickCallback={() =>
                                        setShowEditJobDialog(true)
                                    }
                                />
                            </div>
                        )}
                        <h5>{job.company}</h5>
                        <p>{job.location}</p>
                    </div>
                    <div className='top-right'>
                        <Button text={dateText} />
                    </div>
                </div>
                <div className='bottom-sec'>{job.description}</div>
            </div>
            <JobCardDialog
                heading='Edit Job Experience'
                show={showEditJobDialog}
                setShow={setShowEditJobDialog}
                job={job}
                onSubmit={(o) => {
                    updateJob({ id: job.id, ...o });
                }}
                onCancel={() => {}}
            ></JobCardDialog>
        </>
    );
};

export default JobCard;
