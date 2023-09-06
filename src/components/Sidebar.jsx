import '../styles/sidebar.css'
import Options from './Options'
import Personal from './Personal'

export default function SideBar() {
    return (
        <>
          <aside className="side-bar">
            <Options />
            <Personal />
          </aside>
        </>
    )
}