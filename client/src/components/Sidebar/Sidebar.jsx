import React, { useContext } from 'react'
import './Sidebar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router'
import { Context } from '../../App'
import { ShowSidebar } from '../ShowSidebar'


function Sidebar({userinfo, links, setSideBarLinksArray}) {
    const {sidebarState : {showSidebar}} = useContext(Context)
  return (
    <nav className={`${!showSidebar && "hide-sidebar"} sidebar`}>
        <div>

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
                    return <SideBarLink key={link.text} linkInfo={link} links={links} setSideBarLinksArray={setSideBarLinksArray}/>
                })}
        </div>

        </div>
        <ShowSidebar />
    </nav>
  )
}


const SideBarLink = ({linkInfo, links, setSideBarLinksArray})=>{
    return (
            <Link onClick={()=>{
                setSideBarLinksArray(links.map(link=>{
                    if(link.highlighted && link.text != linkInfo.text){
                        return {...link, highlighted: false}
                    }
                    if(link.text == linkInfo.text){
                        return {...link, highlighted: true}
                    }
                    return link
                }))
            }} className={`link-container ${linkInfo.highlighted == true ? "highlight":"not-highlighted"}`} to={linkInfo.route}>
                <linkInfo.Icon />
                <p>{linkInfo.text}</p>
            </Link>
    )
}

export default Sidebar