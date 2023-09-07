import '../styles/sidebar.css'
import SidebarTop from './SidebarTop'
import Personal from './Personal'

export default function Sidebar({ handleChange, values }) {
    return (
        <div className='sidebar'>
            <SidebarTop />
            <Personal handleChange={handleChange} values={values} />
        </div>
    )
}