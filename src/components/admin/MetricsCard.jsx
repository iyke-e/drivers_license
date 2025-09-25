import React from 'react'
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";
import newApplicantIcon from "../../assets/admin/newApplicantIcon.svg"
import reissueIcon from "../../assets/admin/reissueIcon.svg"
import renewalIccon from "../../assets/admin/renewalIcon.svg"

const MetricsCard = ({ title, currentTotal, img, prevTotal, type }) => {

  const difference = () => {
    if (currentTotal > prevTotal) {
      const percentIncrease = ((currentTotal - prevTotal) / prevTotal) * 100

      return percentIncrease
    } else {
      const percentDecrease = ((prevTotal - currentTotal) / prevTotal) * 100
      return percentDecrease
    }

  }

  const diff = difference()

  return (
    <div className='grid gap-6 place-items-center text-center p-4'>
      <p className='text-[#202224]'>{title}</p>
      <div className='grid gap-6'>
        <img
          className='mx-auto'
          src={
            type === "new"
              ? newApplicantIcon
              : type === "reissue"
                ? reissueIcon
                : type === "renewal"
                  ? renewalIccon
                  : img
          } alt="" />
        <h1 className='text-3xl font-bold'>{currentTotal?.toLocaleString('en-US')}</h1>
      </div>
      <p className='flex gap-2'>
        <span> {currentTotal > prevTotal ? <IoMdTrendingUp className='text-xl text-[#00B69B]' /> : <IoMdTrendingDown className='text-xl text-red-500' />} {" "}
        </span>
        <span className={currentTotal > prevTotal ? "text-[#00B69B]" : "text-red-500"}>
          {diff?.toFixed(2)}%{" "}
        </span>
        <span>
          {currentTotal > prevTotal ? "Up" : "Down"} {" "}
        </span>
        from yesterday
      </p>

    </div>
  )
}

export default MetricsCard