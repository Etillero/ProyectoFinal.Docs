import React from 'react'
import Nav from './Nav'

function Header() {
                       
        const links = [
            {
              id: 1,
              nombre: 'Star Wars Cart',
              url:"cart",
            },
            {
              id: 2,
              nombre: 'Contactos',
              url:"contactos",
            },
          ];

    return (
        <div>
        <Nav links ={links} />
    </div>
    )
}

export default Header
