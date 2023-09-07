import '../styles/sidebar.css'
import SidebarTop from './SidebarTop'
import Personal from './Personal'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarTop />
            <Personal />
        </div>
    )
}