import { useState } from 'react'
import '../assets/styles/HomePage.css'
import Dashboard from '../components/Dashboard'
import Recent from '../components/Recent'
import Friends from '../components/Friends'
import Groups from '../components/Groups'
import Logo from '../assets/logo/logo-transparent-png.png'


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
            <img src={Logo} alt="" style={{width : '160px', marginTop : '10px'}}/>
          </div>
          <div className="menu_items">
            <ul className='menu'>
              <li className={`menu_item ${content === 'Dashboard' ? 'active' : ''}`}><a href="#" onClick={() => handleContent('Dashboard')} style={{fontWeight: 'bold', fontSize:'26px'}}>Dashboard</a></li>
              <li className={`menu_item ${content === 'Friends' ? 'active' : ''}`}><a href="#" onClick={() => handleContent('Friends')} style={{fontWeight: 'bold', fontSize:'26px'}}>Friends</a></li>
              <li className={`menu_item ${content === 'Recent' ? 'active' : ''}`}><a href="#" onClick={() => handleContent('Recent')} style={{fontWeight: 'bold', fontSize:'26px'}}>Recent</a></li>
              <li className={`menu_item ${content === 'Groups' ? 'active' : ''}`}><a href="#" onClick={() => handleContent('Groups')} style={{fontWeight: 'bold', fontSize:'26px'}}>Groups</a></li>
              <li className={'menu_item'}><a href="#" style={{fontWeight: 'bold', fontSize:'26px'}}>Logout</a></li>
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
