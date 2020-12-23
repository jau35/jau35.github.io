import React, { useState } from 'react';

import Button from '../../../Common/Button';

import './index.css';

const JobCardForm = (props) => {
    function initVal(v) {
        return v ? v : '';
    }

    const [title, setTitle] = useState(initVal(props.title));
    const [company, setCompany] = useState(initVal(props.company));
    const [location, setLocation] = useState(initVal(props.location));
    const [description, setDescription] = useState(initVal(props.description));
    const [startDate, setStartDate] = useState(initVal(props.startDate));
    const [endDate, setEndDate] = useState(initVal(props.endDate));

    const handleForm = (e) => {
        e.preventDefault();

        props.onSubmitCallback({
            title,
            company,
            location,
            description,
            startDate,
            endDate,
            _datetimeCreated: props._datetimeCreated
                ? props._datetimeCreated
                : Date.now(),
            _deletedFlg: false,
        });
    };

    return (
        <div className='job-card-form-container'>
            <form onSubmit={(e) => handleForm(e)}>
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
                <Button
                    text='Cancel'
                    onClickCallback={() => props.onCancelCallback()}
                    color='white'
                />
                <Button text='Submit' type='submit' />
            </form>
        </div>
    );
};

export default JobCardForm;
