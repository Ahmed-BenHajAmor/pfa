import React from 'react'
import './Admin.css'
import {Button, Sidebar} from '../'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';

function Admin() {
  return (
    <>
        <Sidebar userinfo={{username: "Admin_fst", details: "2024/2025"}} links={[{text: "Justifications en attente", Icon: HourglassTopRoundedIcon, highlighted: true}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false}]}/>
        <div>
        <Button>Log ot</Button>
        </div>
    </>
  )
}

export default Admin