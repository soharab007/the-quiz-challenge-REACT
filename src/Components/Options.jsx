import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctAnswer }) => {

    const checkAnswer = (opt) => {
        if (opt === correctAnswer) {
            toast("WOW!!! the answer is right");
        }
        else {
            toast("Oops! The answer is wrong");
        }
    }

    return (
        <div>
            <button onClick={() => { checkAnswer(option) }} className='bg-white w-3/4 mt-4 mb-2 gap-2 p-2 rounded'>
                <input type='radio' name='foo' /> {option}
            </button>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="orange" />
        </div>
    );
};

export default Options;