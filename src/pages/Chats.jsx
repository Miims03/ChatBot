import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link , useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PushPinIcon from '@mui/icons-material/PushPin';

import Lucario from '../assets/lucario.jpg'

export default function Chats() {

  const iconInput = () => {
    return <React.Fragment><SearchIcon /></React.Fragment>
  }
  console.log(<SearchIcon />)

  const convTest = [
    {
      firstname: 'Amine', 
      lastname: 'Chraibi', 
      lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi enim eius architecto excepturi natus iure debitis maiores neque accusamus. Harum esse velit voluptate rerum et dignissimos tenetur repellendus inventore?', 
      nbrMessageNonLus: 3,
      time: 4, 
      ping: true,
      img: Lucario
    },
    {
      firstname: 'Amine', 
      lastname: 'Chraibi', 
      lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi enim eius architecto excepturi natus iure debitis maiores neque accusamus. Harum esse velit voluptate rerum et dignissimos tenetur repellendus inventore?', 
      nbrMessageNonLus: 0,
      time: 4, 
      ping: false,
      img: Lucario
    },{
      firstname: 'Amine', 
      lastname: 'Chraibi', 
      lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi enim eius architecto excepturi natus iure debitis maiores neque accusamus. Harum esse velit voluptate rerum et dignissimos tenetur repellendus inventore?', 
      nbrMessageNonLus: 0,
      time: 4, 
      ping: false,
      img: Lucario
    }
  ]

  return (
    <main className='bg-[#F9FAFC] rounded-3xl h-[97%] min-w-[75%] max-w-[92%] overflow-hidden flex justify-start items-center '>
      <section className='h-[97.5%] w-[32rem] px-3 border-r flex flex-col justify-start items-center py-6 gap-5'>
        <input type="text" className='rounded-lg py-3 px-5 w-[90%] bg-[#D8D9FF] text-stone-800 outline-0 focus:ring-2 ring-[#9B9CF1]' placeholder={`${iconInput()}`} />
        
        <div className='bg-scroll max-w-[90%] h-[85%] flex flex-col justify-start items-center gap-2'>
          {convTest.map((conv , index) => (
            <Link 
            className='bg-[#EEEEF8] w-full h-[6.5rem] rounded-lg flex justify-start items-center px-[0.7rem]'
            to=''
            key={index}>
              <img 
              className='h-[5rem] w-[5rem] rounded-lg mr-5'
              src={conv.img} alt="" />
              <div className='flex flex-col justify-between items-start gap-1 h-[55%] mr-2'>
                <h1 className='text-lg'>{conv.firstname} {conv.lastname}</h1>
                <p className={`text-sm line-clamp-1 w-full ${(conv.nbrMessageNonLus > 0) ? 'text-[#9B9CF1]' : 'text-[#A1A09F]'}`}>
                  {conv.lastMessage}
                </p>
              </div>
              <div className={`flex flex-col ${conv.ping || conv.nbrMessageNonLus > 0 ? 'justify-between' : 'justify-start'} items-end gap-1 h-[55%]`}>
                <p className='text-sm text-[#A1A09F]'>{conv.time}m</p>
                {(conv.ping || conv.nbrMessageNonLus > 0) && (
                  <div className='flex justify-end items-center gap-1'>
                    {conv.nbrMessageNonLus > 0 && <div className='rounded-full bg-[#FF7954] flex justify-center items-center h-[1.4rem] w-[1.4rem] text-xs text-white'>{conv.nbrMessageNonLus}</div>}
                    {conv.ping ? <div className=' rotate-45 text-[#7072EC]'><PushPinIcon fontSize='medium'/></div> : ''}
                  </div>
                )}
                
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
