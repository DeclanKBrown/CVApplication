import '../styles/personal.css'

export default function Experience({ handleChangeExperience, experience, toggleMenu, menu }) {
    return (
        <div className='personal'>
            <div className='top'>
                <h1 className='title'>Personal Details</h1>
                <svg className={menu.Experience ? 'open' : 'closed'} onClick={() => toggleMenu('Experience')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,10L12,15L17,10H7Z" /></svg>
            </div>
            {menu.Experience === true  && (
                <form>
                <div className='row'>
                    <label className='label' name='school'>Company</label>
                    <input id='inp' type='text' placeholder='Enter company name' value={experience.Company} onChange={(e) => handleChangeExperience(e.target.value, 'Company')}></input>
                </div>
                <div className='row'>
                    <label className='label' name='Degree'>Position</label>
                    <input id='inp' type='text' placeholder='Enter position title' value={experience.Position} onChange={(e) => handleChangeExperience(e.target.value, 'Position')}></input>
                </div>
                <div className='half-row'>
                    <label className='label start-label' name='start-date'>Start Date</label>
                    <input id='half-inp' type='text' placeholder='Enter start date' value={experience.Startdate} onChange={(e) => handleChangeExperience(e.target.value, 'Startdate')}></input>
                    <label className='label end-label' name='end-date'>End Date</label>
                    <input id='half-inp' type='text' placeholder='Enter end date' value={experience.Enddate} onChange={(e) => handleChangeExperience(e.target.value, 'Enddate')}></input>
                </div>
                <div className='row'>
                    <label className='label' name='location'>Location</label>
                    <input id='inp' type='text' placeholder='Location' value={experience.Location} onChange={(e) => handleChangeExperience(e.target.value, 'Location')}></input>
                </div>
                <div className='row'>
                    <label className='label' name='Description'>Description</label>
                    <input id='inp' type='text' placeholder='Description' value={experience.Description} onChange={(e) => handleChangeExperience(e.target.value, 'Description')}></input>
                </div>
            </form>
            )}
        </div>
    )
    

}