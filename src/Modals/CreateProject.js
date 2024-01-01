import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateProject = ({modal, toggle, save}) => {
    const [projectName, setProjectName] = useState('');

    const handleChange = (e) => {
       const {name, value} = e.target;

       if(name === 'projectName'){
            setProjectName(value);
       }
       
    }
    const handleSave = () =>{
        let taskObj = {};
        taskObj['Name'] = projectName;
        save(taskObj);
    }
    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Project</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group name'>
                            <label>Project Name</label>
                            <input type='text' className='form-control' value={projectName} onChange = {handleChange} name='projectName' required></input>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create Task
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        
        </>
    );
};

export default CreateProject;