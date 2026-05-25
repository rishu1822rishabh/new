import React from 'react'

const Invitecard = () => {
    return (
        <div className="grid grid-cols-[1fr_350px] gap-8 mb-8">

            {/* REFERRAL CARD */}
            <div className="bg-white rounded-[32px] p-8 relative overflow-hidden shadow-sm">

                {/* Background Circle */}
                <div className="absolute w-[300px] h-[300px] rounded-full bg-[#F5F0FF] right-[-120px] top-[-60px]"></div>

                <div className="relative z-10">

                    <h3 className="text-[#7B61FF] font-semibold tracking-wider mb-8 text-lg">
                        YOUR PERSONAL INVITE
                    </h3>

                    <div className="flex items-center gap-6 mb-8">

                        {/* CODE BOX */}
                        <div className="border-2 border-dashed border-[#B9A7FF] rounded-3xl px-8 py-5">
                            <h2 className="text-4xl font-bold tracking-wide">
                                BY-ANAND-123
                            </h2>
                        </div>

                        {/* SHARE BUTTON */}
                        <button className="bg-[#7B61FF] hover:bg-[#6a52eb] transition-all duration-300 text-white px-8 py-5 rounded-2xl flex items-center gap-3 shadow-md">
                            <Share2 size={22} />
                            Share Now
                        </button>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex gap-5">

                        <button className="bg-[#DFF7E8] text-[#22C55E] px-6 py-4 rounded-2xl font-medium">
                            WhatsApp
                        </button>

                        <button className="bg-[#F2EEF8] text-[#4B4453] px-6 py-4 rounded-2xl flex items-center gap-3 font-medium">
                            <Copy size={20} />
                            Copy Link
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Invitecard