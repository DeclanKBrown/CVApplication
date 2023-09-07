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

    function clear() {
        setPersonal({
            Fullname: '',
            Email: '',
            PhoneNumber: '',
            Location: '',
            LinkedIn: '',
            GitHub: '',
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
    }

    function handleChange(value, param) {
        setPersonal({...personal, [param]: value})
    }

    return (
        <>
            <Sidebar handleChange={handleChange} personal={personal} clear={clear} example={example}/>
            <Page personal={personal}/>
        </>
    )
}