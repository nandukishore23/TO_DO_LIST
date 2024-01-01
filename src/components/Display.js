import React, { useState, useEffect } from 'react';
import CreateNewTask from '../Modals/CreateNewTask';
import Card from './Card';

const Display = ({ projectName }) => {
  const [modal, setModal] = useState(false);
  const [projectTaskData, setProjectTaskData] = useState({});

  const toggle = () => {
    setModal(!modal);
  };

  const saveProjectTask = (taskObj) => {
    const projectNameKey = projectName.Name;
    const updatedData = {
      ...projectTaskData,
      [projectNameKey]: [...(projectTaskData[projectNameKey] || []), taskObj],
    };

    localStorage.setItem('projectTaskData', JSON.stringify(updatedData));
    setModal(false);
    setProjectTaskData(updatedData);
  };

  useEffect(() => {
    const storedTaskData = localStorage.getItem('projectTaskData');
    if (storedTaskData) {
      setProjectTaskData(JSON.parse(storedTaskData));
    }
  }, []);

  const updateListArray = (object, index) => {
    let tempList = projectTaskData[projectName.Name];
    tempList[index] = object;
    const updatedData = {
      ...projectTaskData,
      [projectName.Name]: tempList,
    };
    localStorage.setItem('projectTaskData', JSON.stringify(updatedData));
    setProjectTaskData(updatedData);
    window.location.reload();
  };

  const [colors] = useState([
    {
      'primary-color': 'rgba(54, 89, 226, 1)',
      'secondary-color': 'rgba(235, 238, 252, 1)',
    },
    {
      'primary-color': 'rgba(238, 70, 188, 1)',
      'secondary-color': 'rgba(253, 242, 250, 1)',
    },
    {
      'primary-color': 'rgba(63, 161, 227, 1)',
      'secondary-color': 'rgba(236, 246, 252, 1)',
    },
    {
      'primary-color': 'rgba(18, 187, 35, 1)',
      'secondary-color': 'rgba(231, 248, 233, 1)',
    },
  ]);
  return (
    <>
      <div className='frames'>
        <div className='frame1'>
          <div className='head'>
          <p className='frame-heading' style={{ backgroundColor: colors[0]['secondary-color'], color: colors[0]['primary-color'] }}><li></li>To Do</p>
          </div>
          <div className='line'>
            <div className='cards'>
                {projectTaskData[projectName.Name] &&
                projectTaskData[projectName.Name].map((object, index) => {
                    if (object.Status === 'To Do') {
                        return <Card key={index} object={object} index={index} updateListArray={updateListArray} color={colors[0]}/>;
                    }
                    return null;
                })}
            </div>
            <button className='addnewbtn' onClick={toggle} style={{ backgroundColor: colors[0]['secondary-color'], color: colors[0]['primary-color'] }}>
              + Add New 
            </button>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className='frame2'>
          <div className='head'>
              <p className='frame-heading' style={{ backgroundColor: colors[1]['secondary-color'], color: colors[1]['primary-color'] }}><li></li>In Progress</p>
            </div>         
            <div className='line'>
            <div className='cards'>
                {projectTaskData[projectName.Name] &&
                projectTaskData[projectName.Name].map((object, index) => {
                    if (object.Status === 'In Progress') {
                        return <Card key={index} object={object} index={index} updateListArray={updateListArray} color={colors[1]}/>;
                    }
                    return null;
                })}
            </div>
            <button className='addnewbtn' onClick={toggle} style={{ backgroundColor: colors[1]['secondary-color'], color: colors[1]['primary-color'] }}>
              + Add New 
            </button>
          </div>
        </div>
        <div className='frame3'>
          <div className='head'>
            <p className='frame-heading' style={{ backgroundColor: colors[2]['secondary-color'], color: colors[2]['primary-color'] }}><li></li>In Review</p>
          </div> 
         <div className='line'>
            <div className='cards'>
              {projectTaskData[projectName.Name] &&
                projectTaskData[projectName.Name].map((object, index) => {
                if (object.Status === 'In Review') {
                    return <Card key={index} object={object} index={index} updateListArray={updateListArray} color={colors[2]}/>;
                }
                return null;
                })}
            </div>
            <button className='addnewbtn' onClick={toggle} style={{ backgroundColor: colors[2]['secondary-color'], color: colors[2]['primary-color'] }}>
              + Add New 
            </button>
          </div>
        </div>
        <div className='frame4'>
          <div className='head'>
            <p className='frame-heading' style={{ backgroundColor: colors[3]['secondary-color'], color: colors[3]['primary-color'] }}><li></li>Completed</p>
          </div>          <div className='line'>
            <div className='cards'>
                {projectTaskData[projectName.Name] &&
                projectTaskData[projectName.Name].map((object, index) => {
                    if (object.Status === 'Completed') {
                        return <Card key={index} object={object} index={index} updateListArray={updateListArray} color={colors[3]}/>;
                    }
                    return null;
                })}
            </div>
            <button className='addnewbtn' onClick={toggle} style={{ backgroundColor: colors[3]['secondary-color'], color: colors[3]['primary-color'] }}>
              + Add New
            </button>
          </div>
        </div>
      </div>
      <CreateNewTask toggle={toggle} modal={modal} save={(taskObj) => saveProjectTask(taskObj)} />
    </>
  );
};

export default Display;
