import '../styles/personal.css'
import Form from './Form'

export default function Education({ education, toggleMenu, menu, form, setForm, handleDelete, handleCancel, handleSubmit, handleChangeEducation }) {

    return (
        <div className='personal'>
            <div className='top'>
                <h1 className='title'>Education</h1>
                <svg className={menu.Education ? 'open' : 'closed'} onClick={() => toggleMenu('Education')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,10L12,15L17,10H7Z" /></svg>
            </div>
            {menu.Education === true  && (
                <>
                {form ? (
                    <Form education={education}  setForm={setForm} handleDelete={handleDelete} handleCancel={handleCancel} handleSubmit={handleSubmit} handleChangeEducation={handleChangeEducation} />
                ) : 
                    <div className='add-education-cont'>
                        <button id='add-education' onClick={() => setForm(true)}>Add Education</button>
                    </div>
                }
                </>
            )}
        </div>
    )
}