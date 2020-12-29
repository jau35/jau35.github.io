import React, { useState } from 'react';

import Dialog from '../../../Common/Dialog/Dialog';

import './index.css';

const JobCardDialog = (props) => {
    let { heading, show, setShow, onSubmit, onCancel, job = {} } = props;

    const [title, setTitle] = useState(initVal(job.title));
    const [company, setCompany] = useState(initVal(job.company));
    const [location, setLocation] = useState(initVal(job.location));
    const [description, setDescription] = useState(initVal(job.description));
    const [startDate, setStartDate] = useState(initVal(job.startDate));
    const [endDate, setEndDate] = useState(initVal(job.endDate));

    function initVal(v) {
        return v ? v : '';
    }

    let content = (
        <div className='job-card-form-container'>
            <input
                className='single-input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name='title'
                type='text'
                placeholder='Title'
            />
            <input
                className='single-input'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                name='company'
                type='text'
                placeholder='Company'
            />
            <input
                className='single-input'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                name='location'
                type='text'
                placeholder='Location'
            />
            <input
                className='single-input'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                name='startDate'
                type='text'
                placeholder='Start Date'
            />
            <input
                className='single-input'
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                name='endDate'
                type='text'
                placeholder='End Date'
            />
            <textarea
                className='single-textarea'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name='description'
                type='text'
                placeholder='Description'
            />
        </div>
    );

    return (
        <Dialog
            show={show}
            setShow={setShow}
            heading={heading}
            actions={[
                {
                    text: 'Cancel',
                    callback: onCancel,
                },
                {
                    text: 'Submit',
                    callback: () => {
                        onSubmit({
                            title,
                            company,
                            location,
                            description,
                            startDate,
                            endDate,
                            _datetimeCreated: job._datetimeCreated
                                ? job._datetimeCreated
                                : Date.now(),
                            _deletedFlg: false,
                        });
                    },
                },
            ]}
        >
            {content}
        </Dialog>
    );
};

export default JobCardDialog;
