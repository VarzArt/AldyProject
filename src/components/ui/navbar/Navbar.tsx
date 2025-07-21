import React from 'react'
import NavItem from './navItem/NavItem'
import { navBarTabs } from '@/components/header/header.constants'

type NavbarProps = {}

export default function Navbar({}: NavbarProps) {
  return (
    <div className='flex gap-[60px]'>
        {
          navBarTabs.map((tab) => (
            <NavItem key={tab.id} label={tab.label}/>
          ))
        }
    </div>

  )
}