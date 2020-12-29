import React from 'react';

import './index.css';

const Button = (props) => {
    return (
        <button
            className={'primary-btn' + (props.color ? ' ' + props.color : '')}
            data-text={props.text ? props.text : undefined}
            onClick={
                props.onClickCallback
                    ? () => props.onClickCallback()
                    : undefined
            }
            type={props.type ? props.type : 'button'}
        >
            {props.text &&
                props.text.split('').map((v, i) => {
                    return v === ' ' ? ' ' : <span key={i}>{v}</span>;
                })}

            {props.icon && <i className={'fa ' + props.icon}></i>}
        </button>
    );
};

export default Button;
