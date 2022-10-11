import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from './QuizData';
import './Home.css';

const Home = () => {

    const allQuizData = useLoaderData();
    const quizData = allQuizData.data;

    return (
        <div className='my-4 mx-8'>
            <h2 className='text-3xl font-bold text-blue-500 text-center'>Welcome to The Quiz Challenge</h2>
            <p className='mt-4 p-4 border-2 rounded-md'>The Quiz Challenge is a quiz website for the beginners of web developer. The site provides you some valuable question of Important topics like: React, JavaScript,CSS, HTML, Github and so on.</p>
            <div className='quiz mt-6'>
                {
                    quizData.map(quiz => <QuizData key={quiz.id} quiz={quiz}></QuizData>)
                }
            </div>
        </div>
    );
};

export default Home;