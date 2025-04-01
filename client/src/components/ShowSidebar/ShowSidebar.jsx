import React, { useContext } from 'react'
import './ShowSidebar.css'
import { Context } from '../../App'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';

function ShowSidebar() {
    const {sidebarState : {SetShowSidebar}} = useContext(Context)
  return (
    <button className='show-sidebar-btn' onClick={()=>{
        SetShowSidebar(prev => !prev)
    }}><ViewSidebarIcon /></button>
  )
}

export default ShowSidebar