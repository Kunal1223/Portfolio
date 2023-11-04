import React from 'react';
import '../Styles/Home.css';
import { HiHome, HiViewColumns, HiEnvelope } from 'react-icons/hi2';
import { NavLink, useLocation } from 'react-router-dom';
import { GiSkills } from "react-icons/gi"


const Navhead = () => {

  const location = useLocation();

  const navData = [
    { name: 'Home', path: '/', icon: <HiHome /> },
    { name: 'Skill', path: '/about', icon: <GiSkills /> },
    { name: 'Project', path: '/project', icon: <HiViewColumns /> },
    { name: 'Contact', path: '/contact', icon: <HiEnvelope /> },
  ];


  return (
    <nav className='custom-nav'>
      <div className='custom-nav-container'>
        {navData.map((link, index) => (
          <div className='custom-nav-group' key={index}>
            <NavLink
              to={link.path}
              className={`custom-nav-link`}
              style={location.pathname === link.path ? { color: '#f13024' } : {}}>
              <div className='custom-hover-box'>
                <div className='custom-tooltip'>
                  {link.name}
                </div>
              </div>
              <div className='links-color'>{link.icon}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navhead