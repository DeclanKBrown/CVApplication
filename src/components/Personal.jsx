import { useState } from 'react'
import '../styles/personal.css'

export default function Personal() {

    const [toggle, setToggle] = useState('open')

    function toggleMenu() {
        toggle === 'open' ? setToggle('closed') : setToggle('open')

    }

    return (
        <div className={'personal ' + toggle}>
            <div className='personal-top'>
                <h1>Personal Details</h1>
                {toggle === 'open' ? ( <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,10L12,15L17,10H7Z" /></svg> ) : ( <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,15L12,10L17,15H7Z" /></svg> ) }
            </div>
            {toggle === 'open' ? (
                <>
                    <div className='details'>
                        <h3>Full Name</h3>
                        <input type='text'></input>
                    </div>
                    <div className='details'>
                        <h3>Email</h3>
                        <input type='text'></input>
                    </div>
                    <div className='details'>
                        <h3>Phone Number</h3>
                        <input type='text'></input>
                    </div>
                    <div className='details'>
                        <h3>Address</h3>
                        <input type='text'></input>
                    </div>
                    <div className='details'>
                        <h3>LinkedIn</h3>
                        <input type='text'></input>
                    </div>
                </>
            ) : ( null ) }
        </div>
    )
}