import React from 'react';

import Dialog from './Dialog';

import './Dialog.css';

const Confirm = (props) => {
    let { title, content, show, setShow, onConfirm, onCancel } = props;

    return (
        <Dialog
            show={show}
            setShow={setShow}
            title={title}
            actions={[
                {
                    text: 'Cancel',
                    callback: onCancel,
                },
                {
                    text: 'Confirm',
                    callback: onConfirm,
                },
            ]}
        >
            {content}
        </Dialog>
    );
};

export default Confirm;
