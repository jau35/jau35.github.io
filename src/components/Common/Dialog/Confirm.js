import React from 'react';

import Dialog from './Dialog';

const Confirm = (props) => {
    let { heading, content, show, setShow, onConfirm, onCancel } = props;

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
