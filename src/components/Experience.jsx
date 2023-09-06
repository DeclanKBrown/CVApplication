import { useState } from 'react';
import '../styles/tabs.css';

export default function Experience() {
  const [toggle, setToggle] = useState('closed');
  const [experiences, setExperiences] = useState([]);
  const [newExperienceSwitch, setExperienceSwitch] = useState(false);
  const [newExperienceData, setNewExperienceData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    points: [''],
  });

  function toggleMenu() {
    setToggle((prevToggle) => (prevToggle === 'open' ? 'closed' : 'open'));
  }

  function addExperience() {
    setExperiences((prevExperiences) => [...prevExperiences, newExperienceData]);
    setNewExperienceData({
      name: '',
      startDate: '',
      endDate: '',
      points: [''],
    });
    setExperienceSwitch(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewExperienceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function addPoint() {
    setNewExperienceData((prevData) => ({
      ...prevData,
      points: [...prevData.points, ''],
    }));
  }

  function handlePointChange(index, value) {
    const updatedPoints = [...newExperienceData.points];
    updatedPoints[index] = value;
    setNewExperienceData((prevData) => ({
      ...prevData,
      points: updatedPoints,
    }));
  }

  return (
    <div className={'tab ' + toggle}>
      <div className='tab-top'>
        <h1>Experience</h1>
        {toggle === 'open' ? (
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        ) : (
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M7,15L12,10L17,15H7Z" />
          </svg>
        )}
      </div>
      {toggle === 'open' && (
        <>
          {newExperienceSwitch ? (
            <div className='details'>
              <h3>Name</h3>
              <input
                type='text'
                name='name'
                placeholder='Apple'
                value={newExperienceData.name}
                onChange={handleInputChange}
              />
              <div className='time'>
                <h3 id='start'>Start Date</h3>
                <input
                className='dates-start'
                  type='text'
                  name='start-date'
                  placeholder='01/01/2022'
                  value={newExperienceData.startDate}
                  onChange={handleInputChange}
                />
                <span className='dash'>
                  -
                </span>
                <h3 id='end'>End Date</h3>
                <input
                  className='dates-end'
                  type='text'
                  name='end-date'
                  placeholder='01/01/2023'
                  value={newExperienceData.endDate}
                  onChange={handleInputChange}
                />
              </div>
              <h3>Points</h3>
              <div className='points'>
                {newExperienceData.points.map((point, pointIndex) => (
                  <div className='point' key={pointIndex}>
                    <input
                      type='text'
                      placeholder='Made change X resulting in Y'
                      value={point}
                      onChange={(e) => handlePointChange(pointIndex, e.target.value)}
                    />
                    <button className='addPoint' onClick={addPoint}>
                      +
                    </button>
                  </div>
                ))}
              </div>
              <div className='buttons-cont'>
                <button className='delete'>Delete</button>
                <button className='cancel' onClick={() => setExperienceSwitch(false)}>Cancel</button>
                <button className='save' onClick={addExperience}>Save</button>

              </div>
            </div>
          ) : (
            <>
              {experiences.map((experience, index) => (
                <div className='experience-disp' key={index} onClick={() => setExperienceSwitch(true)}>
                  <div className='exp-cont'>
                    <h2>{experience.name}</h2>
                  </div>
                </div>
              ))}
              <div className='add-cont'>
                <button className='addExp' onClick={() => setExperienceSwitch(true)}>
                  +
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
