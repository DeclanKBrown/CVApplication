import '../styles/sidebar.css'
import Options from './Options'
import Personal from './Personal'
import Experience from './Experience'

export default function SideBar() {
    return (
        <>
          <aside className="side-bar">
            <Options />
            <Personal />
            <Experience />
          </aside>
        </>
    )
}