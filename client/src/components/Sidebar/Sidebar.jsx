import React from 'react'
import './Sidebar.css'
import logo from '../../assets/logo.png'


function Sidebar({userinfo, links}) {
  return (
    <nav className="sidebar">
        <div className="logo-userinfo">
            <img width="62px" height="62px" src={logo} alt="SAGA" />
            <div>
                <p>{userinfo.username}</p>
                <p>{userinfo.details}</p>
            </div>
        </div>

        <div className="line"></div>

        <div className='links-container'>
                {links.map(link=>{
                    return <Link linkInfo={link}/>
                })}
        </div>

    </nav>
  )
}


const Link = ({linkInfo})=>{
    return (
            <a className={`link-container ${linkInfo.highlighted == true ? "highlight":"not-highlighted"}`} href="#">
                <linkInfo.Icon />
                <p>{linkInfo.text}</p>
            </a>
    )
}

export default Sidebar