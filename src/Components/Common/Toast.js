import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Successfully toasted!');
const Toast = () => {
    return (

        <div>
            <h1></h1>
            <button onClick={notify}>Make me a toast</button>
            <Toaster position="top-center"
                reverseOrder={false} />
        </div>
    );
};

export default Toast;
