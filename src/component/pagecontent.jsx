import React from "react";
import {
    Share2,
    Copy,
    Wallet,
    Gift,
    ShieldCheck,
    Trophy,
    Lock,
} from "lucide-react";

const referrals = [
    {
        initials: "RK",
        name: "Rohan Kapoor",
        phone: "+91 98765-XXXXX",
        status: "PROFILE VERIFIED",
        statusColor: "bg-[#DFF7E8] text-[#22C55E]",
        avatar: "bg-[#EAD9FF] text-[#7B61FF]",
        progress: 3,
    },
    {
        initials: "SP",
        name: "Sneha Patel",
        phone: "+91 87654-XXXXX",
        status: "REGISTERED",
        statusColor: "bg-[#E5EEFF] text-[#2563EB]",
        avatar: "bg-[#FFE5C2] text-[#D18B00]",
        progress: 1,
    },
];

const milestones = [
    {
        icon: Gift,
        title: "5 Referrals (Gift Card)",
        desc: "Earn a ₹500 Amazon voucher upon completion",
        status: "COMPLETED",
        color: "text-green-500 bg-green-100",
    },
    {
        icon: Trophy,
        title: "10 Referrals (Prime Status)",
        desc: "1 month of TutorLink Prime for free",
        status: "COMPLETED",
        color: "text-green-500 bg-green-100",
    },
    {
        icon: ShieldCheck,
        title: "15 Referrals (Official Kit)",
        desc: "Branded stationery kit and t-shirt",
        status: "IN PROGRESS",
        color: "text-yellow-600 bg-yellow-100",
    },
    {
        icon: Lock,
        title: "30 Referrals (Badge)",
        desc: "Premium noise-cancelling headset",
        status: "LOCKED",
        color: "text-gray-500 bg-gray-100",
    },
];

const steps = [
    {
        icon: Share2,
        title: "Send Invite",
        subtitle: "SHARE LINK/CODE",
    },
    {
        icon: Copy,
        title: "Registration",
        subtitle: "NEW TUTOR JOINS",
    },
    {
        icon: ShieldCheck,
        title: "Verification",
        subtitle: "KYC COMPLETED",
    },
    {
        icon: Wallet,
        title: "Reward Credit",
        subtitle: "COINS ADDED TO WALLET",
    },
];

const Pagecontent = () => {
    return (
        <div className="bg-[#F7F6FB] min-h-screen overflow-x-hidden p-4 sm:p-6 lg:p-8 rounded-[20px] lg:rounded-[40px]">

            {/* TOP SECTION */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 mb-8">

                {/* REFERRAL CARD */}
                <div className="bg-white rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 relative overflow-hidden shadow-sm">

                    <div className="absolute w-[320px] h-[320px] rounded-full bg-[#F4EEFF] right-[-140px] top-[-100px]" />

                    <div className="relative z-10">

                        <h3 className="text-[#7B61FF] font-semibold tracking-[0.2em] text-xs sm:text-sm mb-8">
                            YOUR PERSONAL INVITE
                        </h3>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">

                            {/* CODE */}
                            <div className="border-2 border-dashed border-[#BCAEFF] rounded-3xl px-5 sm:px-8 py-4 sm:py-5 bg-[#FBFAFF] w-full sm:w-auto">

                                <h1 className="text-lg sm:text-2xl md:text-4xl font-bold tracking-[0.12em] text-[#2F2E41] break-all text-center sm:text-left">
                                    BY-ANAND-123
                                </h1>
                            </div>

                            {/* BUTTON */}
                            <button className="w-full sm:w-auto justify-center bg-[#7B61FF] hover:bg-[#6E55F6] transition-all duration-300 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl flex items-center gap-3 font-semibold shadow-lg shadow-violet-200">

                                <Share2 size={20} />
                                Share Now
                            </button>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

                            <button className="w-full sm:w-auto bg-[#DFF7E8] text-[#1BA94C] px-6 py-4 rounded-2xl font-medium hover:scale-[1.02] transition-all">
                                WhatsApp
                            </button>

                            <button className="w-full sm:w-auto bg-[#F2EEF8] text-[#4B4453] px-6 py-4 rounded-2xl flex items-center justify-center gap-3 font-medium hover:bg-[#E9E2F5] transition-all">

                                <Copy size={18} />
                                Copy Link
                            </button>
                        </div>
                    </div>
                </div>

                {/* WALLET CARD */}
                <div className="bg-[#2F2E41] text-white rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-sm">

                    <div className="flex justify-between items-start mb-8">

                        <div>
                            <p className="uppercase text-gray-400 tracking-[0.25em] text-xs mb-3">
                                Total Balance
                            </p>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                                12,450
                            </h1>

                            <p className="text-gray-400 mt-2 text-sm">
                                ₹ 6,225.00
                            </p>
                        </div>

                        <div className="bg-white/10 p-3 rounded-2xl">
                            <Wallet size={30} className="text-white" />
                        </div>
                    </div>

                    {/* TRANSACTIONS */}
                    <div className="mb-8">

                        <div className="flex justify-between mb-5">

                            <h3 className="uppercase tracking-[0.2em] text-xs text-gray-400">
                                Recent Transactions
                            </h3>

                            <button className="text-xs text-gray-400 hover:text-white transition-all">
                                VIEW ALL
                            </button>
                        </div>

                        <div className="space-y-4">

                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">
                                    Ref: Rohan Kapoor
                                </span>

                                <span className="text-yellow-400 font-semibold">
                                    +100
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">
                                    Ref: Amit Das
                                </span>

                                <span className="text-yellow-400 font-semibold">
                                    +100
                                </span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-[#454457] hover:bg-[#55546A] transition-all duration-300 py-4 rounded-2xl font-semibold tracking-wider">
                        REDEEM COINS
                    </button>
                </div>
            </div>

            {/* SECOND SECTION */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-6 lg:gap-8">

                {/* LEFT */}
                <div className="space-y-8">

                    {/* REFERRALS */}
                    <div className="bg-white rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-sm overflow-x-auto">

                        <div className="flex justify-between items-center mb-8">

                            <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2E41]">
                                Recent Referrals
                            </h2>

                            <button className="text-[#7B61FF] font-medium hover:underline">
                                View All
                            </button>
                        </div>

                        {/* HEADERS */}
                        <div className="grid grid-cols-[1.5fr_1fr_1fr] min-w-[700px] pb-5 border-b text-gray-500 font-semibold uppercase text-sm tracking-wider">

                            <h3>Name / Phone</h3>
                            <h3>Status</h3>
                            <h3>Progress Stage</h3>
                        </div>

                        {/* ROWS */}
                        {referrals.map((item, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-[1.5fr_1fr_1fr] min-w-[700px] items-center py-6 ${index !== referrals.length - 1 ? "border-b" : ""
                                    }`}
                            >

                                {/* USER */}
                                <div className="flex items-center gap-4">

                                    <div
                                        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold ${item.avatar}`}
                                    >
                                        {item.initials}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg text-[#2F2E41]">
                                            {item.name}
                                        </h3>

                                        <p className="text-gray-400 text-sm">
                                            {item.phone}
                                        </p>
                                    </div>
                                </div>

                                {/* STATUS */}
                                <div>
                                    <span
                                        className={`px-4 py-2 rounded-full text-xs font-semibold ${item.statusColor}`}
                                    >
                                        {item.status}
                                    </span>
                                </div>

                                {/* PROGRESS */}
                                <div className="flex gap-2">

                                    {[1, 2, 3, 4].map((step) => (
                                        <div
                                            key={step}
                                            className={`w-10 h-2 rounded-full ${step <= item.progress
                                                    ? "bg-[#7B61FF]"
                                                    : "bg-[#E5E5E5]"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MILESTONES */}
                    <div className="bg-white rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-sm">

                        <div className="mb-8">

                            <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2E41] mb-2">
                                Milestone Rewards
                            </h2>

                            <p className="text-gray-400">
                                Reach these targets to unlock exclusive benefits
                            </p>
                        </div>

                        <div className="space-y-6">

                            {milestones.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                                    >

                                        <div className="flex gap-4 items-start">

                                            <div className="w-14 h-14 rounded-2xl bg-[#F4F0FF] flex items-center justify-center">
                                                <Icon size={24} className="text-[#7B61FF]" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-[#2F2E41]">
                                                    {item.title}
                                                </h3>

                                                <p className="text-gray-400 text-sm mt-1">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <span
                                            className={`px-4 py-2 rounded-full text-xs font-semibold w-fit ${item.color}`}
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* REWARD FLOW */}
                    <div className="bg-[#F4F1FF] rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-sm">

                        <h2 className="text-center text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6B6480] font-semibold mb-10">
                            Complete Reward Flow
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">

                            {steps.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className={`rounded-3xl p-6 flex flex-col items-center text-center transition-all ${index === 3
                                                ? "bg-[#FFE9B8] border border-[#D6A94E]"
                                                : "bg-white"
                                            }`}
                                    >

                                        <div className="w-14 h-14 rounded-2xl bg-[#F4F0FF] flex items-center justify-center mb-4">
                                            <Icon size={24} className="text-[#7B61FF]" />
                                        </div>

                                        <h3 className="font-semibold text-[#2F2E41] mb-1">
                                            {item.title}
                                        </h3>

                                        <p className="text-[11px] tracking-wider text-gray-400 uppercase">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-6 xl:sticky xl:top-6 h-fit">

                    {/* RULES */}
                    <div className="border border-red-200 bg-red-50 rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8">

                        <h2 className="text-red-500 font-bold text-lg sm:text-xl mb-5 uppercase tracking-wider">
                            Important Rules
                        </h2>

                        <p className="text-red-400 leading-7">
                            Fraudulent referrals or creating multiple accounts
                            will lead to immediate permanent ban and forfeiture
                            of all earned coins. Referrals must be genuine
                            verified tutors only.
                        </p>
                    </div>

                    {/* HOW IT WORKS */}
                    <div className="bg-[#FFF3D6] rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8">

                        <h2 className="text-[#B7791F] font-bold text-lg sm:text-xl mb-6 uppercase tracking-wider">
                            How It Works
                        </h2>

                        <div className="space-y-5">

                            {[1, 2, 3].map((num) => (
                                <div key={num} className="flex gap-4">

                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-[#B7791F]">
                                        {num}
                                    </div>

                                    <p className="text-[#8B6B2E] leading-7">
                                        {num === 1 &&
                                            "Share your code with fellow expert tutors."}

                                        {num === 2 &&
                                            "+50 Coins when they verify their profile."}

                                        {num === 3 &&
                                            "+100 Coins on their first successful tuition."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagecontent;