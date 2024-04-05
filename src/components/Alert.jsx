import React,{useState} from 'react'
import { IoIosAlert } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function Alert({ text }) {
    const [disabled, setDisabled] = useState(false)
    const handleClick = () => {
        setDisabled(prev=>!prev)
    }
    return (
        <>
            {!disabled &&
                <div className='flex flex-col md:flex-row items-center md:items-start gap-3 bg-[#fff0a8] rounded-xl p-4 mt-5 relative'>
                    <span className='absolute right-4' onClick={handleClick}>
                        <RxCross2 size={15} color='#7a5402' />
                    </span>
                    <div className=''>
                        <IoIosAlert size={25} color='#7a5402' />
                    </div>
                    <p className='text-[#7a5402] md:pr-10'>{text}</p>
                </div>
            }
        </>
    )
}
