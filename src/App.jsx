import Page from './components/Page'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

export default function App() {

    const [personal, setPersonal] = useState({
        Fullname: '',
        Email: '',
        PhoneNumber: '',
        Location: '',
        LinkedIn: '',
        GitHub: '',
    });
    
    const [education, setEducation] = useState({
        School: '',
        Degree: '',
        Startdate: '',
        Enddate: '',
        Location: '',
    });

    const [experience, setExperience] = useState({
        Company: '',
        Position: '',
        Startdate: '',
        Enddate: '',
        Location: '',
        Description: '',
    });
    
    function clear() {
        setPersonal({
            Fullname: '',
            Email: '',
            PhoneNumber: '',
            Location: '',
            LinkedIn: '',
            GitHub: '',
        });
        setEducation({
            School: '',
            Degree: '',
            Startdate: '',
            Enddate: '',
            Location: '',
        });
        setExperience({
            Company: '',
            Position: '',
            Startdate: '',
            Enddate: '',
            Location: '',
            Description: '',
        })
    }
    
    function example() {
        setPersonal({
            Fullname: 'John Smith',
            Email: 'johnsmith@example.com',
            PhoneNumber: '0123 456 789',
            Location: 'Melbourne, Austrlia',
            LinkedIn: 'Linkedin.com/johnsmith',
            GitHub: 'Github.com/johnsmith',
        });
        setEducation({
            School: 'RMIT',
            Degree: 'Bacholar of Software Engineering',
            Startdate: '01/01/2023',
            Enddate: 'Present',
            Location: 'Melbourne, Australia',
        });
        setExperience({
            Company: 'Apple',
            Position: 'Senior Developer',
            Startdate: '2018',
            Enddate: 'Present',
            Location: 'New York',
            Description: 'As a Senior Developer at Apple, I have been responsible for contributing to the development and maintenance of cutting-edge software solutions. My role involves collaborating with cross-functional teams, designing and implementing complex features, optimizing code for performance, and ensuring the overall quality and reliability of software products.',
        })
    }
        
    function handleChange(value, param) {
        setPersonal({ ...personal, [param]: value });
    }
    
    function handleChangeEducation(value, param) {
        setEducation({ ...education, [param]: value });
    }

    function handleChangeExperience(value, param) {
        setExperience({...experience, [param]: value})
    }
    
    return (
        <>
            <Sidebar
                handleChange={handleChange}
                personal={personal}
                clear={clear}
                example={example}
                formData={education}
                handleChangeEducation={handleChangeEducation}
                education={education}
                handleChangeExperience={handleChangeExperience}
                experience={experience}
            />
            <Page 
                personal={personal} 
                education={education} 
                experience={experience}
                />
        </>
    );
}    