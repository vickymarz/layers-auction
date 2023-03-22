import { HiOutlineThumbUp } from "react-icons/hi";
import wallet from '../../../../assets/images/wallet.png'
import gradient from '../../../../assets/images/bg-gradient.png'
import dot from '../../../../assets/images/dot.png'
import { Button } from "components";

export const Hero = () => {
  return (
    <section className='relative rounded-[12px] border border-[#EAECF0] bg-[#fff] flex flex-col items-start p-[12px] md:pb-[0px] md:px-[24px] md:pt-[24px]  shadow-heroShadow mt-[24px] md:mt-[48px] mb-[12px] md:mb-[24px] gap-y-[6px] md:gap-y-[12px]'>
      <div>
        <img src={gradient} alt="background" className="rounded-[16px] h-[80px] md:h-[100%]"/>
      </div>
      <div className="w-full flex justify-between items-start md:px-[32px] gap-x-[5px]">
        <div className="flex justify-start items-start gap-y-[5px] md:gap-y-[10px] relative">
          <div className="z-10 relative top-[-30px] md:top-[-60px] ">
            <img src={wallet} alt="wallet" />
          </div>
          <div className="flex flex-col justify-start items-start gap-y-[5px] md:gap-y-[10px]">
            <h2 className="text-[#101828] font-semibold text-[0.75rem] md:text-[1.5rem]">Starts in: 3 days : 2 hours : 24 minutes </h2>
            <div className="flex justify-start items-center gap-x-[10px] ">
              <div className="rounded-[16px] mix-blend-multiply flex gap-x-[7px] bg-[#FFFAEB] py-[4px] px-[12px] justify-center items-center">
                <img src={dot} alt="" className="w-[6px] h-[6px]"/>
                <span className="text-[#B54708] font-medium text-[0.75rem] md:text-[0.87rem]">Not Live</span>
              </div>
              <span className="text-[#475467] text-[0.75rem] md:text-[1rem]">Layers Auction</span>
            </div>
          </div>
        </div>
        <Button type="button" className="rounded-[8px] shadow-inviteShadow border border-[#D0D5DD] bg-[#fff] flex items-center gap-x-[2px] md:gap-x-[5px] py-[8px] px-[14px]">
          <HiOutlineThumbUp className="text-[#344054]"/>
          <span className="text-[#344054] text-[0.5rem] md:text-[0.87rem] font-semibold">Accept Invite</span>
        </Button>
      </div>
    </section>
  )
}

