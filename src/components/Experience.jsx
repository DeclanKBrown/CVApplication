import '../styles/tabs.css'
import { useState } from 'react';

export default function Experience() {
  const [toggle, setToggle] = useState('closed');
  
  function toggleMenu() {
    setToggle((prevToggle) => (prevToggle === 'open' ? 'closed' : 'open'));
  }
  
  const [experiences, setExperiences] = useState([]);
  
  function addExperience() {
    const newExperience = {
      name: '',
      time: '',
      points: [''],
    };

    setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
  }

  function newExperience() {
    return (
        <>
            <div className='details' key={index}>
            <h2>Company/Project</h2>
            <h3>Name</h3>
            <input type='text' name='name' value={experience.name} />
            <h3>Time</h3>
            <input type='text' name='time' value={experience.time} />
            <h3>Points</h3>
            <div className='points'>
                {experience.points.map((point, pointIndex) => (
                <div className='point' key={pointIndex}>
                    <input type='text' value={point}/>
                    <button className='addPoint'>+</button>
                </div>
                ))}
            </div>
            </div>
        </>
    )
  }


  return (
    <div className={'tab ' + toggle}>
      <div className='tab-top'>
        <h1>Experience</h1>
        {toggle === 'open' ? ( <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,10L12,15L17,10H7Z" /></svg> ) : ( <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,15L12,10L17,15H7Z" /></svg> ) }
      </div>
      {toggle === 'open' ? (
        <>
          {experiences.map((experience, index) => (
            <div className='experience-disp' key={index}>
                <div className='exp-cont'>
                    <h2>{experience.name}</h2>
                </div>
            </div>
          ))}
          <div className='add-cont'>
            <button className='addExp' onClick={newExperience}>+</button>
          </div>
        </>
      ) : null}
    </div>
  );
}

