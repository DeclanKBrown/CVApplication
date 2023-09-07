import Page from './components/Page'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

export default function App() {

    const [values, setValues] = useState({
        Fullname: '',
        Email: '',
        PhoneNumber: '',
        Location: '',
        LinkedIn: '',
        GitHub: '',
    })

    function handleChange(value, param) {
        setValues({...values, [param]: value})
    }

    return (
        <>
            <Sidebar handleChange={handleChange} values={values} />
            <Page values={values}/>
        </>
    )
}