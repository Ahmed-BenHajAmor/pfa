import React from 'react'
import './JustificationPopup.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function JustificationPopup({popupInfo, setPopupInfo}) {
  return (
    <section className="justification-popup-container">
        <div className="justification-popup">
        <div className="popup-header">
            <p>Les détails de la justification de Ahmed Ben haj amor</p>
            <HighlightOffIcon />
        </div>

        <div className="line"></div>

        <table>
            <tbody>

            {Object.entries(popupInfo.data).map(([key, value])=>{
                return (
                    <tr>
                        <td>{key}</td>
                        <td>{value}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        <div className='decision-btns'>

            <button className="accept-button" >Accepter la justification</button>
            <button className="reject-button" >Rejeter la justification</button>
        </div>
    </div>
    </section>
  )
}

export default JustificationPopup