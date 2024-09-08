import React from 'react'

import Navbar from '../../Components/Navbar'
import AdminNavBar from '../AdminComponents/AdminNavBar'


export default function Account() {
  return (
    <div>
        <Navbar/>
        <AdminNavBar/>
        <div className='mr-4 mx-4 bg-slate-200'>
            Gestion des comptes utilisateurs
        </div>
    </div>
  )
}
