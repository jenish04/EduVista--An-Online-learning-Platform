import React from "react";
import { RatingBar, Heading, Img } from "./..";

export default function EduviShopFour({ thethree = "The Three Musketeers", price = "$40.00", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full md:h-auto p-5 bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[230px]">
          <Img
            src="images/img_image_7.png"
            alt="image_one"
            className="w-full md:h-auto sm:w-full object-cover rounded-[10px] max-w-xs transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-[9px]">
        <Heading as="h1">Habits of Winning</Heading>
        <div className="flex flex-row justify-between items-center w-full">
          <Heading as="h2" className="!text-red-300_01">
            $24.50
          </Heading>
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffc107"
            activeColor="#ffc107"
            size={16}
            className="flex justify-between"
          />
        </div>
      </div>
    </div>
  );
}
