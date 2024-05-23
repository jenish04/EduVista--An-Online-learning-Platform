import React from "react";
import { Img, Text } from "./..";

export default function AllMentorsMaincard({
  bgOne = "images/defaultNoData.png",
  kristinwatson = "Kristin Watson",
  foundermentor = "Founder & Mentor",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[290px] w-[290px]">
        <Img src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=" alt="bg_one" className="w-[290px] md:h-auto object-cover rounded-[10px]" />
      </div>
      <div className="flex flex-row justify-start items-start w-full gap-6">
        <div className="flex flex-col items-start justify-start w-[84%] pt-[5px] gap-[13px]">
          <Text as="p" className="!text-black-900_02 !font-medium">
            {kristinwatson}
          </Text>
          <Text size="s" as="p" className="!text-gray-700_01">
            {foundermentor}
          </Text>
        </div>
        <Img src="images/defaultNoData.png" alt="arrowdown_nine" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}
