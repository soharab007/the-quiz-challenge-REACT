import React from 'react';

const Blog = () => {
    return (
        <div className='m-8'>
            <div>
                <h1 className='font-bold  text-orange-700  text-2xl'>1. What's the purpose of React Router?</h1><br />
                <p className='px-8'>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                </p>
            </div><br />
            <div>
                <h4 className='font-bold text-orange-700 text-2xl'>2. How Does Context API works?</h4>
                <br />
                <p className='px-8'>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div><br /><br />
            <div>
                <h4 className='font-bold  text-orange-700  text-2xl'>3. What is 'useHref()' hook?</h4>
                <br />
                <p className='px-8'>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    <br /><br />
                    const refContainer = useRef(initialValue);
                    <br /><br />
                    There are two main uses of useRef that are explained in the following sections: Accessing the DOM nodes or React elements and keeping a mutable variable.
                </p>
            </div>
        </div>
    );
};

export default Blog;