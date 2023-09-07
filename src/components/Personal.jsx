import '../styles/personal.css'
import { useState } from 'react'

export default function Personal() {

    const [menu, setMenu] = useState(true)

    function toggleMenu() {
        setMenu(menu => menu === true ? false : true)
    }

    return (
        <div className='personal'>
            <div className='top'>
                <h1 className='title'>Personal Details</h1>
                <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-down</title><path d="M7,10L12,15L17,10H7Z" /></svg>
            </div>
            {menu === true  && (
                <>
                    <div className='row'>
                        <label className='label' name='name'>Full Name</label>
                        <input id='inp' type='text' placeholder='First and last name'></input>
                    </div>
                    <div className='row'>
                        <label className='label' name='name'>Email</label>
                        <input id='inp' type='text' placeholder='example@example.com'></input>
                    </div>
                    <div className='row'>
                        <label className='label' name='name'>Phone number</label>
                        <input id='inp' type='text' placeholder='0123 456 789'></input>
                    </div>
                    <div className='row'>
                        <label className='label' name='name'>Location</label>
                        <input id='inp' type='text' placeholder='Melbourne, Aus'></input>
                    </div>
                    <div className='row'>
                        <label className='label' name='name'>LinkedIn</label>
                        <input id='inp' type='text' placeholder='LinkedIn.com/exmaple'></input>
                    </div>
                    <div className='row'>
                        <label className='label' name='name'>GitHub</label>
                        <input id='inp' type='text' placeholder='Github.com/example'></input>
                    </div>
                </>
            )}
        </div>
    )
}