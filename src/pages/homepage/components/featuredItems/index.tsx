import { FeaturedItem } from '../featuredItem';
import { Button } from "components"

type ItemsTypes = {
    name: string
    title: string
    bid: string
    image: string
}

type ItemsProps = {
    data?: Array<ItemsTypes>
    isLoading?: boolean
    isError?: boolean
}

export const FeaturedItems= ({data, isLoading, isError}: ItemsProps) => {
    const displayData = data?.map(({name, title, bid, image}: ItemsTypes, index: number) => (
        <FeaturedItem key={index} name={name} title={title} bid={bid} image={image} />
    ))

  return (
    <section className="rounded-[12px] shadow-heroShadow border border-[#EAECF0] p-[12px] md:p-[24px] bg-[#fff]">
      <div className="flex justify-between items-center pb-[24px] border-b borer-[#EAECF0] mb-[24px]">
         <h2 className="text-[#101828] font-semibold text-[0.87rem] md:text-[1.12rem]"> Featured Items </h2>
         <Button type="button" className="rounded-[8px] shadow-inviteShadow border border-[#D0D5DD] bg-[#fff] text-[#344054] text-[0.6rem] md:text-[0.87rem] font-semibold py-[8px] px-[7px] md:px-[14px]">
            View Auction
        </Button>
      </div>
      {
        isLoading ? (
          <div className='flex justify-center items-center'>
            <p className="text-[#101828] font-semibold text-[0.87rem] md:text-[1rem]">We will display the featured items soon...</p>
          </div>
          ) : isError ? (
          <div className='flex justify-center items-center'>
            <p className="text-[#101828] font-semibold text-[0.87rem] md:text-[1rem]">We are having some issues with the server, please try again later...</p>
          </div> ) : (
        <div className='lg:grid lg:grid-cols-4 lg:gap-6'>
          {displayData}
        </div> )
      }
    </section>
  )
}
