import React from "react";
import Photosnap from "@/Components/atoms/Photosnap/Photosnap";

const Card = ({
  logo,
  company,
  isNew,
  isFeatured,
  job,
  post,
  jobType,
  location,
  tags,
}) => {
  return (
    <div className="bg-white mb-[24px] rounded-[5px]">
      <div className="flex items-center justify-between pt-[32px] pr-[40px] pb-[31px] pl-[40px]">
        <div className="flex gap-x-[24px] items-center">
          <div>
            <Photosnap src={logo} altText={`${company} logo`} />
          </div>

          <div>
            <div className="flex gap-x-[15px] mb-[5px] items-center">
              <h3 className="text-[18px] text-[#5CA5A5] font-bold">
                {company}
              </h3>
              {isNew && (
                <p className="uppercase font-bold bg-[#5CA5A5] rounded-[12px] px-[8px] text-white">
                  New!
                </p>
              )}
              {isFeatured && (
                <p className="uppercase font-bold bg-[#2B3939] rounded-[12px] px-[8px] text-white">
                  Featured
                </p>
              )}
            </div>

            <h2 className="text-[#2B3939] text-[22px]">{job}</h2>

            <div className="flex gap-x-[18.5px]">
              <p className="text-[#7C8F8F] font-[500]">{post}</p>
              <p className="text-[#7C8F8F] font-[500]">·</p>
              <p className="text-[#7C8F8F] font-[500]">{jobType}</p>
              <p className="text-[#7C8F8F] font-[500]">·</p>
              <p className="text-[#7C8F8F] font-[500]">{location}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-x-[16px]">
          {tags.length > 0 &&
            tags.map((tag, index) => (
              <p
                className="bg-[#5CA5A5] font-bold leading-[24px] tracking-[-0.123px] text-[#5CA5A5] pt-[5px] pr-[10px] pb-[3px] pl-[9px] rounded-[4px] bg-opacity-10"
                key={index}
              >
                {tag}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
