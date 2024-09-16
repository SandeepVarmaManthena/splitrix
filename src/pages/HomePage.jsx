import { useState } from 'react'
import '../assets/styles/HomePage.css'
import Dashboard from '../components/Dashboard'
import Recent from '../components/Recent'
import Friends from '../components/Friends'
import Groups from '../components/Groups'


const HomePage = () => {

  const [content,setContent] = useState('Dashboard')

  const handleContent = (con) => {
    setContent(con)
  }

  return (
    <>
      <section className="home_wrapper">
        <div className="side_menu">
          <div className="logo_section">
            <h2>SplitriX</h2>
          </div>
          <div className="menu_items">
            <ul className='menu'>
              <li className={`menu_item ${content === 'Dashboard' ? 'active' : ''}`}><a href="#" onClick={() => handleContent('Dashboard')}><h3>Dashboard</h3></a></li>
              <li className={`menu_item ${content === 'Friends' ? 'active' : ''}`}><a href="#" onClick={() => handleContent('Friends')}><h3>Friends</h3></a></li>
              <li className={`menu_item ${content === 'Recent' ? 'active' : ''}`}><a href="#" onClick={() => handleContent('Recent')}><h3>Recent</h3></a></li>
              <li className={`menu_item ${content === 'Groups' ? 'active' : ''}`}><a href="#" onClick={() => handleContent('Groups')}><h3>Groups</h3></a></li>
              <li className={'menu_item'}><a href="#"><h3>Logout</h3></a></li>
            </ul>
          </div>
        </div>
        <div className="content">
          {content === 'Dashboard' && <Dashboard />}
          {content === 'Friends' && <Friends/>}
          {content === 'Recent' && <Recent/>}
          {content === 'Groups' && <Groups/>}
        </div>
      </section>
    </>
  )
}

export default HomePage
