import React, { useState, useEffect } from 'react';
import CreateProject from '../Modals/CreateProject';
import AppLogo from './images/applogo.png';
import TodoData from './TodoData';

const Sidebar = () => {
    const [modal, setModal] = useState(false);
    const [projectList, setProjectList] = useState([]);
    const [selectedProject, setSelectedProject] = useState('');
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    const toggle = () => {
        setModal(!modal);
    }

    const saveProject = (taskObj) => {
        let tempList = [...projectList, taskObj];
        localStorage.setItem('projectData', JSON.stringify({ projectList: tempList, activeButtonIndex }));
        setModal(false);
        setProjectList(tempList);
    }

    const handleProjectClick = (index) => {
        setSelectedProject(projectList[index]);
        setActiveButtonIndex(index);
        localStorage.setItem('projectData', JSON.stringify({ projectList, activeButtonIndex: index }));
    }
    
    useEffect(() => {
        let storedData = localStorage.getItem('projectData');
        if (storedData) {
            let { projectList, activeButtonIndex } = JSON.parse(storedData);
            setProjectList(projectList);
            setActiveButtonIndex(activeButtonIndex);
            setSelectedProject(projectList[activeButtonIndex]);
        }
    }, [])
    return (
        <>
        <div className='sidebar'>
            <div className='task-board'>
                <div className='heading'>
                        <img src={AppLogo} alt='applogo' className='applogo'></img>
                        <p>Task boards</p>
                    </div>
                    <div className='task-container'>
                        <div className='projectList'>
                            {projectList && projectList.map((object, index) => (
                                <p
                                    key={index}
                                    className={` ${activeButtonIndex === index ? 'active' : ''}`} 
                                    onClick={() => handleProjectClick(index)}
                                >
                                    {object.Name}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className='projectBtn'>
                        <p onClick={toggle}>+ Add New Project</p>
                    </div>
            </div>
            
        </div>
        <div className='content'>
            {selectedProject && <TodoData project={selectedProject} />}
        </div>
        <CreateProject toggle={toggle} modal={modal} save={saveProject} />
        </>
    );
};

export default Sidebar;
