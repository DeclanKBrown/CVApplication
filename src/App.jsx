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
    })

    const [education, setEducation] = useState([])

    const [formData, setFormData] = useState({
        School: '',
        Degree: '',
        Startdate: '',
        Enddate: '',
        Location: '',
        Key: '',
    })

    function clear() {
        setPersonal({
            Fullname: '',
            Email: '',
            PhoneNumber: '',
            Location: '',
            LinkedIn: '',
            GitHub: '',
        })
        setEducation([])
        setFormData({
            School: '',
            Degree: '',
            Startdate: '',
            Enddate: '',
            Location: '',
        });
    }

    function example() {
        setPersonal({
            Fullname: 'John Smith',
            Email: 'johnsmith@example.com',
            PhoneNumber: '0123 456 789',
            Location: 'Melbourne, Austrlia',
            LinkedIn: 'Linkedin.com/johnsmith',
            GitHub: 'Github.com/johnsmith',
        })
        setEducation([{
            School: 'RMIT',
            Degree: 'Bacholar of Software Engineering',
            Startdate: '01/01/2023',
            Enddate: 'Present',
            Location: 'Melbourne, Australia',
            Key: crypto.randomUUID(),
        }])
        
    }

    const [form, setForm] = useState(false)

    function handleChange(value, param) {
        setPersonal({...personal, [param]: value})
    }

    function handleDelete(e) {
        e.preventDefault()
        //Delete Logic
        setForm(false)
    }

    function handleCancel(e) {
        e.preventDefault()
        
        setFormData({
            School: '',
            Degree: '',
            Startdate: '',
            Enddate: '',
            Location: '',
          });

        setForm(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        const newEducation = {
            ...formData,
            Key: crypto.randomUUID()
        }

        setEducation([...education, newEducation]);

        setFormData({
            School: '',
            Degree: '',
            Startdate: '',
            Enddate: '',
            Location: '',
          });

        setForm(false)
    }

    function handleChangeEducation(value, param) {
        setFormData({...formData, [param]: value})
    }

    return (
        <>
            <Sidebar handleChange={handleChange} personal={personal} clear={clear} example={example} formData={formData} handleDelete={handleDelete} handleCancel={handleCancel} handleSubmit={handleSubmit} handleChangeEducation={handleChangeEducation} form={form} setForm={setForm} education={education} />
            <Page personal={personal} education={education} formData={formData}/>
        </>
    )
}