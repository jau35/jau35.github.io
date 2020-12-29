import React from 'react';

import Button from '../Button';

import './index.css';

const Dialog = (props) => {
    let { title, children, show, setShow, actions } = props;

    function onClick(callback) {
        callback();
        setShow(false);
    }

    let content = show ? (
        <div className='dialog-overlay'>
            <div className='dialog-panel'>
                <div className='dialog-header'>
                    <h1 className='dialog-title'>{title}</h1>
                </div>
                <div className='dialog-content'>{children}</div>
                <div className='dialog-btns'>
                    {actions.map((val, index) => {
                        return (
                            <Button
                                key={index}
                                text={val.text}
                                color={val.color}
                                onClickCallback={() => onClick(val.callback)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    ) : null;

    return content;
};

export default Dialog;
