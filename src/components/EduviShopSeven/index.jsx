import React from "react";
import { RatingBar, Heading, Img } from "./..";

export default function EduviShopSeven({ thethree = "The Three Musketeers", price = "$40.00", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full md:h-auto p-5 bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[230px]">
          <Img
            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4HH0-Fk0yzDhnsTZXRkrfpS4pQ8gVojzYVlgvApZdoAq91mk7ePf8bgOb8Ol5ci4_7ct6cVs29S6AZRDQZg6GM7JHOzaQpRfNXdIalMw"
            alt="image_one"
            className="w-full md:h-auto sm:w-full object-cover rounded-[10px] max-w-xs transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-[9px]">
        <Heading as="h1">WanderLust</Heading>
        <div className="flex flex-row justify-between items-center w-full">
          <Heading as="h2" className="!text-red-300_01">
            $42.89
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
