import React from 'react'
import { LayoutDashboard, GraduationCap, UserPlus, Banknote, Wallet, Medal, LogOut, StretchHorizontal,X } from 'lucide-react';
import { FaGraduationCap } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

const Sidenav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className='w-[100px] h-[1900px] border-r-[1px] border-[rgba(204, 196, 208, 0.1)] hidden md:flex flex-col justify-between'>
                <div className='mx-auto  px-[8px]   pt-[8px] pb-[48px] w-15 text-blue-700 '><GraduationCap size={37} /></div>
                <div className='h-full flex justify-baseline flex-col mx-auto gap-[12px]'><LayoutDashboard size={37} />
                    <UserPlus size={37} />
                    <Banknote size={37} />
                    <Medal size={37} />
                    <Wallet size={37} /></div>
                <div className='mx-auto text-gray-500' ><LogOut size={37} /></div>
            </div>
            <div className='md:hidden mt-4' onClick={() => {
                setOpen(true);
            }}><StretchHorizontal size={18} /></div>
            {open &&
                <div className='
fixed top-0 left-0 z-50
w-[90px] h-screen
bg-black/70 backdrop-blur-xl
border-r border-white/10
flex
flex-col justify-between
py-6
shadow-2xl md:hidden
'>
                    <div className='flex items-center justify-end w-full text-white p-2' onClick={()=>{
                        setOpen(false)
                    }}>
                        <X size={34} />
                    </div>
                    <div className='flex justify-center text-[#7B61FF]'>
                        <div className='
        w-14 h-14
        rounded-2xl
        bg-white/10
        flex items-center justify-center
        shadow-lg
        '>
                            <GraduationCap size={34} />
                        </div>
                    </div>

                    {/* NAV ITEMS */}
                    <div className='flex flex-col items-center gap-5'>

                        {/* ACTIVE */}
                        <button className='
        w-14 h-14
        rounded-2xl
        bg-[#7B61FF]
        text-white
        flex items-center justify-center
        shadow-lg shadow-violet-500/30
        transition-all duration-300
        hover:scale-105
        '>
                            <LayoutDashboard size={28} />
                        </button>

                        {/* OTHERS */}
                        <button className='
        w-14 h-14
        rounded-2xl
        bg-white/5
        text-gray-300
        flex items-center justify-center
        hover:bg-white/10
        hover:text-white
        transition-all duration-300
        '>
                            <UserPlus size={28} />
                        </button>

                        <button className='
        w-14 h-14
        rounded-2xl
        bg-white/5
        text-gray-300
        flex items-center justify-center
        hover:bg-white/10
        hover:text-white
        transition-all duration-300
        '>
                            <Banknote size={28} />
                        </button>

                        <button className='
        w-14 h-14
        rounded-2xl
        bg-white/5
        text-gray-300
        flex items-center justify-center
        hover:bg-white/10
        hover:text-white
        transition-all duration-300
        '>
                            <Medal size={28} />
                        </button>

                        <button className='
        w-14 h-14
        rounded-2xl
        bg-white/5
        text-gray-300
        flex items-center justify-center
        hover:bg-white/10
        hover:text-white
        transition-all duration-300
        '>
                            <Wallet size={28} />
                        </button>
                    </div>

                    {/* LOGOUT */}
                    <div className='flex justify-center'>
                        <button className='
        w-14 h-14
        rounded-2xl
        bg-red-500/10
        text-red-400
        flex items-center justify-center
        hover:bg-red-500/20
        transition-all duration-300
        '>
                            <LogOut size={28} />
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Sidenav;