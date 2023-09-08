import '../styles/personal.css'

export default function Form({ education, handleChangeEducation }) {
    return (
        <form>
            <div className='row'>
                <label className='label' name='school'>School</label>
                <input id='inp' type='text' placeholder='Enter school / university' value={education.School} onChange={(e) => handleChangeEducation(e.target.value, 'School')}></input>
            </div>
            <div className='row'>
                <label className='label' name='Degree'>Degree</label>
                <input id='inp' type='text' placeholder='Enter degree / field of study' value={education.Degree} onChange={(e) => handleChangeEducation(e.target.value, 'Degree')}></input>
            </div>
            <div className='half-row'>
                <label className='label start-label' name='start-date'>Start Date</label>
                <input id='half-inp' type='text' placeholder='Enter start date' value={education.Startdate} onChange={(e) => handleChangeEducation(e.target.value, 'Startdate')}></input>
                <label className='label end-label' name='end-date'>End Date</label>
                <input id='half-inp' type='text' placeholder='Enter end date' value={education.Enddate} onChange={(e) => handleChangeEducation(e.target.value, 'Enddate')}></input>
            </div>
            <div className='row'>
                <label className='label' name='location'>Location</label>
                <input id='inp' type='text' placeholder='Location' value={education.Location} onChange={(e) => handleChangeEducation(e.target.value, 'Location')}></input>
            </div>
        </form>
    )
}