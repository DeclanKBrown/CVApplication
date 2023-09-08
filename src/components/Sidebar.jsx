import '../styles/sidebar.css'
import SidebarTop from './SidebarTop'
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'
import { useState } from 'react'

export default function Sidebar({
    handleChange,
    personal,
    clear,
    example,
    handleChangeEducation,
    education,
    experience,
    handleChangeExperience,
}) {
    const [menu, setMenu] = useState({
        Personal: true,
        Education: false,
        Experience: false,
    });

    function toggleMenu(param) {
        setMenu((prevMenu) => ({
            ...prevMenu,
            [param]: !prevMenu[param],
        }));
    }

    return (
        <div className='sidebar'>
            <SidebarTop 
                clear={clear} 
                example={example}
            />
            <Personal 
                handleChange={handleChange} 
                personal={personal} 
                toggleMenu={toggleMenu} 
                menu={menu} 
            />
            <Education
                education={education}
                handleChangeEducation={handleChangeEducation}
                toggleMenu={toggleMenu} 
                menu={menu} 
            />
            <Experience 
                experience={experience}
                handleChangeExperience={handleChangeExperience}
                toggleMenu={toggleMenu} 
                menu={menu} 
            />
        </div>
    );
}
