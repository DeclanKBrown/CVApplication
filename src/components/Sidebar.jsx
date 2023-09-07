import '../styles/sidebar.css'
import SidebarTop from './SidebarTop'
import Personal from './Personal'

export default function Sidebar({ handleChange, personal, clear, example }) {
    return (
        <div className='sidebar'>
            <SidebarTop clear={clear} example={example} />
            <Personal handleChange={handleChange} personal={personal} />
        </div>
    )
}