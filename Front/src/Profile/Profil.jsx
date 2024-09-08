import React from 'react'

import Navbar from '../Components/Navbar'

export default function Profil() {
  return (
    <div>
        <Navbar/>

        <div className='mr-4 mx-4 mt-4 bg-white'>
            <div>
                ID: 6884864864864 <br/>
                Nom: Dupont <br/>
                Prenom: Jean <br/>
                Mail: azerty@gmail.com <br/>
                Membre depuis: 01/01/1990 <br/>
            </div>
        </div>

    </div>
  )
}
