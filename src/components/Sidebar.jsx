import '../styles/sidebar.css'
import SidebarTop from './SidebarTop'
import Personal from './Personal'
import Education from './Education'
import { useState } from 'react'

export default function Sidebar({ handleChange, personal, clear, example, education, handleDelete, handleCancel, handleSubmit, handleChangeEducation, form, setForm }) {

    const [menu, setMenu] = useState({
        Personal: true,
        Education: false
    })

    function toggleMenu(param) {
        setMenu((prevMenu) => ({
            ...prevMenu,
            [param]: !prevMenu[param]
        }))
    }

    return (
        <div className='sidebar'>
            <SidebarTop clear={clear} example={example} />
            <Personal handleChange={handleChange} personal={personal} toggleMenu={toggleMenu} menu={menu}/>
            <Education education={education} toggleMenu={toggleMenu} menu={menu} form={form} setForm={setForm} handleDelete={handleDelete} handleCancel={handleCancel} handleSubmit={handleSubmit} handleChangeEducation={handleChangeEducation}/>
        </div>
    )
}