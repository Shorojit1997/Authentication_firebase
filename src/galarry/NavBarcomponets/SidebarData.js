import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Image',
    path: '/image',
    icon: <BsIcons.BsCardImage />,
    cName: 'nav-text'
  },
  {
    title: 'Video',
    path: '/video',
    icon: <BsIcons.BsCameraVideo />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiOutlineProfile />,
    cName: 'nav-text'
  }
  ,
  {
    title: 'Logout',
    path: '/logout',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  }
];
