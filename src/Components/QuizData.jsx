import React from 'react';
import { Link } from 'react-router-dom';
import './QuizData.css';

const QuizData = ({ quiz }) => {

    const { logo, name, total, id } = quiz;

    return (
        <div className='quiz-section'>
            <img src={logo} alt="" />
            <div className='flex justify-center items-center'>
                {/* was;  justify-between */}
                <div className='font-bold'>
                    <p>Project: {name}</p>
                    <p>Total: {total}</p>
                </div>
                <div className='start-btn font-bold '>
                    <Link className='' to={`/quiz/${id}`}><button className=''>Get Start</button></Link>
                </div>
            </div>
        </div>
    );
};

export default QuizData;