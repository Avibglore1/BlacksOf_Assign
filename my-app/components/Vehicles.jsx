'use client';
import React, { useState } from 'react'

const vehicles=[
        {
            title:'Passenger vehicles',
            desc:'Revving up innovation from interior to exterior.'
        },
        {
            title:'Commercial vehicles',
            desc:'Advancing engineering for heavy-duty vehicles.'
        }
    ];
function Vehicles() {
    const [selected,setSelected] = useState(1);
    return(
        <div className='flex h-screen bg-black text-white'>
            <div className='w-1/3 flex flex-col justify-center pl-10 border-r border-white/20'>
                {vehicles.map((vehicle,index)=>(
                    <div
                    key={index}
                    onMouseEnter={()=>setSelected(index)}
                    className={`cursor-pointer py-6 transition-colors duration-300 ${
                        selected===index ? 'text-white' : 'text-white/40'
                    }`}>
                    <h2 className={`text-2xl font-bold`}>{vehicle.title}</h2>
                    <p className='text-md mt-1'>{vehicle.desc}</p>
            </div>            
                ))}
            </div>
            <div className='w-2/3 flex flex-col justify-center items-center text-center px-10'>
                <h2 className='text-3xl mb-5 font-light'>
                    Evolving the drive with <span className='font-bold'>360-degree</span><br/>
                    comprehensive solutions
                </h2>
                <video src="/videos/Passenger Alpha.bc06b347f5b526ad9a60.mp4" autoPlay muted loop playsInline
                className="overflow-hidden"></video>
                <div className="mt-6 flex gap-8 items-center ">
                    <div className='flex flex-col'>
                        <img src="/images/Cabin 1.png" alt="" />
                        <span className="text-sm text-white/60">Complete Body</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src="/images/Cabin 1.png" alt="" />
                        <span className="text-sm text-white/60">Front</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src="/images/Cabin 1.png" alt="" />
                        <span className="text-sm text-white/60">Cabin</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src="/images/Cabin 1.png" alt="" />
                        <span className="text-sm text-white/60">Trunk</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src="/images/Cabin 1.png" alt="" />
                        <span className="text-sm text-white/60">Exterior</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )

}

export default Vehicles