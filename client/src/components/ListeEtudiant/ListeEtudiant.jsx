import React, { useState } from 'react'
import  './ListeEtudiant.css'

  
  function ListeEtudiant() {
  

    return (
      <>
      <section className='table-etudiant'>
     <table>
          <thead>
            <tr>
              <th style={{width:"432px"}}>Nom</th>
              <th style={{width:"235px"}}>Etat</th>
            </tr>
          </thead>
      <tbody>
        <tr>
          <td>Yassine Gharbi</td>
          <td  ><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr>
        <tr>
          <td>Ahmed ben haj amor</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr>
        <tr>
          <td>Ahmed ben haj amor</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr>
        <tr>
          <td>Ahmed ben haj amor</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr>
        <tr>
          <td>Ahmed ben haj amor</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr>
        <tr>
          <td>Ahmed ben haj amor</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Mohamed Taoufik Houria</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr><tr>
          <td>Mohamed Taoufik Houria</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr><tr>
          <td>Mohamed Taoufik Houria</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr><tr>
          <td>Mohamed Taoufik Houria</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr><tr>
          <td>Mohamed Taoufik Houria</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr><tr>
          <td>Mohamed Taoufik Houria</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr><tr>
          <td>Mohamed Taoufik Houria</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr><tr>
          <td>Mohamed Taoufik Houria</td>
          <td><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
        </tr>
      </tfoot>
</table></section>
</>)
  }
  
  
export default ListeEtudiant