import { HiOutlineThumbUp } from "react-icons/hi";
import wallet from '../../../../assets/images/wallet.png'
import gradient from '../../../../assets/images/bg-gradient.png'
import { Button } from "components";

export const Hero = () => {
  return (
    <section className='relative rounded-[12px] border border-[#EAECF0] bg-[#fff] flex flex-col items-start p-[24px] shadow-heroShadow'>
      <div>
        <img src={gradient} alt="background" />
      </div>
      <div className="flex justify-between items-start px-[32px]">
        <div className="flex flex-col justify-start items-start gap-y-[10px] relative">
          <div className="z-10">
            <img src={wallet} alt="wallet" />
          </div>
          <div className="flex flex-col justify-start items-start gap-y-[10px]">
            <h2 className="text-[#101828] font-semibold text-[1.5rem]">Starts in: 3 days : 2 hours : 24 minutes </h2>
            <p className="flex justify-start items-center gap-x-[10px] ">
              <span className="rounded-[16px] bg-[#FFFAEB] mix-blend-multiply py-[4px] px-[12px] text-[#B54708] font-medium text-[0.87rem] before:content-['.'] before:ml-[4px] before:text-[#F79009]">Not Live</span>
              <span className="text-[#475467]">Layers Auction</span>
            </p>
          </div>
        </div>
        <Button type="button" className="rounded-[8px] shadow-inviteShadow border border-[#D0D5DD] bg-[#fff] flex items-center gap-x-[5px] py-[8px] px-[14px]">
          <HiOutlineThumbUp className="text-[#344054]"/>
          <span className="text-[#344054] text-[0.87rem] font-semibold">Accept Invite</span>
        </Button>
      </div>
    </section>
  )
}

