import React, { useState } from 'react';
import EditProjectTask from '../Modals/EditProjectTask';

const Card = ({ object, index, updateListArray, color }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (object) => {
    updateListArray(object, index);
  };

  return (
    
    <div key={index} className='projectTaskList card' onClick={() => setModal(true)}>
      <div className='task-display-card'>
        <div className='title'>
          <p>{object.Name}</p>
        </div>
        <div className='inner'>
          <div className='div1'>
          <div className='label'>
                <p>Start date</p>
            </div>
            <div className='date' style={{ backgroundColor: color['secondary-color'] }}>
              <p style={{ color: color['primary-color'] }}>
                {object.StartDate}
              </p>
            </div>
          </div>
          <div className='div2'>
          <div className='label'>
                <p>Deadline</p>
            </div>
            <div className='date' style={{ backgroundColor: color['secondary-color'] }}>
              <p  style={{ color: color['primary-color'] }}>
                {object.Deadline}
              </p>
            </div>
          </div>
        </div>
      </div>
      <EditProjectTask modal={modal} toggle={toggle} updateTask={updateTask} taskDetails={object} />
    </div>
  );
};

export default Card;
