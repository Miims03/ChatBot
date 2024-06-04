import React from 'react'
import { Link , useLocation } from 'react-router-dom'
import LogoIcon from '../assets/icons8-triangle-100.png'
import { Divider } from '@mui/material';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import FeedIcon from '@mui/icons-material/Feed';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
export default function SideBar() {

    const location = useLocation();

    const sideNav = [
        {title: 'All chats', icon: <ChatBubbleOutlinedIcon fontSize='large'/>, path: '/chats'},
        {title: 'Works', icon: <FolderIcon fontSize='large'/>, path: '/works'},
        {title: 'Friends', icon: <PeopleAltIcon fontSize='large'/>, path: '/friends'},
        {title: 'News', icon: <FeedIcon fontSize='large'/>, path: '/news'},
        {title: 'Archives', icon: <InboxOutlinedIcon fontSize='large'/>, path: '/archives'},
    ]
    const navSecondo = [
        {title: 'Profile', icon: <PersonIcon fontSize='large'/>, path: '/profile'},
        {title: 'Settings', icon: <SettingsIcon fontSize='large'/>, path: '/setting'},
    ]
    const logout = {title: 'Logout', icon: <LogoutIcon fontSize='large'/>, path: '/logout'}

  return (
    <div className=' h-screen w-32 flex flex-col justify-start items-center py-5 relative select-none'>
        <Link 
        className='flex justify-center items-center'
        to='/'>
          <img
          className='duration-500 h-[100%%] w-[60%]' 
          src={LogoIcon}
          alt="Logo Icon" />
        </Link>
        <div className='flex flex-col justify-start items-center  w-full mt-[3rem] gap-2'>
        {sideNav.map((nav , index) => (
            <Link 
            className={`hover:bg-[#464646] duration-300 py-2 w-[80%] rounded-lg ${location.pathname === nav.path ? 'bg-[#464646]' : ''}`}
            key={index}
            to={nav.path}>
              <div className={`text-[#898787] flex flex-col items-center hover:text-white duration-300 ${location.pathname === nav.path ? 'text-white' : ''}`}>
                <div className='text-3xl'>{nav.icon}</div>
                
                {nav.title}
              </div>
            </Link>
        ))}
        <hr className='h-[1px] w-[50%] my-4 border-[#898787]'/>
        {navSecondo.map((nav , index) => (
            <Link 
            className={`hover:bg-[#464646] duration-300 py-2 w-[80%] rounded-lg  ${location.pathname === nav.path ? 'bg-[#464646]' : ''}`}
            key={index}
            to={nav.path}>
              <div className={`text-[#898787] flex flex-col items-center hover:text-white duration-300 ${location.pathname === nav.path ? 'text-white' : ''}`}>
                <div className='text-3xl'>{nav.icon}</div>
                {nav.title}
              </div>
            </Link>
        ))}
        <Link 
            className='hover:bg-[#464646] duration-300 py-2 w-[80%] rounded-lg absolute bottom-6'
            to={logout.path}>
              <div className='text-[#898787] flex flex-col items-center hover:text-white duration-300 '>
                <div className='text-3xl rotate-180 mr-1.5'>{logout.icon}</div>
                
                {logout.title}
              </div>
            </Link>
        </div>
        
        
    </div>
  )
}
