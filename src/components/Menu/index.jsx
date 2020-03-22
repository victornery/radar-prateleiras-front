import React from 'react'
import Link from 'next/link'
import { Nav, List, ListItem } from './style.js'

const Menu = () => (
  <Nav>
    <List>
      <ListItem>
        <Link href="/">
          <a> Home </a>
        </Link>
      </ListItem>
    </List>
  </Nav>
)

export default Menu
