import React, { useState, useContext } from 'react';

import './index.css';

import Button from '../../../Common/Button';
import Confirm from '../../../Common/Dialog/Confirm';
import { ConfigContext } from '../../../App';
import JobCardForm from './JobCardForm';

const JobCard = (props) => {
    const context = useContext(ConfigContext);

    const [isEditing, setIsEditing] = useState(false);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

    const dateText = props.job.startDate + ' to ' + props.job.endDate;

    let confirmationDialog = (
        <Confirm
            show={showConfirmationDialog}
            setShow={setShowConfirmationDialog}
            title='Delete Experience?'
            content={
                <>
                    Are you sure you want to delete the experience of{' '}
                    <b>{props.job.title}</b> at <b>{props.job.company}</b>?
                </>
            }
            onCancel={() => {}}
            onConfirm={() => props.deleteJobCallback(props.job)}
        />
    );

    return (
        <>
            {isEditing ? (
                <JobCardForm
                    {...props.job}
                    onSubmitCallback={(o) => {
                        props.updateJobCallback({ id: props.job.id, ...o });
                        setIsEditing(false);
                    }}
                    onCancelCallback={() => setIsEditing(false)}
                ></JobCardForm>
            ) : (
                <div className='single-job'>
                    <div className='top-sec d-flex justify-content-between'>
                        <div className='top-left'>
                            <h4 className='job-title'>{props.job.title}</h4>
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
                                            setIsEditing(true)
                                        }
                                    />
                                </div>
                            )}
                            <h5>{props.job.company}</h5>
                            <p>{props.job.location}</p>
                        </div>
                        <div className='top-right'>
                            <Button text={dateText} />
                        </div>
                    </div>
                    <div
                        className='bottom-sec wow fadeIn'
                        data-wow-duration='2s'
                    >
                        {props.job.description}
                    </div>
                </div>
            )}
        </>
    );
};

export default JobCard;