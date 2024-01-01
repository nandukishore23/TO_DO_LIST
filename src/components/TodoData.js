import React from 'react';
import Display from './Display.js';
const TodoData = ({ project }) => {
    

    return (
        <>
            <div className='tododata'>
                <div className='projectName'>
                    <p>{project.Name}</p>
                </div>
                <div className='data-content'>
                    <Display projectName = {project} />
                </div>
            </div>
        </>
    );
};

export default TodoData;
