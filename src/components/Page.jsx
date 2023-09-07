import '../styles/page.css'

export default function Page({ values }) {
    return (
        <>
          <div className="a4">
            <div className='personal-info'>
              <div className='name'>
                <h1>{values.Fullname}</h1>
              </div>
              <div className='additional-info'>
                <h2>{values.Email}</h2>
                <h2>{values.PhoneNumber}</h2>
                <h2>{values.Location}</h2>
              </div>
              <div className='links'>
                <h3>{values.LinkedIn}</h3>
                <h3>{values.GitHub}</h3>
              </div>
            </div>
          </div>
        </>
    )
}