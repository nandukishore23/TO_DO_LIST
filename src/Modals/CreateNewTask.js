import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateNewTask = ({ modal, toggle, save }) => {
  const [projectTaskName, setProjectTaskName] = useState('');
  const [projectTaskStartDate, setProjectTaskStartDate] = useState('');
  const [projectTaskDeadline, setProjectTaskDeadline] = useState(null);
  const [projectTaskStatus, setProjectTaskStatus] = useState('To Do');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'projectTaskName') {
      setProjectTaskName(value);
    } else if (name === 'projectTaskStartDate') {
      setProjectTaskStartDate(value);
    } else if (name === 'projectTaskDeadline') {
      setProjectTaskDeadline(value);
    } else {
      setProjectTaskStatus(value);
    }
  };

  const handleSave = () => {
    let taskObj = {
      Name: projectTaskName,
      StartDate: projectTaskStartDate,
      Deadline: projectTaskDeadline,
      Status: projectTaskStatus,
    };

    save(taskObj);
  };

  return (
    <>
    <div className='modals'>
      <Modal isOpen={modal} toggle={toggle} className="custom-modal">
        <ModalHeader toggle={toggle}>Add New Task</ModalHeader>
        <ModalBody>
          <form className='task-form'>
            <div className='form-group name'>
              <label>Name of the Task</label>
              <input type='text' className='form-control' value={projectTaskName} placeholder='Task name'
                onChange={handleChange}name='projectTaskName' required></input>
            </div>
            <div className='dates'>
              <div className='form-group data'>
                <label>Start Date</label>
                <input type='date' className='form-control' value={projectTaskStartDate} 
                  onChange={handleChange} name='projectTaskStartDate' required></input>
              </div>
              <div className='form-group data'>
                <label>Deadline</label>
                <input type='date' className='form-control' value={projectTaskDeadline}
                  onChange={handleChange} name='projectTaskDeadline' required></input>
              </div>
            </div>
            
            <div className='form-group status'>
              <label>Status</label>
              <select className='form-control' value={projectTaskStatus}
                onChange={handleChange} name='projectTaskStatus' required>
                <option value='To Do' selected>To Do</option>
                <option value='In Progress'>In Progress</option>
                <option value='In Review'>In Review</option>
                <option value='Completed'>Completed</option>
              </select>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleSave}>
            Create Task
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  
    </>
  );
};

export default CreateNewTask;
