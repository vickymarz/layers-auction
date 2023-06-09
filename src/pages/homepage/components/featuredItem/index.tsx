import { Button } from 'components'
import { getInitials } from 'helpers'

type ItemsTypes = {
  name: string
  title: string
  bid: string
  image: string
}

export const FeaturedItem = ({name, title, bid, image}: ItemsTypes) => {
  return (
    <div className='rounded-[12px] border border-[#D0D5DD] border-solid p-[12px] flex flex-col justify-start items-start gap-y-[20px] mb-4 lg:mb-0'>
      <div className='p-[20px] rounded-[12px] bg-[#F2F4F7] flex justify-center items-center w-full h-[132px]'>
        <img src={image} alt="Desert king" className='object-contain'/>
      </div>
      <div className='w-full flex flex-col justify-start items-start gap-y-[12px] border-b border-[#EAECF0] pb-[8px]'>
        <div className='flex justify-start items-center gap-x-[8px]'>
          <p className='rounded-[200px] bg-[#F2F4F7] p-[8px] text-center'>{getInitials(name)}</p>
          <p className='text-[#344054] font-semibold text-[0.75rem]'>{name} <span className='text-[#98A2B3]'>(Highest Bidder)</span></p>
        </div>
        <p className='text-[#101828] font-semibold text-[0.875rem]'>
          {title}
        </p>
        <p className='text-[#344054] text-[0.875rem]'>
          Current Bid:  {"   "}<span className='text-[#344054] font-bold'>{bid}</span>
        </p>
      </div>
      <Button type="button" className='outline-0 focus:outline-0 w-full text-[#fff] font-semibold text-[0.875rem] rounded-[8px] shadow-cardShadow px-[16px] py-[10px] bg-[#004ccc] text-center'>
        Add to wishlist
      </Button>
    </div>
  )
}
