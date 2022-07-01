import React from 'react'
import * as AIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AIcons.AiFillHome />,
        cName: 'nav-text' 
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <BsIcons.BsCodeSlash />,
        cName: 'nav-text' 
    },
    {
        title: 'Gallery',
        path: '/gallery',
        icon: <BsIcons.BsImages />,
        cName: 'nav-text' 
    }
]