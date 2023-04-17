import React, { ReactNode } from "react";

export interface IContactCard {
    icon: ReactNode,
    label: string
}

const ContactCard: React.FC<IContactCard> = ({ icon, label }) => {
    return (
        <>
            <button className='group hover:rounded-2xl hover:bg-indigo-500 hover:text-slate-200 text-slate-500 text-sm font-medium'>
                <div className='gap-y-4 flex flex-col justify-center items-center w-full max-w-[140px] min-w-[100px] min-h-[100px] max-h-[120px] border-2 border-indigo-500 rounded-2xl' >
                    {icon}
                    <span className="text-indigo-500 font-medium text-xs group-hover:text-slate-200">{label}</span>
                </div>
            </button>
        </>
    )
}

export default ContactCard;