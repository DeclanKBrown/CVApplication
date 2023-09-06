import { useState } from 'react'
import '../styles/tabs.css'

export default function Personal() {

    const [toggle, setToggle] = useState('open')

    function toggleMenu() {
        toggle === 'open' ? setToggle('closed') : setToggle('open')

    }

    const [values, setValues] = useState({
        FullName: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        LinkedIn: '',
        GitHub: '',
      });

    const handleBlur = (e, fieldName) => {
        const { value } = e.target
        setValues((prevValues) => ({
            ...prevValues,
            [fieldName]: value,
    }))
    }
    
    return (
        <div className={'tab ' + toggle}>
            <div className='tab-top'>
                <h1>Personal Details</h1>
                {toggle === 'open' ? ( <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,10L12,15L17,10H7Z" /></svg> ) : ( <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,15L12,10L17,15H7Z" /></svg> ) }
            </div>
            {toggle === 'open' ? (
                <>
                    <div className='details'>
                        <h3>Full Name</h3>
                        <input 
                          type='text' 
                          placeholder='First and Last Name' 
                          value={ values.FullName } 
                          onBlur={(e) => handleBlur(e, 'FullName')} 
                          onChange={(e) => setValues({ ...values, FullName: e.target.value })}>
                        </input>
                    </div>
                    <div className='details'>
                        <h3>Email</h3>
                        <input 
                          type='text' 
                          placeholder='example@example.com'
                          value={ values.Email } 
                          onBlur={(e) => handleBlur(e, 'Email')} 
                          onChange={(e) => setValues({ ...values, Email: e.target.value })}>
                        </input>
                    </div>
                    <div className='details'>
                        <h3>Phone Number</h3>
                        <input 
                          type='text' 
                          placeholder='0123 456 789'
                          value={ values.PhoneNumber } 
                          onBlur={(e) => handleBlur(e, 'PhoneNumber')} 
                          onChange={(e) => setValues({ ...values, PhoneNumber: e.target.value })}>
                        </input>
                    </div>
                    <div className='details'>
                        <h3>Address</h3>
                        <input 
                          type='text' 
                          placeholder='Melbourne, Australia'
                          value={ values.Address } 
                          onBlur={(e) => handleBlur(e, 'Address')} 
                          onChange={(e) => setValues({ ...values, Address: e.target.value })}>
                        </input>
                    </div>
                    <div className='details'>
                        <h3>LinkedIn</h3>
                        <input 
                          type='text'
                          placeholder='LinkedIn.com/exmaple'
                          value={ values.LinkedIn } 
                          onBlur={(e) => handleBlur(e, 'LinkedIn')} 
                          onChange={(e) => setValues({ ...values, LinkedIn: e.target.value })}>
                        </input>
                    </div>
                    <div className='details'>
                        <h3>GitHub</h3>
                        <input 
                          type='text'
                          placeholder='GitHub.io/example'
                          value={ values.GitHub } 
                          onBlur={(e) => handleBlur(e, 'LinkedIn')} 
                          onChange={(e) => setValues({ ...values, GitHub: e.target.value })}>
                        </input>
                    </div>
                </>
            ) : ( null ) }
        </div>
    )
}