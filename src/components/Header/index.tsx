import { Link } from 'react-router-dom'
import { BsBell } from "react-icons/bs";

export const Header = () => {
  return (
    <div className='flex justify-between items-start gap-y-[4px] border-b border-[#EAECF0] pb-[20px] '>
      <Link to='/' className='flex flex-col justify-start items-start gap-y-[4px]'>
        <span className='text-[#101828] font-semibold md:text-[1.5rem] md:text-[2.37rem]'>Welcome</span>
        <span className='text-[#475467] text-[0.75rem] md:text-[1rem]'>Your current sales auction and activity.</span>
      </Link>
      <div className="relative">
        <BsBell className='text-[#667085] text-[1.5rem]' />
        <span className='absolute bottom-[-10px] right-[-12px] rounded-[16px] text-[#fff] text-center px-[8px] py-[2px] font-medium text-[12px] bg-[#F04438]'>2</span>
      </div>
    </div>
  )
}
