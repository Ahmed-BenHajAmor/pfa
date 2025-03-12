import React, { useState } from 'react'
import './Admin.css'
import {Button, JustificationPopup, JustificationsTable, Sidebar, Title} from '../'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';
import { Outlet } from 'react-router';

function Admin() {
  

  return (
    <>
       
        <Sidebar userinfo={{username: "Admin_fst", details: "2024/2025"}} links={[{text: "Justifications en attente", Icon: HourglassTopRoundedIcon, highlighted: true}]}/>
        <Outlet />
        
    </>
  )
}



export default Admin