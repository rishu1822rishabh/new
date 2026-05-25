import React from 'react'
import { Bell, Settings } from 'lucide-react'
import Titlepage from './Pageheader'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center mb-7 h-[56px] w-full  ">

            <div>
                <h2 className="text-2xl font-semibold text-[#1E1E2D] ml-3">
                    Focused Workspace • Setup
                </h2>
            </div>

            <div className="flex items-center gap-6">

                <Bell className="text-gray-500 cursor-pointer" />
                <Settings className="text-gray-500 cursor-pointer" />

                <div className="flex items-center gap-3 mr-4">
                    <div className="text-right">
                        <h3 className="font-semibold text-sm">Anand Saurav</h3>
                        <p className="text-xs text-gray-400">TUTOR PORTAL</p>
                    </div>
                    <div className='h-10 border-r border-gray-400'></div>

                    <img
                        src="https://i.pravatar.cc/40"
                        alt=""
                        className="w-12 h-12 rounded-full"
                    />
                </div>
            </div>
        </div>

    )
}

export default Navbar;