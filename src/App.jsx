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

    const [education, setEducation] = useState([{
        School: '',
        Degree: '',
        Startdate: '',
        EndDate: '',
        Location: '',
        Key: crypto.randomUUID(),
    }])

    function clear() {
        setPersonal({
            Fullname: '',
            Email: '',
            PhoneNumber: '',
            Location: '',
            LinkedIn: '',
            GitHub: '',
        })
        setEducation({
            School: '',
            Degree: '',
            Startdate: '',
            EndDate: '',
            Location: '',
            Key: '',
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
        })
        setEducation({
            School: 'RMIT',
            Degree: 'Bacholar of Software Engineering',
            Startdate: '01/01/2023',
            Enddate: 'Present',
            Location: 'Melbourne, Australia',
            Key: crypto.randomUUID(),
        })
        
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
        //Cancel Logic
        setForm(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        //Submit Logic
        setForm(false)
    }

    function handleChangeEducation(value, param) {
        setEducation({...education, [param]: value})
    }

    return (
        <>
            <Sidebar handleChange={handleChange} personal={personal} clear={clear} example={example} education={education} handleDelete={handleDelete} handleCancel={handleCancel} handleSubmit={handleSubmit} handleChangeEducation={handleChangeEducation} form={form} setForm={setForm} />
            <Page personal={personal} education={education}/>
        </>
    )
}