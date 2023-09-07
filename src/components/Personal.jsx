import '../styles/personal.css'

export default function Personal({ handleChange, personal, toggleMenu, menu }) {

    return (
        <div className='personal'>
            <div className='top'>
                <h1 className='title'>Personal Details</h1>
                <svg className={menu.Personal ? 'open' : 'closed'} onClick={() => toggleMenu('Personal')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,10L12,15L17,10H7Z" /></svg>
            </div>
            {menu.Personal === true  && (
                <>
                    <div className='row'>
                        <label className='label' name='name'>Full Name</label>
                        <input id='inp' type='text' placeholder='First and last name' value={personal.Fullname} onChange={(e) => handleChange(e.target.value, 'Fullname')}></input>
                    </div>
                    <div className='row'>
                        <label className='label' name='name'>Email</label>
                        <input id='inp' type='text' placeholder='example@example.com' value={personal.Email} onChange={(e) => handleChange(e.target.value, 'Email')}></input>
                    </div>
                    <div className='row'>
                        <label className='label' name='name'>Phone number</label>
                        <input id='inp' type='text' placeholder='0123 456 789' value={personal.PhoneNumber} onChange={(e) => handleChange(e.target.value, 'PhoneNumber')}></input>
                    </div>
                    <div className='row'>
                        <label className='label' name='name'>Location</label>
                        <input id='inp' type='text' placeholder='Melbourne, Aus' value={personal.Location} onChange={(e) => handleChange(e.target.value, 'Location')}></input>
                    </div>
                    <div className='row'>
                        <label className='label' name='name'>LinkedIn</label>
                        <input id='inp' type='text' placeholder='Linkedin.com/exmaple' value={personal.LinkedIn} onChange={(e) => handleChange(e.target.value, 'LinkedIn')}></input>
                    </div>
                    <div className='row'>
                        <label className='label' name='name'>GitHub</label>
                        <input id='inp' type='text' placeholder='Github.com/example' value={personal.GitHub} onChange={(e) => handleChange(e.target.value, 'GitHub')}></input>
                    </div>
                </>
            )}
        </div>
    )
}